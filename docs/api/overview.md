---
sidebar_position: 1
title: API Overview
description: New API gateway endpoints and authentication overview.
---

# API Overview

New API provides two categories of APIs:

1. **Relay API** — OpenAI-compatible endpoints for AI model inference
2. **Management API** — Dashboard and administration endpoints

## Base URL

```
https://your-gateway.com
```

## Authentication

```http
Authorization: Bearer YOUR_API_KEY
```

## Relay Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/chat/completions` | Chat completions |
| POST | `/v1/responses` | OpenAI Responses |
| POST | `/v1/embeddings` | Embeddings |
| POST | `/v1/images/generations` | Image generation |
| POST | `/v1/audio/transcriptions` | Audio transcription |
| POST | `/v1/messages` | Claude Messages |
| POST | `/v1/rerank` | Rerank documents |

## Interactive Documentation

:::tip Apifox Live Docs
Browse the full interactive API documentation on **[Apifox](https://ppf3lcwzqr.apifox.cn/)** with request examples and try-it-out functionality.
:::

You can also use our built-in **[API Reference](/api-reference)** page powered by OpenAPI specs.

## OpenAPI Specs

Download OpenAPI specifications:

- [Relay API](/openapi/relay.json) — AI model relay endpoints
- [Management API](/openapi/api.json) — Admin and dashboard endpoints

## Rate Limits

Rate limits are configurable per user, token, and model. Default limits can be set in **System Settings → Rate Limit**.
