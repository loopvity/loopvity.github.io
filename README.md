# Loopvity 網站與後台

前台由 Cloudflare D1 的內容即時產生。在後台儲存後，重新整理前台就會看到新內容，Meta Title、Description、Logo、Favicon 也會一起更新。

## 本地預覽

```bash
npm install
npm run dev
```

- 前台：http://127.0.0.1:8788
- 後台：http://127.0.0.1:8788/admin
- 帳號：`admin`
- 密碼：`.dev.vars` 裡的 `ADMIN_PASSWORD`（預設 `Loopvity2026`）

## 部署到 Cloudflare

1. `npx wrangler login`
2. `npx wrangler d1 create loopvity-db`，把回傳的 `database_id` 寫進 `wrangler.toml`
3. `npx wrangler r2 bucket create loopvity-media`
4. `npx wrangler pages secret put ADMIN_PASSWORD`
5. `npm run deploy`
6. 在 Cloudflare Pages 綁上自己的網域

## Google Search Console

1. 後台「網站與 SEO」填上正式網址，例如 `https://loopvity.com`
2. 貼上 Search Console 的 HTML 標記驗證碼並儲存
3. 在 Search Console 提交 `https://你的網域/sitemap.xml`
