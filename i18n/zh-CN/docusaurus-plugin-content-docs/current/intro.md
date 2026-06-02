---
slug: /
sidebar_position: 1
title: 介绍
description: New API 是新一代大模型网关与 AI 资产管理系统，支持 40+ 提供商。
keywords: [New API, 大模型网关, OpenAI 代理, Claude, Gemini]
---

# 欢迎使用 New API

**New API** 是新一代 **大模型网关** 与 **AI 资产管理系统**。它将 40+ 上游 AI 提供商（OpenAI、Claude、Gemini、Azure、AWS Bedrock 等）聚合在统一 API 之后，提供用户管理、计费、速率限制和管理面板。

## 为什么选择 New API？

| 能力 | 说明 |
|------|------|
| 🎨 现代 UI | 简洁的多语言管理面板 |
| 🔄 统一 API | 所有模型共用一个 OpenAI 兼容端点 |
| 💰 计费 | 用量追踪、配额管理、支付集成 |
| 🔐 安全 | OAuth、OIDC、JWT、令牌分组、速率限制 |
| 🚀 智能路由 | 加权渠道、自动重试、模型限制 |

## 快速开始

```bash
docker pull calciumion/new-api:latest
docker run --name new-api -d --restart always \
  -p 3000:3000 \
  -e TZ=Asia/Shanghai \
  -v ./data:/data \
  calciumion/new-api:latest
```

部署完成后访问 `http://localhost:3000`。

## 文档导航

- **[安装指南](./getting-started/installation)** — Docker、Docker Compose 和手动部署
- **[功能特性](./guide/features)** — 完整功能概览
- **[API 参考](/api-reference)** — 交互式 API 文档
- **[常见问题](./support/faq)** — 常见问题解答

## 重要说明

本项目仅面向合法授权的 AI API 网关、组织内部鉴权、多模型管理、用量统计、成本核算和私有化部署场景。

:::tip 在线 API 文档
在 [Apifox](https://ppf3lcwzqr.apifox.cn/) 查看交互式 API 文档，或使用内置 [API 参考](/api-reference) 页面。
:::
