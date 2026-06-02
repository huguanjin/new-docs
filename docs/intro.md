---
sidebar_position: 1
title: Introduction
description: New API is a next-generation LLM gateway and AI asset management system supporting 40+ providers.
keywords: [New API, LLM gateway, OpenAI proxy, Claude, Gemini]
---

# Welcome to New API

**New API** is a next-generation **LLM gateway** and **AI asset management system**. It aggregates 40+ upstream AI providers (OpenAI, Claude, Gemini, Azure, AWS Bedrock, and more) behind a unified API with user management, billing, rate limiting, and an admin dashboard.

## Why New API?

| Capability | Description |
|------------|-------------|
| 🎨 Modern UI | Clean dashboard with multi-language support |
| 🔄 One API | OpenAI-compatible endpoint for all models |
| 💰 Billing | Usage tracking, quota management, payment integration |
| 🔐 Security | OAuth, OIDC, JWT, token grouping, rate limits |
| 🚀 Smart Routing | Weighted channels, automatic retry, model limits |

## Quick Start

```bash
docker pull calciumion/new-api:latest
docker run --name new-api -d --restart always \
  -p 3000:3000 \
  -e TZ=Asia/Shanghai \
  -v ./data:/data \
  calciumion/new-api:latest
```

Visit `http://localhost:3000` after deployment.

## Documentation Map

- **[Installation](./getting-started/installation)** — Docker, Docker Compose, and manual setup
- **[Features](./guide/features)** — Full feature overview
- **[API Reference](/api-reference)** — Interactive API documentation
- **[FAQ](./support/faq)** — Common questions

## Important Notice

This project is intended solely for lawful and authorized AI API gateway, organization-level authentication, multi-model management, usage analytics, cost accounting, and private deployment scenarios.

:::tip Live API Docs
View the interactive API documentation on [Apifox](https://ppf3lcwzqr.apifox.cn/) or use our built-in [API Reference](/api-reference) page.
:::
