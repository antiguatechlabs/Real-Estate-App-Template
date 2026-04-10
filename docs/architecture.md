# Architecture

## Current stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9
- React Query

## Current structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  providers.tsx
```

## Architectural principles

- Use the App Router as the top-level application structure.
- Keep route files thin. Pages and layouts should mostly compose UI and call extracted modules.
- Add Client Components only when interactivity, browser APIs, or client-only libraries require them.
- Keep shared providers centralized in `app/providers.tsx`.
- Prefer colocating feature-specific UI and logic while preserving a predictable top-level structure.

## Recommended folder structure as the app grows

```text
app/
  (marketing)/
  (dashboard)/
  api/
  globals.css
  layout.tsx
  page.tsx
  providers.tsx
components/
  ui/
  shared/
features/
  properties/
  clients/
  calendar/
  reports/
lib/
  utils/
  constants/
  services/
hooks/
types/
docs/
```

## App segments

- `app/page.tsx` es la landing pública (`/`) compartida con espacios para información general.
- `app/app/page.tsx` monta la aplicación principal del cliente bajo la ruta `/app`.
- `app/api/bff/route.ts` contiene los endpoints del BFF que hablan con el backend Laravel antes de exponer datos al cliente.

## Folder responsibilities

### `app/`

- Owns routing, layouts, route groups, metadata, loading states, and server-rendered entry points.
- Keep business logic here light. If a page becomes complex, move the implementation into `features/` or `components/`.

### `components/`

- `components/ui/` for reusable low-level UI primitives.
- `components/shared/` for cross-feature composed components used in multiple modules.

### `features/`

- Main home for domain-specific code.
- Each feature can contain its own components, hooks, server helpers, query options, and types.
- Example: `features/properties`, `features/clients`, `features/calendar`, `features/reports`.

### `lib/`

- Shared utilities, helpers, constants, formatting functions, and service wrappers.
- Avoid putting feature-specific business rules here unless they are genuinely cross-cutting.

### `hooks/`

- Shared custom React hooks used across multiple features.
- Feature-specific hooks should stay inside their corresponding feature folder first.

### `types/`

- Shared TypeScript types that are reused across multiple features or layers.

## Conventions

- Use the `@/` alias for internal imports.
- Prefer server-first rendering and data fetching where practical.
- Use React Query for client-side async state, caching, and refetching behavior.
- Keep export-related logic for `xlsx`, `jspdf`, and `jspdf-autotable` isolated in dedicated modules instead of embedding it directly inside page files.
- Keep `react-calendar` usage inside clear calendar or scheduling components instead of route-level JSX when possible.

## Change management

Update this document when:

- top-level folders are added or renamed
- the routing strategy changes
- a new cross-cutting dependency changes project-wide patterns
- a new architectural rule should be followed by all contributors
