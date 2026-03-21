# Ticketlemon Gateway

Elysia API gateway on [Bun](https://bun.sh). Proxies traffic to the auth and user services.

## Requirements

- [Bun](https://bun.sh) (see `bun.lock` in-repo)

## Environment

| Variable           | Description                           |
| ------------------ | ------------------------------------- |
| `PORT`             | HTTP port for this gateway (required) |
| `AUTH_SERVICE_URL` | Base URL of the auth service          |
| `USER_SERVICE_URL` | Base URL of the user service          |

Example:

```bash
export PORT=3000
export AUTH_SERVICE_URL=http://localhost:8001
export USER_SERVICE_URL=http://localhost:8002
```

## Install & run

```bash
bun install
bun run dev
```

Then open `http://localhost:<PORT>/` (replace with your `PORT`).

## Scripts

| Script                 | Description           |
| ---------------------- | --------------------- |
| `bun run dev`          | Dev server with watch |
| `bun run format`       | Format with Prettier  |
| `bun run format:check` | Check formatting (CI) |

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs Prettier check and TypeScript (`tsc --noEmit`) on pushes and pull requests to `main`, `master`, and `dev`.
