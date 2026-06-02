# New API Documentation Site

Official documentation for [New API](https://github.com/QuantumNous/new-api) — a next-generation LLM gateway and AI asset management system.

Built with [Docusaurus](https://docusaurus.io/) for SEO-friendly static site generation, multi-language support, and an admin CMS for content management.

## Features

- **SEO Optimized** — Static generation, sitemap, meta tags, Open Graph, RSS/Atom feeds
- **Multi-language** — English, 简体中文, 繁體中文, Français, 日本語, Русский, Tiếng Việt
- **Public Access** — All documentation pages are accessible without login
- **Admin CMS** — Login at `/admin` to edit documentation content
- **Apifox Integration** — Embedded interactive API docs from Apifox
- **OpenAPI Specs** — Download relay and management API specifications

## Quick Start

### Development

```bash
# Install dependencies
npm install
cd admin-server && npm install && cd ..

# Start docs site (port 3000)
npm start

# Start admin server (port 4000) — in another terminal
npm run admin

# Chinese locale
npm run start:zh
```

### Admin Login

Default credentials (change in production):

- **Username:** `admin`
- **Password:** `admin123`

Configure via `admin-server/.env`:

```bash
cp admin-server/.env.example admin-server/.env
# Edit ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET
```

### Production Build

```bash
npm run build
npm run serve
```

### Docker

```bash
docker compose up -d
# Docs: http://localhost:8080
# Admin API: http://localhost:4000
```

## Project Structure

```
new-api-docs/
├── docs/                  # English documentation (default locale)
├── i18n/                  # Translated content and UI strings
│   ├── zh-CN/
│   ├── zh-TW/
│   └── ...
├── src/pages/
│   ├── index.tsx          # Homepage
│   ├── api-reference.tsx  # Apifox API docs embed
│   └── admin.tsx          # Admin CMS UI
├── admin-server/          # Content management API
├── static/openapi/        # OpenAPI JSON specs
└── docusaurus.config.ts   # Site configuration
```

## Adding Translations

1. Run `npm run write-translations` to generate translation templates
2. Edit files in `i18n/{locale}/`
3. Add translated docs in `i18n/{locale}/docusaurus-plugin-content-docs/current/`

## API Documentation

- **Apifox:** https://ppf3lcwzqr.apifox.cn/
- **Built-in:** `/api-reference` page
- **OpenAPI:** `/openapi/relay.json`, `/openapi/api.json`

## License

Documentation content follows the New API project license. Docusaurus is MIT licensed.
