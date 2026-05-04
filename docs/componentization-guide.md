# Guia de componentizacion reutilizable

## Objetivo de la guia

Esta guia define como dividir la app en componentes pequenos, reutilizables y faciles de mantener sin migrar el proyecto a `src/`.

El proyecto usa carpetas en la raiz del repo:

```text
app/
components/
features/
hooks/
i18n/
lib/
messages/
types/
docs/
```

Cuando una propuesta externa use `src/app`, `src/features` o `src/shared`, debe interpretarse como la misma estructura pero desde la raiz del repo. Por ejemplo, `src/features/dashboard` equivale a `features/dashboard`.

## Estructura base del proyecto

```text
app/
  (marketing)/
    [locale]/
      page.tsx
      layout.tsx
  api/
  app/
    page.tsx
    layout.tsx
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
  providers.tsx

features/
  crm/
    components/
    data/
    hooks/
    lib/
    services/
    types/
  marketing/
    starter-landing/
      config/
      data/
      sections/
      LandingPage.tsx
      types.ts

components/
  ui/
  shared/

hooks/
lib/
  constants/
  helpers/
  services/
  utils/
i18n/
messages/
types/
docs/
```

Responsabilidades principales:

- `app/`: rutas, layouts, metadata, loading states y route handlers de Next.js.
- `features/`: codigo de dominio por modulo de producto.
- `components/ui/`: primitives reutilizables de bajo nivel, como `Tooltip`, `Button` o `Card`.
- `components/shared/`: bloques compuestos compartidos por varias features.
- `hooks/`: hooks realmente compartidos entre features.
- `lib/`: utilidades, constantes, helpers y servicios transversales.
- `i18n/` y `messages/`: infraestructura y contenido de internacionalizacion.
- `types/`: contratos TypeScript compartidos por mas de una feature.

## Mapeo desde la estructura propuesta con `src/`

La estructura de referencia:

```text
src/
  app/
  features/
  shared/
  lib/
  config/
  types/
```

se adapta asi en esta app:

```text
app/                  # antes src/app
features/             # antes src/features
components/ui/        # antes src/shared/components primitives
components/shared/    # antes src/shared/components compuestos
hooks/                # antes src/shared/hooks
lib/                  # antes src/shared/utils o src/lib
types/                # antes src/types
i18n/                 # infraestructura transversal existente
messages/             # traducciones por locale y namespace
```

No se debe crear `src/` salvo que exista una decision explicita de arquitectura para migrar todo el proyecto.

## Reglas para crear una nueva feature

Crear una feature cuando el codigo pertenezca a un dominio de producto o flujo de negocio reconocible. Ejemplos esperados para esta app:

- `features/crm`
- `features/marketing/starter-landing`
- `features/properties`
- `features/clients`
- `features/calendar`
- `features/reports`

Estructura recomendada para una feature nueva:

```text
features/properties/
  components/
    PropertyCard.tsx
    PropertyFilters.tsx
    PropertyTable.tsx
  config/
    property.config.ts
  data/
    property-fallback.ts
  hooks/
    use-properties.ts
  lib/
    property-formatters.ts
  services/
    properties-client.ts
  types/
    property.types.ts
  PropertiesPage.tsx
  index.ts
```

Reglas:

- Mantener el route file delgado. La ruta debe componer una pieza principal desde `features/`.
- Usar un componente orquestador por feature, como `LandingPage.tsx`, `CrmShell` o `PropertiesPage.tsx`.
- Colocar componentes internos en `features/<feature>/components/`.
- Colocar contratos de API o dominio en `features/<feature>/types/`.
- Colocar llamadas a BFF/API en `features/<feature>/services/`.
- Colocar hooks que dependen de la feature en `features/<feature>/hooks/`.
- Colocar helpers puros locales en `features/<feature>/lib/`.
- Promover codigo a carpetas compartidas solo cuando dos o mas features lo necesiten.

## Reglas para componentes compartidos

Usar `components/ui/` para primitives de diseno reutilizables y sin dominio:

```text
components/ui/
  Button/
    Button.tsx
    Button.types.ts
    Button.variants.ts
    index.ts
  Card/
    Card.tsx
    Card.types.ts
    index.ts
  tooltip.tsx
```

Un componente pertenece a `components/ui/` si:

- no sabe nada de CRM, propiedades, clientes ni landing;
- recibe todo por props;
- no llama servicios ni hooks de dominio;
- puede usarse en marketing y en la app interna sin cambios.

Usar `components/shared/` para bloques compuestos que cruzan features pero ya tienen mas opinion visual o funcional:

```text
components/shared/
  EmptyState.tsx
  PageHeader.tsx
  StatusBadge.tsx
```

Un componente pertenece a `components/shared/` si:

- se usa en mas de una feature;
- sigue siendo independiente de un flujo especifico;
- puede depender de primitives de `components/ui/`, pero no de `features/<feature>`.

Mantener un componente dentro de una feature si solo se usa ahi o si contiene reglas de negocio de ese dominio.

## Reglas para hooks, services, utils, config y types

### `components/`

- Usar `components/` para UI.
- Evitar mezclar fetch, mutaciones o transformaciones complejas dentro de componentes visuales.
- Si un archivo JSX crece demasiado, dividir por responsabilidades visuales claras: header, table, filters, form, summary, empty state.

### `hooks/`

- Usar `features/<feature>/hooks/` para hooks de dominio, por ejemplo `use-crm-data.ts`.
- Usar `hooks/` de raiz solo para hooks transversales, como `useMediaQuery` o `useIsMobile`.
- Los hooks pueden coordinar React Query, estado cliente y callbacks, pero no deben contener JSX.

### `services/`

- Usar `features/<feature>/services/` para adaptadores de API/BFF de una feature.
- En el CRM, el cliente debe consumir Laravel por `/api/bff/**`, no directamente desde el navegador.
- Usar `lib/services/` solo para clientes o wrappers compartidos por varias features.

### `types/`

- Usar `features/<feature>/types/` para contratos locales de dominio.
- Usar `types/` de raiz para tipos compartidos entre varias features o capas.
- Preferir nombres explicitos como `property.types.ts`, `api.ts` o `common.types.ts`.

### `utils` y `lib`

- Dentro de features, usar `lib/` para helpers puros de dominio.
- En raiz, usar `lib/helpers`, `lib/utils`, `lib/constants` o `lib/services` para utilidades transversales.
- No mover reglas de negocio a `lib/` si solo pertenecen a una feature.

### `config`

- Usar `features/<feature>/config/` para configuracion local de la feature, como marca, columnas, tabs o textos estructurales.
- Usar `lib/constants/` o una carpeta de configuracion raiz solo para valores realmente globales.

### `data`

- Usar `features/<feature>/data/` para datos fallback, mocks controlados, contenido local o fixtures reales del modulo.
- No usar `data/` como sustituto permanente de servicios cuando ya exista un endpoint.

## Ejemplo aplicado al CRM actual

El CRM vive bajo `/app` y ya sigue el patron de feature:

```text
app/app/page.tsx
features/crm/
  components/
    crm-shell.tsx
    crm-operations-workspace.tsx
    crm-shell-top-nav.tsx
    crm-shell-hero.tsx
    crm-shell-footer.tsx
    crm-shell-controls.tsx
    crm-company-summary.tsx
    crm-company-header.tsx
    crm-company-metrics.tsx
    crm-company-metric-card.tsx
    crm-project-panel.tsx
    crm-project-selector.tsx
    crm-integration-status.tsx
    crm-catalogs-summary.tsx
    crm-lots-toolbar.tsx
    crm-lots-table.tsx
    crm-lots-table-desktop.tsx
    crm-lots-table-mobile.tsx
    crm-lots-table-row-actions.tsx
    crm-create-lot-form.tsx
    crm-import-panel.tsx
    crm-import-header.tsx
    crm-import-actions.tsx
    crm-import-dropzone.tsx
    crm-import-validation.tsx
    crm-import-footer.tsx
    crm-operations-primitives.tsx
  data/
    crm-content.ts
    crm-api-fallback.ts
  hooks/
    use-crm-data.ts
  lib/
    crm-locale.ts
    crm-errors.ts
    crm-lot-utils.ts
  services/
    bff-client.ts
  types/
    api.ts
```

Patron esperado:

- `app/app/page.tsx` resuelve lo minimo necesario para la ruta y renderiza `CrmShell`.
- `CrmShell` orquesta la experiencia principal del CRM.
- `crm-operations-workspace.tsx` concentra el estado y la orquestacion del workspace.
- `crm-shell-top-nav.tsx`, `crm-shell-hero.tsx` y `crm-shell-footer.tsx` separan la superficie de entrada.
- `crm-company-summary.tsx`, `crm-project-panel.tsx`, `crm-lots-toolbar.tsx`, `crm-lots-table.tsx`, `crm-create-lot-form.tsx` e `crm-import-panel.tsx` separan los bloques operativos.
- `use-crm-data.ts` encapsula React Query y mutaciones.
- `bff-client.ts` encapsula llamadas al BFF.
- `types/api.ts` mantiene los contratos del CRM.
- `crm-errors.ts` y `crm-lot-utils.ts` concentran helpers puros reutilizados por varios paneles.

Si el CRM sigue creciendo, seguir el mismo criterio: primero extraer subcomponentes locales dentro de `features/crm/components/`, y solo subir algo a `components/shared/` cuando otra feature lo necesite de forma real.

## Ejemplo aplicado a la landing actual

La landing publica localizada vive bajo `app/(marketing)/[locale]` y se implementa en `features/marketing/starter-landing`:

```text
app/(marketing)/[locale]/page.tsx
features/marketing/starter-landing/
  config/
    brand.ts
  data/
    agents.ts
    properties.ts
    testimonials.ts
  sections/
    cta-banner.tsx
    featured-agents.tsx
    featured-properties.tsx
    footer.tsx
    hero.tsx
    how-it-works.tsx
    navbar.tsx
    property-categories.tsx
    stats.tsx
    testimonials.tsx
  LandingPage.tsx
  types.ts
```

Patron esperado:

- `app/(marketing)/[locale]/page.tsx` valida locale, prepara metadata y renderiza `LandingPage`.
- `LandingPage.tsx` orquesta las secciones.
- `sections/` contiene bloques visuales especificos de la landing.
- `config/brand.ts` concentra la configuracion de marca.
- `data/` contiene contenido local de propiedades, agentes y testimonios.
- `messages/` contiene textos localizados cuando el contenido debe variar por idioma.

Si una seccion de landing empieza a usarse en otra superficie, evaluar si debe moverse a `components/shared/`. Si sigue siendo especifica de marketing, debe permanecer en la feature.

## Convenciones de imports y barrels

- Usar el alias `@/` para imports internos.
- Evitar imports relativos largos entre dominios.
- Usar `index.ts` como barrel cuando mejore la legibilidad de imports publicos de una feature o componente.
- No crear barrels que exporten todo sin criterio; exportar solo la API publica del modulo.
- Evitar que `components/ui/` importe desde `features/`.
- Evitar que una feature importe archivos internos profundos de otra feature. Si algo se comparte, moverlo primero a una carpeta compartida adecuada.

Ejemplo de barrel recomendado:

```ts
// features/properties/index.ts
export { PropertiesPage } from "./PropertiesPage";
export type { Property } from "./types/property.types";
```

## Server y Client Components

- Mantener los archivos de `app/` como Server Components por defecto.
- Agregar `"use client"` solo cuando el archivo use estado de React, efectos, eventos, browser APIs, React Query o librerias cliente.
- Preferir que la ruta prepare datos server-side y delegue interactividad a componentes cliente pequenos.
- Evitar `Date.now()`, `Math.random()`, formato dependiente de locale o checks de `window` durante el render SSR si pueden causar hydration mismatch.
- Mantener `app/providers.tsx` como punto central de providers globales.
- El caso de estudio para este repo es que las rutas se mantengan delgadas y el trabajo visual viva en features, no en `app/`.

## Checklist antes de mover o crear componentes

Antes de crear o mover codigo, confirmar:

- La ruta de `app/` quedara delgada y sin logica de negocio pesada.
- El codigo pertenece claramente a una feature o es realmente compartido.
- No se esta creando `src/`.
- No se esta convirtiendo un Server Component en Client Component sin necesidad.
- Los imports usan `@/` cuando cruzan carpetas principales.
- Los tipos viven cerca del dominio que los consume.
- Los servicios de CRM siguen pasando por `/api/bff/**`.
- Las traducciones nuevas viven en `messages/` si deben ser localizadas.
- La documentacion de arquitectura se actualiza si cambia una regla transversal.
- Despues de una refactorizacion de codigo, correr `npm run lint`, `npm run typecheck` y `npm run build` cuando afecte runtime o estructura de app.
