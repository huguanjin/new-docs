---
sidebar_position: 2
title: Supported Models
description: AI models and API formats supported by New API gateway.
---

# Supported Models

New API supports 40+ upstream providers through a unified gateway interface.

## Model Types

| Type | Description | Endpoint |
|------|-------------|----------|
| OpenAI Compatible | Chat, embeddings, images, audio | `/v1/chat/completions` |
| OpenAI Responses | Responses API format | `/v1/responses` |
| Claude Messages | Anthropic Messages format | `/v1/messages` |
| Google Gemini | Gemini native format | `/v1beta/models/*` |
| Midjourney | Image generation via Midjourney-Proxy | `/mj/*` |
| Suno | Music generation | `/suno/*` |
| Rerank | Cohere, Jina rerank models | `/v1/rerank` |

## Supported Interfaces

- **Chat Completions** — Standard chat interface
- **Responses** — OpenAI Responses API
- **Images** — Image generation and editing
- **Audio** — Transcription and speech synthesis
- **Embeddings** — Vector embeddings
- **Rerank** — Document reranking
- **Realtime** — Real-time conversation sessions

## Custom Upstream

Configure any legally authorized upstream endpoint as a custom channel. New API handles routing, billing, and format conversion automatically.

:::info API Reference
See the [API Reference](/api-reference) page or [Apifox documentation](https://ppf3lcwzqr.apifox.cn/) for detailed endpoint specifications.
:::
