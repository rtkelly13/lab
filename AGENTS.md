# AGENTS.md

Local-first experiments playground (`@rtkelly13/lab`): Next.js 16 App Router,
React 19, Tailwind CSS v4 with the `@rtkelly13/design-system` theme, pnpm
(`node >=22`), Biome. The repo is **public** and **never deploys** — it exists
to run experiments on one machine.

## Invariants

- **Public repo, no committed secrets.** `.env` is gitignored and local-only;
  it may contain only `op://<Vault>/<Item>/<Field>` references (resolved by
  `op run` at launch), never raw values. `.env.example` is the committed
  template — keep real vault/item names out of it. Never add credentials,
  op:// references, or experiment data to any tracked file.
- **One folder per experiment** at `experiments/<slug>/`, self-contained
  (component, helpers, `.data/` scratch which is gitignored). Register it in
  `lib/experiments.tsx` — that single list drives the index page and the
  `/experiments/[slug]` route. Do not add per-experiment routes under `app/`.
- **Experiments are disposable.** Prefer dependencies scoped to the
  experiment folder; anything shared graduates to `lib/`. A dead experiment is
  deleted outright, not left behind a feature flag.
- **Linear history** — rebase onto `main`, squash-merge PRs; no direct pushes
  to `main`.

## Commands

`pnpm dev` (op-injected) · `pnpm dev:plain` · `pnpm build` · `pnpm typecheck`
· `pnpm lint` · `pnpm format`

## Conventions

- Design-system tokens are role-named: `--ds-surface-base`, `--ds-text-primary`,
  `--ds-text-muted`, `--ds-accent-primary`, `--ds-border-default` — used as
  Tailwind arbitrary values (`bg-(--ds-surface-base)`). The theme is set by
  `data-theme` on `<html>` (see `app/layout.tsx`); no ThemeProvider unless an
  experiment needs runtime switching.
- TypeScript `strict` (unlike the blog); single quotes via Biome.
- Server components by default; add `"use client"` only where an experiment
  needs it.
