# Internationalization Guide

This project uses a shared internationalization setup for the whole repository.
Right now, the public marketing landing is the first consumer of that setup, but
the same foundation is intended to support future product areas as the app grows.

## Goals

- Keep localization consistent across the repo
- Avoid creating one-off translation patterns per feature
- Make public routes SEO-friendly from day one
- Give the team a predictable structure for adding localized pages and content

## Core idea

There are two different concepts working together:

1. Next.js route organization
2. `next-intl` for messages and locale-aware rendering

### Route groups

The public site lives under:

```text
app/(marketing)/[locale]/
```

Important:

- `(marketing)` is a Next.js route group
- Route groups are for internal organization only
- `(marketing)` does **not** appear in the final URL
- `[locale]` is a dynamic route segment and **does** appear in the final URL

That means this folder structure:

```text
app/
  (marketing)/
    [locale]/
      page.tsx
```

produces public URLs like:

```text
/es
/en
```

not:

```text
/marketing/es
/marketing/en
```

## Current i18n architecture

### Key files

- `i18n/locale.ts`
  Defines the supported locales and the default locale.

- `i18n/routing.ts`
  Defines locale routing behavior for `next-intl`.

- `i18n/request.ts`
  Loads the correct messages for the incoming locale and provides shared formats.

- `i18n/formats.ts`
  Shared number/date formatting definitions.

- `proxy.ts`
  Handles locale-aware request negotiation for the public site.

- `messages/es/...`
- `messages/en/...`
  Translation namespaces grouped by locale.

### Current public entrypoint

The localized landing page currently renders from:

```text
app/(marketing)/[locale]/page.tsx
```

The root route:

```text
app/page.tsx
```

redirects to the default public locale.

## Folder responsibilities

### `app/(marketing)/[locale]/`

Use this for localized public routes:

- landing pages
- marketing pages
- public localized layouts
- localized `not-found` pages
- other SEO-facing public content

### `features/marketing/...`

Use this for implementation details of public features:

- page composition
- feature-specific UI
- feature-specific local data/config

Example:

```text
features/marketing/starter-landing/
```

### `messages/<locale>/`

Use this for translation content.

Do not keep all translations in one giant file.
Prefer one namespace per feature or concern.

Examples:

- `marketing-starter-landing.json`
- `marketing-about.json`
- `crm-navigation.json`
- `crm-leads.json`

## How to add a new localized public page

Example: adding an About page.

### 1. Create the route

```text
app/(marketing)/[locale]/about/page.tsx
```

### 2. Create translation files

```text
messages/es/marketing-about.json
messages/en/marketing-about.json
```

### 3. Load translations in the page or feature

Use `next-intl` APIs and keep the visible copy in message files, not inline in JSX.

### 4. Keep the route thin

If the page grows beyond simple composition, move the implementation to a feature folder:

```text
features/marketing/about/
```

## How to add a new translation namespace

When a feature needs its own content:

1. Create one file per locale
2. Use the same namespace name in both languages
3. Register the new message import in `i18n/request.ts`

Example:

```text
messages/es/marketing-about.json
messages/en/marketing-about.json
```

Then update `i18n/request.ts` so both files are loaded for the active locale.

## Rules for the team

- Do not hardcode user-facing copy when it should be translatable
- Do not create separate ad hoc i18n systems per feature
- Do not put public localized pages outside `app/(marketing)/[locale]/`
- Do not grow one namespace forever; create new namespaces by feature
- Keep route files thin and move larger implementations into `features/`

## Public routes vs future app routes

Right now, the localized structure is applied to the public marketing surface.

This does **not** mean every future route must use locale-prefixed URLs.

The intended model is:

- public marketing pages: locale in the URL
- internal/product areas: can adopt the same i18n foundation later without rebuilding the system

This is why the i18n infrastructure is global, even though the current usage is focused on the landing.

## Naming conventions

- Public route group: `(marketing)`
- Public landing feature: `starter-landing`
- Shared translation infrastructure: `i18n/`
- Translation content: `messages/`

## Quick mental model

- Next.js controls the route structure
- `next-intl` controls locale-aware messages and rendering
- `(marketing)` organizes the repo but does not affect the URL
- `[locale]` is the visible locale segment in the URL
- `messages/` stores translatable content
- `i18n/` stores the shared infrastructure

## Example URL mapping

```text
app/(marketing)/[locale]/page.tsx           -> /es, /en
app/(marketing)/[locale]/about/page.tsx     -> /es/about, /en/about
app/(marketing)/[locale]/not-found.tsx      -> localized public 404
```

## If you are unsure

When adding a new page or feature, ask:

1. Is this public and SEO-facing?
2. Does the URL need a locale segment?
3. Should the visible text live in a translation namespace?
4. Is this route getting large enough to move into `features/`?

If the answer is yes to public + localized, start from:

```text
app/(marketing)/[locale]/
```
