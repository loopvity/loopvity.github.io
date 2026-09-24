const COOKIE = "lv_session";

export async function hashPassword(password, saltBytes) {
  const salt = saltBytes || crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" }, key, 256);
  const hash = [...new Uint8Array(bits)].map((b) => b.toString(16).padStart(2, "0")).join("");
  const saltHex = [...salt].map((b) => b.toString(16).padStart(2, "0")).join("");
  return saltHex + ":" + hash;
}

export async function verifyPassword(password, stored) {
  const [saltHex, hash] = String(stored || "").split(":");
  if (!saltHex || !hash) return false;
  const salt = new Uint8Array(saltHex.match(/.{2}/g).map((h) => parseInt(h, 16)));
  const next = await hashPassword(password, salt);
  return next === saltHex + ":" + hash;
}

export function readCookie(request, name) {
  const raw = request.headers.get("Cookie") || "";
  const part = raw.split(";").map((s) => s.trim()).find((s) => s.startsWith(name + "="));
  return part ? decodeURIComponent(part.slice(name.length + 1)) : "";
}

export async function getUser(env, request) {
  const token = readCookie(request, COOKIE);
  if (!token) return null;
  const row = await env.DB.prepare(
    "SELECT u.id, u.username, u.must_change FROM sessions s JOIN admin_users u ON u.id = s.user_id WHERE s.token = ? AND s.expires_at > ?"
  ).bind(token, Date.now()).first();
  return row || null;
}

export async function startSession(env, userId) {
  const token = [...crypto.getRandomValues(new Uint8Array(32))].map((b) => b.toString(16).padStart(2, "0")).join("");
  const expires = Date.now() + 14 * 24 * 3600 * 1000;
  await env.DB.prepare("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)").bind(token, userId, expires).run();
  return token;
}

export function sessionCookie(token, request) {
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  const value = token ? `${COOKIE}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=1209600${secure}` : `${COOKIE}=; HttpOnly; Path=/; Max-Age=0${secure}`;
  return value;
}

export function assertSameOrigin(request) {
  const origin = request.headers.get("Origin");
  if (!origin) return;
  if (origin !== new URL(request.url).origin) {
    const err = new Error("來源不符");
    err.status = 403;
    throw err;
  }
}
