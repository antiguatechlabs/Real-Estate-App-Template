# AGENTS.md

## Project rules

- Read [docs/context.md](/Users/mersis12/Documents/GitHub/Real-Estate-App-Template/docs/context.md) for product and business context before implementing features.
- Read [docs/architecture.md](/Users/mersis12/Documents/GitHub/Real-Estate-App-Template/docs/architecture.md) before making structural, routing, or architectural changes.
- Keep changes aligned with the current stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, React Query.
- Prefer small, composable changes over large rewrites.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`

## Constraints

- Do not add dependencies unless they are clearly necessary for the feature or fix.
- Reuse existing components, providers, and utilities before creating new ones.
- Respect server/client boundaries in Next.js. Do not turn files into Client Components unless needed.
- Avoid hydration mismatches. Do not use `Date.now()`, `Math.random()`, locale-dependent formatting, or `window` checks during SSR output unless the pattern is explicitly controlled.
- Keep business logic out of route files when it starts growing; extract it into `features`, `lib`, or dedicated modules following the architecture doc.
- Update docs when behavior, conventions, or architecture meaningfully change.

## Done when

- `npm run lint` passes
- `npm run typecheck` passes
- `npm run build` passes when the change affects runtime behavior or app structure
- Relevant docs are updated if product behavior or architecture changed

## Current project notes

- The app currently starts as a shared base template for a real-estate platform.
- `app/providers.tsx` is the shared client entry point for global providers such as React Query.
- `app/layout.tsx` is the root layout and already uses `suppressHydrationWarning` on `<html>` to avoid extension-driven hydration noise such as Dark Reader.
- There is no test suite configured yet. Do not invent placeholder tests or fake passing commands; add real tests only when the project introduces the required tooling.
