# lab

Local-first playground for web experiments. Same stack as
[the blog](https://github.com/rtkelly13/blog) — Next.js 16, React 19, Tailwind
v4, and the `@rtkelly13/design-system` theme — but nothing here ever deploys.
The repo is public; secrets stay in 1Password and are injected at launch by
[`op run`](https://developer.1password.com/docs/cli/op-run-command/), so raw
values never touch this checkout.

## Prerequisites

- Node ≥ 22, [pnpm](https://pnpm.io) ≥ 9
- [1Password CLI](https://developer.1password.com/docs/cli/get-started/) (`op`)
  with desktop-app integration — only needed once you add secrets

## Quickstart

```sh
pnpm install
pnpm dev        # resolves op:// references in .env, then starts Next
pnpm dev:plain  # no-op variant for experiments that need no secrets
```

## Secrets policy

- `.env` is **committed and holds only `op://<Vault>/<Item>/<Field>` pointers**
  plus empty placeholders. Never put a raw value in it.
- Anything uncommitted lives in `.env.local` (gitignored) — prefer adding an
  `op://` reference instead.
- Experiment scratch data (photo dumps, caches) goes in `experiments/<slug>/.data/`
  — gitignored by convention.

## Adding an experiment

1. Create `experiments/<slug>/index.tsx` exporting a default component.
2. Register it (metadata + `View`) in `lib/experiments.tsx`.
3. Done — `/` and `/experiments/<slug>` pick it up automatically.

## Commands

| Command            | What                          |
| ------------------ | ----------------------------- |
| `pnpm dev`         | dev server with op-injected env |
| `pnpm dev:plain`   | dev server, no op             |
| `pnpm build`       | production build (local only) |
| `pnpm typecheck`   | `tsc --noEmit`                |
| `pnpm lint`        | Biome check                   |
| `pnpm format`      | Biome format --write          |
