# AI Context

## Stack

Este proyecto usa:

- Next.js 16
- App Router
- TypeScript
- Tailwind CSS
- React Query
- pnpm

Tambien tiene dependencias instaladas para reportes y exportacion:

- `xlsx`
- `jspdf`
- `jspdf-autotable`

## Arquitectura de frontend

La app se organiza por:

- `app/` para rutas y layouts
- `features/` para modulos de negocio
- `components/` para piezas compartidas
- `services/` para consumo de APIs
- `types/` para dominio
- `mocks/` para datos locales simples

## Reglas del proyecto

- no introducir Pages Router
- no introducir React Router
- no introducir Redux o Zustand sin necesidad real
- no romper la separacion entre UI, services y dominio
- no mover logica de negocio compleja a `app/`
- no llenar la app de mocks dispersos
- no sobreingenierizar con patrones innecesarios

## Convenciones importantes

- los modulos nuevos deben vivir en `src/features/<modulo>`
- las rutas administrativas deben vivir en `src/app/(dashboard)`
- las rutas publicas deben vivir en `src/app/(public)` cuando aplique
- los tipos compartidos deben ir en `src/types`
- los endpoints deben centralizarse en `src/lib/endpoints.ts`
- el consumo de APIs debe pasar por `services`
- los query hooks deben ser pequenos y especificos

## Como extender modulos

Cuando se agregue un modulo nuevo:

1. crear carpeta de feature
2. agregar la ruta correspondiente
3. agregar item de navegacion si aplica
4. crear tipos compartidos si la entidad es real
5. crear service si consume datos
6. agregar hook con React Query si el flujo es remoto

## Que mantener consistente

- tono visual sobrio y enterprise
- layout administrativo limpio y responsive
- nombres claros y orientados a negocio
- data layer desacoplada del render
- documentacion util para nuevos engineers y agentes

## Que no romper

- alias `@/*`
- `src/` como raiz de codigo
- App Router
- `QueryProvider` global
- estructura modular por feature
- carpeta `DOCS` como fuente de contexto del proyecto
