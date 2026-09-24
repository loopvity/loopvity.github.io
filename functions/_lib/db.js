import { seedPages } from "./seed-data.js";

const SCHEMA = `
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  must_change INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS pages (
  id INTEGER PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  locale TEXT NOT NULL,
  kind TEXT NOT NULL,
  title TEXT NOT NULL,
  nav_label TEXT,
  show_in_nav INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  pair_slug TEXT,
  meta_title TEXT,
  meta_description TEXT,
  og_image TEXT,
  canonical TEXT,
  robots TEXT NOT NULL DEFAULT 'index,follow',
  main_class TEXT,
  content_html TEXT NOT NULL,
  excerpt TEXT,
  category TEXT,
  cover TEXT,
  published_at TEXT,
  status TEXT NOT NULL DEFAULT 'published',
  updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS media (
  id INTEGER PRIMARY KEY,
  r2_key TEXT NOT NULL,
  filename TEXT NOT NULL,
  mime TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  app TEXT,
  topic TEXT,
  device TEXT,
  body TEXT,
  locale TEXT,
  is_read INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);
`;

const DEFAULT_SETTINGS = {
  site_name: "Loopvity",
  site_url: "",
  logo_url: "/logo.png",
  favicon_url: "/logo.png",
  whatsapp: "https://wa.me/85200000000",
  email: "loopvity@gmail.com",
  footer_text: "© 2026 Loopvity Studio. All rights reserved.",
  google_verification: "",
  ga_id: "",
  default_description: "Loopvity 是一家獨立軟體工作室，專注於 iOS 與 Android 實用工具研發。",
  robots_extra: "",
};

export async function ensureDb(env) {
  if (!env.DB) throw new Error("缺少 D1 資料庫綁定 DB");
  for (const statement of SCHEMA.split(";").map((s) => s.trim()).filter(Boolean)) {
    await env.DB.prepare(statement).run();
  }
  for (const statement of [
    "ALTER TABLE media ADD COLUMN byte_size INTEGER",
    "ALTER TABLE media ADD COLUMN kind TEXT",
    "ALTER TABLE pages ADD COLUMN sections_json TEXT",
  ]) {
    try { await env.DB.prepare(statement).run(); } catch (e) {}
  }
  const row = await env.DB.prepare("SELECT COUNT(*) AS n FROM pages").first();
  if (!row || row.n === 0) await seed(env);
  const admin = await env.DB.prepare("SELECT id FROM admin_users LIMIT 1").first();
  if (!admin) await createInitialAdmin(env);
}

async function seed(env) {
  const now = new Date().toISOString();
  const stmts = Object.entries(DEFAULT_SETTINGS).map(([key, value]) =>
    env.DB.prepare("INSERT INTO settings (key, value) VALUES (?, ?)").bind(key, value)
  );
  for (const p of seedPages) {
    stmts.push(
      env.DB.prepare(
        `INSERT INTO pages (slug, locale, kind, title, nav_label, show_in_nav, sort_order, pair_slug, meta_title, meta_description, robots, main_class, content_html, excerpt, category, cover, published_at, status, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'index,follow', ?, ?, ?, ?, ?, ?, 'published', ?)`
      ).bind(
        p.slug, p.locale, p.kind, p.title, p.navLabel || "", p.nav, p.sort, p.pair || "",
        p.metaTitle, p.metaDescription, p.mainClass, p.content, p.excerpt || "",
        p.category || "", p.cover || "", p.published || "", now
      )
    );
  }
  await env.DB.batch(stmts);
}

async function createInitialAdmin(env) {
  const { hashPassword } = await import("./auth.js");
  const password = env.ADMIN_PASSWORD || "Loopvity2026";
  const username = env.ADMIN_USERNAME || "admin";
  const passwordHash = await hashPassword(password);
  await env.DB.prepare("INSERT INTO admin_users (username, password_hash, must_change) VALUES (?, ?, 1)").bind(username, passwordHash).run();
}

export async function getSettings(env) {
  const { results } = await env.DB.prepare("SELECT key, value FROM settings").all();
  const settings = { ...DEFAULT_SETTINGS };
  for (const row of results || []) settings[row.key] = row.value;
  return settings;
}

export async function saveSettings(env, patch) {
  const allowed = Object.keys(DEFAULT_SETTINGS);
  const stmts = [];
  for (const key of allowed) {
    if (patch[key] === undefined) continue;
    stmts.push(
      env.DB.prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value").bind(key, String(patch[key] ?? ""))
    );
  }
  if (stmts.length) await env.DB.batch(stmts);
  return getSettings(env);
}
