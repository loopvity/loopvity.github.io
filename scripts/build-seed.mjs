import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");

const specs = [
  { file: "index.html", slug: "index", locale: "zh", kind: "page", nav: 1, navLabel: "首頁", pair: "index-en", sort: 1 },
  { file: "index-en.html", slug: "index-en", locale: "en", kind: "page", nav: 1, navLabel: "Home", pair: "index", sort: 1 },
  { file: "cases.html", slug: "cases", locale: "zh", kind: "page", nav: 1, navLabel: "產品", pair: "cases-en", sort: 2 },
  { file: "cases-en.html", slug: "cases-en", locale: "en", kind: "page", nav: 1, navLabel: "Products", pair: "cases", sort: 2 },
  { file: "blog.html", slug: "blog", locale: "zh", kind: "page", nav: 1, navLabel: "Blog", pair: "blog-en", sort: 3 },
  { file: "blog-en.html", slug: "blog-en", locale: "en", kind: "page", nav: 1, navLabel: "Blog", pair: "blog", sort: 3 },
  { file: "contact.html", slug: "contact", locale: "zh", kind: "page", nav: 1, navLabel: "聯絡我們", pair: "contact-en", sort: 4 },
  { file: "contact-en.html", slug: "contact-en", locale: "en", kind: "page", nav: 1, navLabel: "Contact", pair: "contact", sort: 4 },
  { file: "privacy.html", slug: "privacy", locale: "zh", kind: "page", nav: 0, navLabel: "私隱政策", pair: "privacy-en", sort: 10 },
  { file: "privacy-en.html", slug: "privacy-en", locale: "en", kind: "page", nav: 0, navLabel: "Privacy", pair: "privacy", sort: 10 },
  { file: "terms.html", slug: "terms", locale: "zh", kind: "page", nav: 0, navLabel: "條款及細則", pair: "terms-en", sort: 11 },
  { file: "terms-en.html", slug: "terms-en", locale: "en", kind: "page", nav: 0, navLabel: "Terms", pair: "terms", sort: 11 },
  { file: "cookie.html", slug: "cookie", locale: "zh", kind: "page", nav: 0, navLabel: "Cookie 政策", pair: "cookie-en", sort: 12 },
  { file: "cookie-en.html", slug: "cookie-en", locale: "en", kind: "page", nav: 0, navLabel: "Cookies", pair: "cookie", sort: 12 },
  { file: "article-prompt-vault.html", slug: "article-prompt-vault", locale: "zh", kind: "post", nav: 0, navLabel: "", pair: "article-prompt-vault-en", sort: 1, category: "產品專文", published: "2026-09-23" },
  { file: "article-prompt-vault-en.html", slug: "article-prompt-vault-en", locale: "en", kind: "post", nav: 0, navLabel: "", pair: "article-prompt-vault", sort: 1, category: "Product", published: "2026-09-23" },
  { file: "article-app-native-vs-cross.html", slug: "article-app-native-vs-cross", locale: "zh", kind: "post", nav: 0, navLabel: "", pair: "article-app-native-vs-cross-en", sort: 2, category: "APP 開發", published: "2026-09-20" },
  { file: "article-app-native-vs-cross-en.html", slug: "article-app-native-vs-cross-en", locale: "en", kind: "post", nav: 0, navLabel: "", pair: "article-app-native-vs-cross", sort: 2, category: "App Development", published: "2026-09-20" },
];

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : "";
}

function transform(spec, inner) {
  let html = inner;
  if (spec.slug === "blog" || spec.slug === "blog-en") {
    const marker = 'id="article-grid">';
    const i = html.indexOf(marker);
    if (i >= 0) html = html.slice(0, i + marker.length) + "\n<!--CMS_POSTS-->\n</div>";
  }
  if (spec.slug === "index" || spec.slug === "index-en") {
    html = html.replace(
      /<div class="grid grid-cols-1 md:grid-cols-2 gap-8">[\s\S]*?<\/div>\s*<\/section>/,
      '<div class="grid grid-cols-1 md:grid-cols-2 gap-8">\n<!--CMS_HOME_POSTS-->\n</div>\n</section>'
    );
  }
  if (spec.slug.startsWith("contact")) {
    html = html.replace(
      /<form onsubmit="event\.preventDefault\(\); alert\([^"]*\);" class="space-y-6">/,
      '<form id="contact-form" class="space-y-6">'
    );
    html = html.replace('type="text" required placeholder="例如：Alex', 'name="name" type="text" required placeholder="例如：Alex');
    html = html.replace('type="text" required placeholder="e.g. Alex', 'name="name" type="text" required placeholder="e.g. Alex');
    html = html.replace('type="email" required', 'name="email" type="email" required');
    html = html.replace('id="target-app"', 'id="target-app" name="app"');
    html = html.replace('id="issue-category"', 'id="issue-category" name="topic"');
    html = html.replace('placeholder="例如：iPhone', 'name="device" placeholder="例如：iPhone');
    html = html.replace('placeholder="e.g. iPhone', 'name="device" placeholder="e.g. iPhone');
    html = html.replace('<textarea rows="4" required', '<textarea name="message" rows="4" required');
  }
  return html.trim();
}

const pages = specs.map((spec) => {
  const raw = fs.readFileSync(path.join(root, spec.file), "utf8");
  const main = raw.match(/<main([^>]*)>([\s\S]*?)<\/main>/);
  if (!main) throw new Error("no main in " + spec.file);
  const title = pick(raw, /<title>([\s\S]*?)<\/title>/);
  const description = pick(raw, /<meta name="description" content="([\s\S]*?)"/);
  const h1 = pick(main[2], /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const excerpt = pick(main[2], /<p[^>]*>([\s\S]*?)<\/p>/).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 220);
  const cover = pick(main[2], /<div class="h-48[\s\S]*?>([\s\S]*?)<\/div>/) || pick(main[2], /text-6xl[^>]*>([^<]+)/);
  return {
    ...spec,
    title: h1 || title,
    metaTitle: title,
    metaDescription: description,
    mainClass: (main[1].match(/class="([^"]*)"/) || [, ""])[1],
    content: transform(spec, main[2]),
    excerpt,
    cover: (cover || "").replace(/<[^>]+>/g, "").trim().slice(0, 8) || "📝",
  };
});

const out = path.join(root, "functions", "_lib", "seed-data.js");
fs.writeFileSync(out, "export const seedPages = " + JSON.stringify(pages) + ";\n");
console.log("pages", pages.length, "bytes", fs.statSync(out).size);
