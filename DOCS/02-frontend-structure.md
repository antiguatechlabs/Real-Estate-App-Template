# Frontend Structure

## Estructura de carpetas

La estructura principal del proyecto es:

```txt
src/
  app/
  components/
  features/
  hooks/
  lib/
  services/
  types/
  utils/
  config/
  mocks/
```

## Convenciones

### `app/`

Contiene routing y layouts de Next.js App Router.

- `app/(public)` agrupa experiencias publicas
- `app/(dashboard)` agrupa experiencia administrativa
- `app/login` mantiene el punto de entrada de autenticacion
- `app/layout.tsx` define providers y metadata global

### `components/`

Contiene piezas reutilizables transversales.

Subgrupos recomendados:

- `layout/` para shells y estructuras globales
- `navigation/` para items y patrones de navegacion
- `ui/` para primitives y bloques presentacionales
- `providers/` para providers globales

### `features/`

Cada modulo funcional vive aqui.

Ejemplos:

- `features/projects`
- `features/clients`
- `features/deals`
- `features/reports`

Cada feature puede crecer con:

- `components/`
- `hooks/`
- `schemas/`
- `constants/`
- `utils/`

### `lib/`

Infraestructura compartida a nivel aplicacion.

Ejemplos:

- api client
- endpoints
- query keys

### `services/`

Servicios orientados al dominio y al consumo de APIs externas.

La regla es simple:

- `lib/` define infraestructura tecnica
- `services/` define operaciones de negocio consumibles por features

### `types/`

Tipos de dominio compartidos entre modulos.

Evitar duplicar interfaces en componentes individuales si representan entidades reales del negocio.

### `mocks/`

Mocks pequenos, centralizados y utiles para desarrollo inicial.

No deben convertirse en un backend falso gigante.

## Como agregar modulos nuevos

Patron recomendado:

1. Crear `src/features/<modulo>/`
2. Crear `components/` y `hooks/` si el modulo lo necesita
3. Agregar la ruta en `src/app/(dashboard)` o `src/app/(public)`
4. Registrar navegacion en `src/config/navigation.ts`
5. Agregar servicios si consume datos externos
6. Reusar tipos de `src/types/` antes de inventar nuevos

## Como mantener orden

- mover logica de dominio fuera de `app/`
- evitar componentes enormes y genericos sin ownership claro
- no mezclar mocks, fetch y render complejo en el mismo archivo
- usar `services` y `query hooks` como frontera de datos
- centralizar convenciones en `config` y `DOCS`
