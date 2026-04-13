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
  (marketing)/
    [locale]/
  api/
  app/
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
  providers.tsx
features/
  marketing/
i18n/
messages/
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
    [locale]/
  (crm)/
  api/
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
  providers.tsx
components/
  ui/
  shared/
features/
  marketing/
    starter-landing/
  properties/
  clients/
  calendar/
  reports/
crm/
lib/
  utils/
  constants/
  services/
i18n/
messages/
hooks/
types/
docs/
```

## App segments

- `app/page.tsx` funciona como punto de entrada raíz y redirige al locale público por defecto.
- `app/(marketing)/[locale]/page.tsx` monta la landing pública localizada (`/es`, `/en`, etc.).
- `app/(marketing)/[locale]/not-found.tsx` contiene la 404 localizada para la superficie pública.
- `app/app/page.tsx` monta la aplicación principal del cliente bajo la ruta `/app`.
- `app/api/bff/route.ts` contiene los endpoints del BFF que hablan con el backend Laravel antes de exponer datos al cliente.
- `proxy.ts` negocia el locale para la superficie pública y excluye rutas internas como `/app` y `/api`.

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
- `features/marketing/starter-landing/` concentra la landing pública base que se entrega como parte del proyecto.

### `lib/`

- Shared utilities, helpers, constants, formatting functions, and service wrappers.
- Avoid putting feature-specific business rules here unless they are genuinely cross-cutting.

### `i18n/`

- Holds the internationalization infrastructure shared by the whole repo.
- Define supported locales, routing helpers, request config, and shared formatting rules here.

### `messages/`

- Stores translation namespaces grouped by locale.
- Prefer splitting messages by feature or concern (`marketing-starter-landing`, `crm-navigation`, etc.) instead of a single monolithic file.

### `hooks/`

- Shared custom React hooks used across multiple features.
- Feature-specific hooks should stay inside their corresponding feature folder first.

### `types/`

- Shared TypeScript types that are reused across multiple features or layers.

## Conventions

- Use the `@/` alias for internal imports.
- Prefer server-first rendering and data fetching where practical.
- Use React Query for client-side async state, caching, and refetching behavior.
- Keep public marketing routes localized with the App Router locale segment (`app/(marketing)/[locale]`) so the public site is SEO-friendly from day one.
- Treat `i18n/` as cross-cutting infrastructure and `messages/` as feature-scoped content. The CRM can adopt the same foundation later without reworking routing.
- Keep export-related logic for `xlsx`, `jspdf`, and `jspdf-autotable` isolated in dedicated modules instead of embedding it directly inside page files.
- Keep `react-calendar` usage inside clear calendar or scheduling components instead of route-level JSX when possible.

## Change management

Update this document when:

- top-level folders are added or renamed
- the routing strategy changes
- a new cross-cutting dependency changes project-wide patterns
- a new architectural rule should be followed by all contributors
