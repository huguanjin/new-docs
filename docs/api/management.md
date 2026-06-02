---
sidebar_position: 3
title: Management API
description: Admin and dashboard API endpoints for New API management.
---

# Management API

The management API is used by the dashboard and for programmatic administration.

## Authentication

Management endpoints require a session cookie or admin API token obtained after dashboard login.

## Common Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/status` | System status |
| GET | `/api/user/self` | Current user info |
| GET | `/api/token` | List API tokens |
| POST | `/api/token` | Create API token |
| GET | `/api/channel` | List channels |
| POST | `/api/channel` | Create channel |
| GET | `/api/log` | Usage logs |
| GET | `/api/models` | Available models |

## System Status

```bash
curl https://your-gateway.com/api/status
```

Response:

```json
{
  "success": true,
  "data": {
    "version": "x.x.x",
    "start_time": 1234567890
  }
}
```

## OpenAPI Spec

Download the full management API specification: [api.json](/openapi/api.json)

:::warning Admin Only
Management API endpoints require administrator privileges. Do not expose admin credentials publicly.
:::
