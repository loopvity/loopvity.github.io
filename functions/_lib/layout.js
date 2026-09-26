export function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function applyGlobals(html, settings) {
  return html
    .replaceAll("https://wa.me/85200000000", settings.whatsapp || "https://wa.me/85200000000")
    .replaceAll("loopvity@gmail.com", settings.email || "loopvity@gmail.com");
}

function homeCard(post, locale) {
  const href = "/" + post.slug + ".html";
  const more = locale === "en" ? "Read more →" : "閱讀全文 →";
  return `<a href="${esc(href)}" class="card-glass p-7 rounded-2xl border border-zinc-800 hover:border-cyan-400 transition-all duration-300 group block">
    <div class="flex justify-between items-center mb-3">
      <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">${esc(post.category || "Blog")}</span>
      <span class="text-xs text-gray-500 font-mono">${esc(post.published_at || "")}</span>
    </div>
    <h4 class="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition">${esc(post.title)}</h4>
    <p class="text-gray-400 text-sm leading-relaxed mb-4">${esc((post.excerpt || "").slice(0, 90))}</p>
    <span class="text-xs text-cyan-400 font-bold group-hover:underline">${more}</span>
  </a>`;
}

function blogCard(post) {
  const href = "/" + post.slug + ".html";
  const cover = post.cover && /^https?:|^\//.test(post.cover)
    ? `<img src="${esc(post.cover)}" alt="" class="w-full h-48 object-cover">`
    : `<div class="h-48 bg-gradient-to-br from-cyan-950/70 via-zinc-900 to-zinc-900 flex items-center justify-center text-6xl">${esc(post.cover || "📝")}</div>`;
  const more = post.locale === "en" ? "Read article" : "閱讀專文詳情";
  return `<article class="card-glass rounded-3xl overflow-hidden border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 flex flex-col group cursor-pointer" onclick="window.location.href='${esc(href)}'">
    ${cover}
    <div class="p-8 flex-1 flex flex-col">
      <div class="flex justify-between items-center mb-3">
        <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">${esc(post.category || "Blog")}</span>
        <span class="text-xs text-gray-500 font-mono">${esc(post.published_at || "")}</span>
      </div>
      <h4 class="text-xl font-bold text-white mb-4 leading-snug group-hover:text-cyan-400 transition">${esc(post.title)}</h4>
      <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-1">${esc((post.excerpt || "").slice(0, 110))}</p>
      <div class="pt-4 border-t border-zinc-800 text-xs text-cyan-400 font-bold flex items-center justify-between">
        <span>${more}</span><span class="group-hover:translate-x-1 transition">→</span>
      </div>
    </div>
  </article>`;
}

function navLinks(pages, current, mobile) {
  return pages.map((p) => {
    const active = p.slug === current;
    const cls = mobile
      ? (active ? "text-cyan-600 transition px-2 py-1 block" : "hover:text-cyan-600 transition px-2 py-1 block")
      : (active ? "text-cyan-600 transition" : "hover:text-cyan-600 transition");
    return `<a href="/${esc(p.slug)}.html" class="${cls}">${esc(p.nav_label)}</a>`;
  }).join("");
}

export function renderDocument({ page, settings, nav, posts, origin }) {
  const locale = page.locale === "en" ? "en" : "zh-HK";
  const langSwitch = page.pair_slug ? `/${page.pair_slug}.html` : (locale === "en" ? "/index.html" : "/index-en.html");
  const langLabel = locale === "en" ? "中文" : "EN";
  const siteUrl = (settings.site_url || origin).replace(/\/$/, "");
  const canonical = page.canonical || `${siteUrl}/${page.slug}.html`;
  const tabTitle = page.meta_title || `${page.title} | ${settings.site_name}`;
  const description = page.meta_description || settings.default_description || "";
  const ogImage = page.og_image || "";
  let content = applyGlobals(page.content_html || "", settings);
  const sectionsHtml = renderSections(page.sections_json);
  if (content.includes("<!--CMS_SECTIONS-->")) content = content.replace("<!--CMS_SECTIONS-->", sectionsHtml);
  else if (sectionsHtml) content += `<div class="max-w-4xl mx-auto w-full px-6 pt-14 md:pt-12 pb-20">${sectionsHtml}</div>`;
  if (content.includes("<!--CMS_HOME_POSTS-->")) {
    content = content.replace("<!--CMS_HOME_POSTS-->", posts.map((p) => homeCard(p, page.locale)).join("\n"));
  }
  if (content.includes("<!--CMS_POSTS-->")) {
    content = content.replace("<!--CMS_POSTS-->", posts.map((p) => blogCard({ ...p, locale: page.locale })).join("\n") || `<p class="text-gray-400 text-center col-span-full">${page.locale === "en" ? "No articles yet." : "尚未有文章。"}</p>`);
  }
  const wa = esc(settings.whatsapp || "#");
  const verification = settings.google_verification ? `<meta name="google-site-verification" content="${esc(settings.google_verification)}">` : "";
  const ga = settings.ga_id ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(settings.ga_id)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${esc(settings.ga_id)}');</script>` : "";
  const desktopNav = navLinks(nav, page.slug, false);
  const mobileNav = navLinks(nav, page.slug, true);

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(tabTitle)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${esc(page.robots || "index,follow")}">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" href="${esc(settings.favicon_url || "/logo.png")}">
  <link rel="apple-touch-icon" href="${esc(settings.favicon_url || "/logo.png")}">
  <meta property="og:type" content="${page.kind === "post" ? "article" : "website"}">
  <meta property="og:title" content="${esc(tabTitle)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  ${ogImage ? `<meta property="og:image" content="${esc(ogImage)}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  ${verification}
  ${ga}
  <script src="https://cdn.tailwindcss.com"></script>
  <script>(function(){try{if(localStorage.getItem('loopvity-theme')==='dark')document.documentElement.classList.add('theme-dark')}catch(e){}})();</script>
  <link rel="stylesheet" href="/theme.css">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
    html { overflow-y: scroll; scroll-behavior: smooth; }
    body { font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif; background-color: #f4f7fb; color: #111827; }
    html.theme-dark body { background-color: #0b0f19; color: #f3f4f6; }
    .gradient-brand { background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 50%, #9b51e0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .card-glass { background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(12px); border: 1px solid rgba(15, 23, 42, 0.08); }
    html.theme-dark .card-glass { background: rgba(17, 24, 39, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); }
    details > summary { list-style: none; }
    details > summary::-webkit-details-marker { display: none; }
  </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-white">
  <header class="sticky top-4 z-50 max-w-6xl mx-auto w-full px-4">
    <nav class="relative bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-full flex items-center justify-between shadow-xl shadow-black/20 border border-gray-100 text-gray-900">
      <a href="${locale === "en" ? "/index-en.html" : "/index.html"}" class="flex items-center shrink-0">
        <img src="${esc(settings.logo_url || "/logo.png")}" alt="${esc(settings.site_name)}" class="h-4 sm:h-6 w-auto">
      </a>
      <div class="hidden lg:flex items-center gap-8 text-sm font-bold">${desktopNav}</div>
      <div class="flex items-center gap-4">
        <a href="${esc(langSwitch)}" class="text-sm font-bold text-gray-500 hover:text-cyan-600 transition">${langLabel}</a>
        <button type="button" class="theme-toggle" data-theme-toggle aria-label="theme">
          <svg class="theme-icon-moon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
          <svg class="theme-icon-sun w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0L17.95 7.05M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg>
        </button>
        <a href="${wa}" target="_blank" class="hidden sm:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-bold text-sm hover:brightness-105 transition shadow-sm"><span>WhatsApp</span></a>
        <button id="mobile-menu-btn" class="lg:hidden text-gray-900 p-2 focus:outline-none" aria-label="menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div id="mobile-menu" class="hidden absolute top-full left-0 w-full mt-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-5 flex-col gap-4 text-sm font-bold text-gray-900 lg:hidden">
        ${mobileNav}
        <a href="${esc(langSwitch)}" class="text-gray-500 hover:text-cyan-600 transition px-2 py-1 block font-bold">${locale === "en" ? "中文" : "English (EN)"}</a>
        <a href="${wa}" target="_blank" class="sm:hidden flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 mt-2 rounded-full font-bold text-sm">WhatsApp</a>
      </div>
    </nav>
  </header>
  <main class="${esc(page.main_class || "flex-1 w-full")}">${content}</main>
  <footer class="max-w-6xl mx-auto w-full px-6 py-12 border-t border-zinc-900 text-gray-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
    <div>${esc(settings.footer_text)}</div>
    <div class="${locale === "en" ? "grid w-max max-w-full grid-cols-2 justify-items-center gap-x-5 gap-y-2.5 whitespace-nowrap text-center sm:flex sm:w-auto sm:max-w-none sm:items-center sm:gap-6" : "flex gap-4 sm:gap-6 flex-wrap justify-center"}">
      <a href="mailto:${esc(settings.email)}" class="hover:text-gray-300 transition">${esc(settings.email)}</a>
      <a href="${locale === "en" ? "/terms-en.html" : "/terms.html"}" class="hover:text-gray-300 transition">${locale === "en" ? "Terms & Conditions" : "條款及細則"}</a>
      <a href="${locale === "en" ? "/privacy-en.html" : "/privacy.html"}" class="hover:text-gray-300 transition">${locale === "en" ? "Privacy Policy" : "私隱政策"}</a>
      <a href="${locale === "en" ? "/cookie-en.html" : "/cookie.html"}" class="hover:text-gray-300 transition">${locale === "en" ? "Cookie Policy" : "Cookie 政策"}</a>
    </div>
  </footer>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      if (btn && menu) {
        btn.addEventListener('click', () => { menu.classList.toggle('hidden'); menu.classList.toggle('flex'); });
        document.addEventListener('click', (e) => { if (!btn.contains(e.target) && !menu.contains(e.target)) { menu.classList.add('hidden'); menu.classList.remove('flex'); } });
      }
      const form = document.getElementById('contact-form');
      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(form).entries());
          data.locale = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
          const btn = form.querySelector('button[type="submit"]');
          btn.disabled = true;
          try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
            if (!res.ok) throw new Error();
            form.reset();
            alert(data.locale === 'zh' ? '已收到你的訊息，我們會盡快回覆。' : 'Message received. We will reply soon.');
          } catch (err) {
            alert(data.locale === 'zh' ? '送出失敗，請稍後再試。' : 'Could not send. Please try again.');
          } finally { btn.disabled = false; }
        });
      }
    });
  </script>
  <script src="/theme.js"></script>
</body>
</html>`;
}

function richText(s) {
  const raw = s.html ? String(s.html) : "";
  if (!raw) return esc(s.text || "");
  return raw.replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (match, tag, attrs) => {
    const name = tag.toLowerCase();
    if (name === "a") {
      if (match.startsWith("</")) return "</a>";
      const href = /href\s*=\s*"([^"]*)"/i.exec(attrs);
      const url = href && /^(https?:|mailto:)/i.test(href[1]) ? href[1] : "";
      return url ? `<a href="${esc(url)}">` : "";
    }
    if (name === "span" || name === "font") {
      if (match.startsWith("</")) return "</span>";
      const color = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})/.exec(attrs);
      return color ? `<span style="color:${color[0]}">` : "";
    }
    if (!["b", "strong", "i", "em", "u", "s", "br"].includes(name)) return "";
    return match.startsWith("</") ? `</${name}>` : (name === "br" ? "<br>" : `<${name}>`);
  });
}

export function renderSections(raw) {
  let list = [];
  try { list = JSON.parse(raw || "[]"); } catch { list = []; }
  if (!Array.isArray(list)) return "";
  const inlineStyle = (s, fallback) => {
    const sizes = { s: "15px", m: "17px", l: "22px", xl: "32px" };
    const size = sizes[s.size] || fallback || "";
    const color = /^#[0-9a-fA-F]{6}$/.test(s.color || "") ? s.color : "";
    const bits = [];
    if (size) bits.push("font-size:" + size);
    if (color) bits.push("color:" + color);
    return bits.length ? ` style="${bits.join(";")}"` : "";
  };
  const html = list.map((s) => {
    if (!s || !s.type) return "";
    if (s.type === "heading") {
      const level = Math.min(6, Math.max(1, Number(s.level) || 2));
      return `<h${level} class="font-black leading-tight"${inlineStyle(s, "28px")}>${richText(s)}</h${level}>`;
    }
    if (s.type === "text") return `<p class="leading-relaxed whitespace-pre-wrap"${inlineStyle(s, "17px")}>${richText(s)}</p>`;
    if (s.type === "quote") return `<blockquote class="border-l-4 border-gray-300 pl-4 text-gray-600"${inlineStyle(s, "17px")}>${richText(s)}</blockquote>`;
    if (s.type === "list") {
      const tag = s.ordered ? "ol" : "ul";
      const cls = s.ordered ? "list-decimal" : "list-disc";
      const items = (Array.isArray(s.items) ? s.items : []).map((item) => `<li>${esc(item)}</li>`).join("");
      return `<${tag} class="${cls} pl-5 space-y-2"${inlineStyle(s, "17px")}>${items}</${tag}>`;
    }
    if (s.type === "image" && s.url) return `<img src="${esc(s.url)}" alt="${esc(s.alt || "")}" class="w-full rounded-2xl">`;
    if (s.type === "video" && s.url) return `<video src="${esc(s.url)}" controls class="w-full rounded-2xl"></video>`;
    if (s.type === "table") {
      const heads = (s.headers || []).map((h) => `<th class="border border-gray-200 px-3 py-2 text-left font-bold">${esc(h)}</th>`).join("");
      const rows = (s.rows || []).map((row) => `<tr>${(row || []).map((cell) => `<td class="border border-gray-200 px-3 py-2">${esc(cell)}</td>`).join("")}</tr>`).join("");
      return `<div class="overflow-auto"><table class="w-full border-collapse text-sm"><thead class="bg-gray-50"><tr>${heads}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
    if (s.type === "divider") return `<hr class="border-gray-200">`;
    return "";
  }).filter(Boolean).join("\n");
  return html ? `<div class="space-y-8">${html}</div>` : "";
}

export function articleTemplate({ title, category, date, cover, body, locale }) {
  const back = locale === "en" ? "Back to Blog" : "返回 Blog 文章列表";
  const blog = locale === "en" ? "/blog-en.html" : "/blog.html";
  const coverBlock = cover && /^https?:|^\//.test(cover)
    ? `<img src="${esc(cover)}" alt="" class="w-full h-48 sm:h-64 object-cover rounded-2xl mb-10">`
    : `<div class="w-full h-48 sm:h-64 bg-gradient-to-br from-cyan-950/60 via-zinc-900 to-zinc-950 rounded-2xl flex items-center justify-center border border-zinc-800 mb-10 text-6xl">${esc(cover || "📝")}</div>`;
  return `<div class="mb-8"><a href="${blog}" class="text-xs font-bold text-cyan-400 hover:underline">← ${back}</a></div>
<article class="card-glass rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl">
  <div class="flex items-center gap-3 mb-6">
    <span class="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">${esc(category || "Blog")}</span>
    <span class="text-xs text-gray-500 font-mono">${esc(date || "")}</span>
  </div>
  <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">${esc(title || "")}</h1>
  ${coverBlock}
  <div class="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed prose-content">${body || ""}</div>
</article>`;
}
