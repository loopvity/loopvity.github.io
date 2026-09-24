import { ensureDb, getSettings, saveSettings } from "./_lib/db.js";
import { assertSameOrigin, getUser, hashPassword, sessionCookie, startSession, verifyPassword } from "./_lib/auth.js";
import { articleTemplate, esc, renderDocument } from "./_lib/layout.js";
import { editorScript } from "./_lib/editor-script.js";

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra },
  });
}

function html(body, status = 200) {
  return new Response(body, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

async function requireUser(env, request) {
  const user = await getUser(env, request);
  if (!user) {
    const err = new Error("未登入");
    err.status = 401;
    throw err;
  }
  return user;
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\.html$/, "")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function loadPage(env, slug) {
  return env.DB.prepare("SELECT * FROM pages WHERE slug = ? AND status = 'published'").bind(slug).first();
}

async function renderPublic(env, page, origin) {
  const settings = await getSettings(env);
  const nav = (await env.DB.prepare(
    "SELECT slug, nav_label FROM pages WHERE show_in_nav = 1 AND locale = ? AND status = 'published' ORDER BY sort_order, id"
  ).bind(page.locale).all()).results || [];
  let posts = [];
  if ((page.content_html || "").includes("<!--CMS_")) {
    posts = (await env.DB.prepare(
      "SELECT slug, title, excerpt, category, cover, published_at FROM pages WHERE kind = 'post' AND locale = ? AND status = 'published' ORDER BY published_at DESC, id DESC"
    ).bind(page.locale).all()).results || [];
    if ((page.content_html || "").includes("<!--CMS_HOME_POSTS-->")) posts = posts.slice(0, 2);
  }
  return html(renderDocument({ page, settings, nav, posts, origin }));
}

async function handleAdminApi(request, env, path) {
  const method = request.method;
  if (path === "/api/admin/login" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    const user = await env.DB.prepare("SELECT * FROM admin_users WHERE username = ?").bind(String(body.username || "").trim()).first();
    if (!user || !(await verifyPassword(body.password || "", user.password_hash))) return json({ error: "帳號或密碼不正確" }, 401);
    const token = await startSession(env, user.id);
    return json({ ok: true, mustChange: !!user.must_change }, 200, { "set-cookie": sessionCookie(token, request) });
  }
  if (path === "/api/admin/logout" && method === "POST") {
    const user = await getUser(env, request);
    if (user) await env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(user.id).run();
    return json({ ok: true }, 200, { "set-cookie": sessionCookie("", request) });
  }

  const user = await requireUser(env, request);
  if (path === "/api/admin/me" && method === "GET") return json({ username: user.username, mustChange: !!user.must_change });

  if (path === "/api/admin/password" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    if (!body.password || String(body.password).length < 8) return json({ error: "密碼至少 8 個字元" }, 400);
    const hash = await hashPassword(body.password);
    await env.DB.prepare("UPDATE admin_users SET password_hash = ?, must_change = 0 WHERE id = ?").bind(hash, user.id).run();
    return json({ ok: true });
  }

  if (path === "/api/admin/dashboard" && method === "GET") {
    const pages = await env.DB.prepare("SELECT COUNT(*) AS n FROM pages WHERE kind = 'page'").first();
    const posts = await env.DB.prepare("SELECT COUNT(*) AS n FROM pages WHERE kind = 'post'").first();
    const drafts = await env.DB.prepare("SELECT COUNT(*) AS n FROM pages WHERE status = 'draft'").first();
    const unread = await env.DB.prepare("SELECT COUNT(*) AS n FROM messages WHERE is_read = 0").first();
    return json({ pages: pages.n, posts: posts.n, drafts: drafts.n, unread: unread.n });
  }

  if (path === "/api/admin/pages" && method === "GET") {
    const kind = new URL(request.url).searchParams.get("kind") || "page";
    const { results } = await env.DB.prepare(
      "SELECT id, slug, locale, kind, title, status, updated_at, published_at, show_in_nav, sort_order, pair_slug, category, cover FROM pages WHERE kind = ? ORDER BY sort_order, id"
    ).bind(kind).all();
    return json({ items: results || [] });
  }

  if (path === "/api/admin/pages/reorder" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    for (const item of body.items || []) {
      await env.DB.prepare("UPDATE pages SET sort_order = ? WHERE id = ?").bind(Number(item.sort_order) || 0, Number(item.id)).run();
    }
    return json({ ok: true });
  }

  if (path === "/api/admin/pages" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    const kind = body.kind === "post" ? "post" : "page";
    const slug = slugify(body.slug || body.title);
    if (!slug) return json({ error: "請填寫網址代稱" }, 400);
    const now = new Date().toISOString();
    const locale = body.locale === "en" ? "en" : "zh";
    const html = String(body.content_html || "").trim();
    const useHtml = body.use_html === true && !!html;
    const sectionsJson = JSON.stringify(useHtml ? [] : (Array.isArray(body.sections) ? body.sections : []));
    const content = useHtml ? html : (kind === "post"
      ? articleTemplate({ title: body.title, category: body.category, date: body.published_at, cover: body.cover, body: "<!--CMS_SECTIONS-->", locale })
      : `<div class="max-w-4xl mx-auto w-full px-6 pt-14 md:pt-12 pb-20"><!--CMS_SECTIONS--></div>`);
    const mainClass = kind === "post" ? "flex-1 max-w-4xl mx-auto px-6 pt-14 md:pt-12 pb-20 w-full" : "flex-1 w-full";
    try {
      const result = await env.DB.prepare(
        `INSERT INTO pages (slug, locale, kind, title, nav_label, show_in_nav, sort_order, pair_slug, meta_title, meta_description, og_image, canonical, robots, main_class, content_html, excerpt, category, cover, published_at, status, updated_at, sections_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        slug, locale, kind, body.title || slug, body.nav_label || "", body.show_in_nav ? 1 : 0, Number(body.sort_order) || 0,
        slugify(body.pair_slug || ""), body.meta_title || "", body.meta_description || "", body.og_image || "", body.canonical || "",
        body.robots || "index,follow", mainClass, content,
        body.excerpt || "", body.category || "", body.cover || "", body.published_at || now.slice(0, 10),
        body.status === "draft" ? "draft" : "published", now, sectionsJson
      ).run();
      return json({ id: result.meta.last_row_id, slug });
    } catch (e) {
      return json({ error: "這個網址代稱已存在" }, 400);
    }
  }

  const pageMatch = path.match(/^\/api\/admin\/pages\/(\d+)$/);
  if (pageMatch && method === "GET") {
    const row = await env.DB.prepare("SELECT * FROM pages WHERE id = ?").bind(pageMatch[1]).first();
    if (!row) return json({ error: "找不到" }, 404);
    return json(row);
  }
  if (pageMatch && method === "PUT") {
    assertSameOrigin(request);
    const body = await request.json();
    const existing = await env.DB.prepare("SELECT * FROM pages WHERE id = ?").bind(pageMatch[1]).first();
    if (!existing) return json({ error: "找不到" }, 404);
    const slug = slugify(body.slug || existing.slug);
    const now = new Date().toISOString();
    const html = String(body.content_html || "").trim();
    const useHtml = body.use_html === true && !!html;
    const sections = useHtml ? [] : (Array.isArray(body.sections) ? body.sections : []);
    const sectionsJson = JSON.stringify(sections);
    const locale = body.locale === "en" ? "en" : (existing.locale || "zh");
    const shell = existing.kind === "post"
      ? articleTemplate({ title: body.title, category: body.category, date: body.published_at, cover: body.cover, body: "<!--CMS_SECTIONS-->", locale })
      : `<div class="max-w-4xl mx-auto w-full px-6 pt-14 md:pt-12 pb-20"><!--CMS_SECTIONS--></div>`;
    const managed = String(existing.content_html || "").includes("<!--CMS_SECTIONS-->");
    const content = useHtml ? html : (sections.length ? shell : (managed && existing.kind === "post" ? shell : existing.content_html));
    await env.DB.prepare(
      `UPDATE pages SET slug=?, locale=?, title=?, nav_label=?, show_in_nav=?, sort_order=?, pair_slug=?, meta_title=?, meta_description=?, og_image=?, canonical=?, robots=?, content_html=?, excerpt=?, category=?, cover=?, published_at=?, status=?, updated_at=?, sections_json=? WHERE id=?`
    ).bind(
      slug, body.locale === "en" ? "en" : "zh", body.title || existing.title, body.nav_label || "",
      body.show_in_nav ? 1 : 0, Number(body.sort_order) || 0, slugify(body.pair_slug || ""),
      body.meta_title || "", body.meta_description || "", body.og_image || "", body.canonical || "",
      body.robots || "index,follow", content, body.excerpt || "", body.category || "", body.cover || "",
      body.published_at || "", body.status === "draft" ? "draft" : "published", now, sectionsJson, existing.id
    ).run();
    return json({ ok: true, slug });
  }
  if (pageMatch && method === "DELETE") {
    assertSameOrigin(request);
    await env.DB.prepare("DELETE FROM pages WHERE id = ?").bind(pageMatch[1]).run();
    return json({ ok: true });
  }

  if (path === "/api/admin/settings" && method === "GET") return json(await getSettings(env));
  if (path === "/api/admin/settings" && method === "PUT") {
    assertSameOrigin(request);
    return json(await saveSettings(env, await request.json()));
  }

  if (path === "/api/admin/media" && method === "GET") {
    const { results } = await env.DB.prepare("SELECT id, filename, mime, kind, created_at FROM media ORDER BY id DESC").all();
    return json({ items: (results || []).map((m) => ({ ...m, url: "/media/" + m.id })) });
  }
  if (path === "/api/admin/media" && method === "POST") {
    assertSameOrigin(request);
    if (!env.MEDIA) return json({ error: "尚未綁定 R2 圖片庫" }, 500);
    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") return json({ error: "請選擇檔案" }, 400);
    const mime = file.type || "application/octet-stream";
    const kind = mime.startsWith("video/") ? "video" : mime.startsWith("image/") ? "image" : "";
    if (!kind) return json({ error: "只接受圖片或影片" }, 400);
    const now = new Date().toISOString();
    const inserted = await env.DB.prepare("INSERT INTO media (r2_key, filename, mime, created_at, byte_size, kind) VALUES ('pending', ?, ?, ?, ?, ?)").bind(file.name || "file", mime, now, file.size || 0, kind).run();
    const id = inserted.meta.last_row_id;
    const key = "media/" + id;
    await env.MEDIA.put(key, await file.arrayBuffer(), { httpMetadata: { contentType: mime } });
    await env.DB.prepare("UPDATE media SET r2_key = ? WHERE id = ?").bind(key, id).run();
    return json({ id, url: "/media/" + id, kind, mime });
  }

  if (path === "/api/admin/preview" && method === "POST") {
    assertSameOrigin(request);
    const body = await request.json();
    const url = new URL(request.url);
    const settings = await getSettings(env);
    const locale = body.locale === "en" ? "en" : "zh";
    const page = {
      slug: slugify(body.slug || "preview") || "preview",
      locale,
      kind: body.kind === "post" ? "post" : "page",
      title: body.title || "",
      pair_slug: body.pair_slug || "",
      meta_title: body.meta_title || "",
      meta_description: body.meta_description || "",
      og_image: body.og_image || "",
      canonical: "",
      robots: "noindex,nofollow",
      main_class: body.main_class || "flex-1 w-full",
      content_html: body.content_html || "",
    };
    const rendered = await renderPublic(env, page, url.origin);
    let text = await rendered.text();
    text = text.replace("<head>", `<head><base href="${esc(url.origin)}/">`);
    text = text.replace("</body>", `<script>${editorScript}</script></body>`);
    return html(text);
  }

  if (path === "/api/admin/messages" && method === "GET") {
    const { results } = await env.DB.prepare("SELECT * FROM messages ORDER BY id DESC LIMIT 200").all();
    return json({ items: results || [] });
  }
  const msgMatch = path.match(/^\/api\/admin\/messages\/(\d+)\/read$/);
  if (msgMatch && method === "POST") {
    await env.DB.prepare("UPDATE messages SET is_read = 1 WHERE id = ?").bind(msgMatch[1]).run();
    return json({ ok: true });
  }

  return json({ error: "找不到" }, 404);
}

export async function onRequest(context) {
  const { request, env } = context;
  try {
    await ensureDb(env);
  } catch (err) {
    return json({ error: err.message || "資料庫尚未就緒" }, 500);
  }
  const url = new URL(request.url);
  const path = decodeURIComponent(url.pathname);

  try {
    if (path.startsWith("/api/admin/")) return await handleAdminApi(request, env, path);

    if (path === "/api/contact" && request.method === "POST") {
      const body = await request.json();
      if (!body.email || !body.message) return json({ error: "請填寫電郵與內容" }, 400);
      await env.DB.prepare(
        "INSERT INTO messages (name, email, app, topic, device, body, locale, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
      ).bind(body.name || "", body.email, body.app || "", body.topic || "", body.device || "", body.message, body.locale || "zh", new Date().toISOString()).run();
      return json({ ok: true });
    }

    const mediaMatch = path.match(/^\/media\/(\d+)$/);
    if (mediaMatch) {
      const row = await env.DB.prepare("SELECT * FROM media WHERE id = ?").bind(mediaMatch[1]).first();
      if (!row || !env.MEDIA) return new Response("找不到圖片", { status: 404 });
      const obj = await env.MEDIA.get(row.r2_key);
      if (!obj) return new Response("找不到圖片", { status: 404 });
      return new Response(obj.body, { headers: { "content-type": row.mime, "cache-control": "public, max-age=86400" } });
    }

    const settings = await getSettings(env);
    const origin = (settings.site_url || url.origin).replace(/\/$/, "");

    if (path === "/robots.txt") {
      const body = `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\n\nSitemap: ${origin}/sitemap.xml\n${settings.robots_extra || ""}`;
      return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
    }
    if (path === "/sitemap.xml") {
      const { results } = await env.DB.prepare("SELECT slug, updated_at, robots FROM pages WHERE status = 'published'").all();
      const urls = (results || []).filter((p) => !String(p.robots).includes("noindex")).map((p) =>
        `<url><loc>${esc(origin + "/" + p.slug + ".html")}</loc><lastmod>${esc((p.updated_at || "").slice(0, 10))}</lastmod></url>`
      ).join("");
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
        headers: { "content-type": "application/xml; charset=utf-8" },
      });
    }

    const clean = path.replace(/^\/+|\/+$/g, "");
    const slug = clean === "" ? "index" : clean.replace(/\.html$/, "");
    const pageLike = /^[a-z0-9-]+$/.test(slug);
    if (pageLike) {
      const page = await loadPage(env, slug);
      if (page) return renderPublic(env, page, url.origin);
    }
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404 || !pageLike) return asset;
    return html(`<!DOCTYPE html><html lang="zh-HK"><head><meta charset="UTF-8"><title>找不到頁面 | ${esc(settings.site_name)}</title><link rel="icon" href="${esc(settings.favicon_url || "/logo.png")}"><link rel="stylesheet" href="/theme.css"></head><body style="font-family:sans-serif;display:grid;place-items:center;min-height:100vh"><div><h1>找不到這個頁面</h1><p><a href="/">返回首頁</a></p></div></body></html>`, 404);
  } catch (err) {
    const status = err.status || 500;
    return json({ error: err.message || "錯誤" }, status);
  }
}
