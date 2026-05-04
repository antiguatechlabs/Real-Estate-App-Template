# Tracker de implementacion - CRM `/app`

## Mini tracker
- Arquitectura de carpetas [x]
- Separacion landing / CRM [x]
- Eliminacion de GitHub Pages [x]
- Base de `features/crm` [x]
- BFF auth/session [x]
- Company / projects [x]
- Catalogs [x]
- Lots CRUD [x]
- Importacion de lots [x]
- Base UI CRM actual [x]
- Nuevo workspace CRM segun mockup [x]
- Top nav + hero operativo compacto [x]
- Resumen empresa + KPIs [x]
- Layout 3 columnas: proyecto, lotes, importacion [x]
- Tabla responsive de lotes con acciones por fila [x]
- Crear lote dentro del workspace [x]
- Importacion con validacion, carga final y errores por fila [x]
- Componentizacion granular del CRM [x]
- Ajuste visual minimalist-ui y tipografia editorial [x]
- QA lint, typecheck y build [x]
- QA visual responsive en navegador [ ]

## Objetivo
Centralizar el seguimiento de la implementacion del CRM interno que vive bajo `/app`, sin tocar la landing publica localizada bajo `app/(marketing)/[locale]`.

Este tracker debe servir como guia de ejecucion y control de avance para:
- la estructura de carpetas preparada para escalar
- la UI del CRM ya montada en `features/crm`
- la capa BFF y de auth que conectara con Laravel
- los flujos de negocio definidos en [docs/endpoints-crm.md](/Users/ign/Desktop/Projects/Antigua%20Tech%20Labs/real-estate-app-template/docs/endpoints-crm.md)

Alcance confirmado:
- landing publica separada y estable
- CRM interno bajo `/app`
- BFF tenant-aware
- session management con cookie `httpOnly`
- company, projects, catalogs y lots
- importacion y validacion de lots

Fuera de alcance por ahora:
- leads, deals, reservations, sales, financing, tasks y notifications, salvo que aparezcan como endpoints reales y necesarios para el MVP

## Plan actual: rediseño CRM operations

Este plan reemplaza la direccion de landing operativa por un workspace CRM de una sola pantalla, basado en el nuevo mockup de Control Hub. El objetivo es reducir texto narrativo y concentrar la operacion diaria en lotes, estado de empresa, proyecto activo, busqueda, acciones e importacion.

### 1. Alcance de implementacion
- Mantener la ruta interna `/app`.
- No tocar la landing publica localizada bajo `app/(marketing)/[locale]`.
- Tratar el panel derecho del mockup como guia de diseño, no como UI final dentro del producto.
- Mantener el dominio CRM dentro de `features/crm/`.
- Reusar BFF, hooks, servicios, tipos y fallback local ya existentes.

### 2. Direccion visual
- Usar una interfaz utilitaria, clara y compacta, no una landing con secciones largas.
- Aplicar fondo calido `#F7F6F2` / `#FBFAF7`, superficies blancas y bordes finos `#E5E1D8`.
- Mantener botones primarios negros `#111111`, sin sombras pesadas ni gradientes.
- Usar serif editorial para hero/titulos grandes y sans sobria para UI, siguiendo `minimalist-ui`.
- Usar color solo para estados: activo, disponible, bloqueado, error, importacion completada.
- Evitar emojis, copy generico, cards anidadas, gradientes fuertes y efectos decorativos.

### 3. Nueva estructura de UI
- `CrmControlHub`: contenedor principal del nuevo workspace.
- `CrmTopNav`: logo, tenant, navegacion, idioma, settings y CTA de lotes.
- `CrmHero`: titulo corto, acciones principales, imagen desaturada y badges de sesion/BFF.
- `CompanySummary`: empresa, estado operativo, moneda, zona horaria y nivel de acceso.
- `KpiGrid`: lotes disponibles, lotes bloqueados, proyectos activos y API conectada.
- `CrmWorkspace`: layout principal de tres columnas.
- `ProjectPanel`: selector de proyecto, integracion CRM/BFF y resumen de catalogos.
- `LotsTable`: busqueda, filtro por estado, tabla desktop y version card en mobile.
- `CreateLotForm`: creacion rapida dentro del workspace.
- `ImportPanel`: descarga de plantilla, validacion, importacion final y errores por fila.

### 4. Datos y comportamiento
- Reusar `useCrmOverview`, `useCrmLots` y `useCrmMutations`.
- Crear helpers puros en `features/crm/lib/` para derivar metricas desde `lots`, `projects`, `catalogs` y errores de API.
- Mapear columnas de lotes desde el contrato actual: `name`, `base_price`, `fields.AREA_M2`, `fields.STATUS` y campos dinamicos.
- Mantener fallback local cuando `CRM_API_BASE_URL` no este configurado.
- Completar el flujo de importacion: validar archivo, mostrar resultado, permitir importar cuando `can_import` sea true y listar errores accionables.
- Mantener acciones por fila para bloquear, liberar y preparar cambio de estado sin sacar al usuario del workspace.

### 5. Responsive y UX
- Desktop: layout `260px / 1fr / 280-320px` para proyecto, lotes e importacion.
- Tablet: proyecto + tabla primero, importacion debajo.
- Mobile: una columna, tabla convertida a cards y sin scroll horizontal.
- Formularios con labels visibles, no solo placeholders.
- Estados loading, disabled, success y error visibles en mutaciones.
- Targets interactivos minimo 44px, focus states claros y contraste WCAG AA.
- Reducir o eliminar GSAP/ScrollTrigger en esta pantalla; el workspace debe sentirse estable y operativo.

### 6. Archivos esperados
- `features/crm/components/crm-shell.tsx`
- `features/crm/components/crm-operations-workspace.tsx`
- `features/crm/lib/crm-locale.ts`
- `features/crm/lib/*` para helpers de metricas/formato si aplica
- `features/crm/data/crm-api-fallback.ts` si se necesitan datos fallback mas cercanos al mockup
- `docs/crm-implementation-tracker.md`

### 7. Validacion de cierre
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Revision visual de `/app` en desktop, tablet y mobile.
- Confirmar que el workspace funciona con fallback local y con BFF configurado.

## Estado actual
La base del CRM ya esta montada en el repo:
- `app/app/page.tsx` renderiza el shell del CRM
- `features/crm/components/crm-shell.tsx` contiene la experiencia visual principal y orquesta top nav, hero y footer
- `features/crm/components/crm-operations-workspace.tsx` coordina estado, queries y acciones del workspace
- el workspace operativo ya esta partido en paneles y subcomponentes pequenos: company, projects, lots, import y primitives locales
- `features/crm/data/crm-content.ts` contiene el contenido local de soporte
- `app/app/layout.tsx` prepara la capa tipografica y de layout para `/app`
- la estructura de carpetas escalable ya existe en `components/`, `hooks/`, `lib/`, `types/` y `features/crm/*`
- GitHub Pages fue eliminado por completo del proyecto

La UI, el BFF tenant-aware, los servicios tipados, los hooks de React Query y el workspace operativo ya estan montados. La conexion contra Laravel real requiere configurar `CRM_API_BASE_URL` y credenciales validas del tenant.

## Direccion de arquitectura
- Mantener `app/` delgado y orientado a rutas
- Mantener el dominio CRM en `features/crm/`
- Usar `services/` para adaptadores BFF/API
- Usar `hooks/` solo para estado y data client-side del CRM
- Usar `lib/` y `types/` para helpers y contratos puros
- No reintroducir GitHub Pages ni export estatico para esta superficie

## Tracker general
| Bloque | Archivo(s) | Estado | Prioridad | Owner | Ultima revision | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| Arquitectura de carpetas | `components/`, `hooks/`, `lib/`, `types/`, `features/crm/` | Hecho | Alta | Por asignar | 2026-05-01 | Base preparada para escalar sin mezclar dominios |
| Separacion landing / CRM | `app/(marketing)/[locale]` / `app/app` | Hecho | Alta | Por asignar | 2026-05-01 | La landing queda aislada del CRM |
| UI shell CRM | `app/app/page.tsx`, `app/app/layout.tsx`, `features/crm/components/crm-shell.tsx` | Revision minimalista aplicada | Alta | Por asignar | 2026-05-04 | Hero reducido, bento claro, tooltips y motion sobrio; shell ya dividido en top nav, hero y footer |
| Componentizacion granular CRM | `features/crm/components/crm-*`, `features/crm/lib/crm-*` | Hecho | Media | Por asignar | 2026-05-04 | Workspace, proyecto, lotes, importacion y KPI separados en piezas locales mas pequenas |
| Base de contenido CRM | `features/crm/data/crm-content.ts` | Hecho | Media | Por asignar | 2026-05-01 | Contenido local para la primera iteracion visual |
| Tooltip UI primitive | `components/ui/tooltip.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Ayuda contextual accesible sin dependencia nueva |
| GitHub Pages | `.github/workflows/*`, `scripts/export-gh-pages.cjs`, `next.config.ts`, `package.json` | Hecho | Alta | Por asignar | 2026-05-01 | Eliminado porque ya no se usara |
| BFF auth/session | `app/api/bff/**`, `features/crm/services/**` | Hecho | Alta | Por asignar | 2026-05-01 | Login, me, refresh, logout y cookie `httpOnly`; requiere `CRM_API_BASE_URL` para probar contra Laravel |
| Company info | `features/crm/services/**`, `features/crm/types/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Carga empresa/settings con fallback local si la API no esta configurada |
| Projects | `features/crm/services/**`, `features/crm/hooks/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Listado, seleccion de proyecto y update settings tipado |
| Catalogs | `features/crm/services/**`, `features/crm/types/**` | Hecho | Media | Por asignar | 2026-05-01 | Estados principales agregados desde endpoints de catalogos |
| Lots CRUD | `features/crm/services/**`, `features/crm/hooks/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Crear, editar, borrar, cambiar estado, hold y release conectados por servicio/hook |
| Importacion de lots | `features/crm/services/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Descarga de template, validacion e importacion conectadas al BFF |
| QA visual | `features/crm/components/crm-shell.tsx`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Media | Por asignar | 2026-05-04 | Responsive, scroll motion sobrio y densidad visual verificados por build |
| Docs de arquitectura | `docs/architecture.md` | Hecho | Media | Por asignar | 2026-05-01 | Estructura y responsabilidades alineadas |

## Fases de implementacion

### Fase 1: Base operativa
Objetivo:
- dejar el CRM visualmente listo y estructuralmente aislado

Incluye:
- shell de `/app`
- layout interno
- estructura de carpetas escalable
- eliminacion completa de GH Pages

Criterios de cierre:
- `/app` renderiza sin depender de la landing
- la arquitectura de carpetas ya no es monolitica
- no quedan referencias activas a export static ni deploy de Pages

### Fase 2: Refactor visual minimalista mobile-first
Objetivo:
- dejar el CRM listo para uso operativo con una UI clara, compacta y sin exceso de texto

Incluye:
- fondo claro calido
- cards planas con bordes finos
- tooltips accesibles para notas y explicaciones
- hero corto con dos acciones principales
- bento mobile-first sin huecos en desktop
- motion GSAP sobria sin marquee ni pinning pesado

Criterios de cierre:
- `/app`, `/app/admin` y `/app/config` se leen bien en mobile
- las notas explicativas no saturan la pantalla
- no hay dependencia de dark dashboard para comunicar jerarquia

### Fase 3: BFF y autenticacion
Objetivo:
- conectar la app con Laravel sin exponer tenant ni JWT al cliente

Incluye:
- login
- me
- refresh
- logout
- manejo de cookie `httpOnly`
- header `X-Tenant-Code`

Criterios de cierre:
- la app identifica sesion activa
- las llamadas tenant-aware salen desde BFF o servidor
- errores de auth se normalizan de forma consistente

### Fase 4: Datos base del CRM
Objetivo:
- exponer company, projects y catalogs en la UI

Incluye:
- company actual
- proyectos activos
- settings de proyecto
- catalogos necesarios para lotes y estados

Criterios de cierre:
- la home de `/app` deja de depender de contenido mock
- el contexto del tenant ya es real

### Fase 5: Lots
Objetivo:
- completar el flujo operativo principal del CRM

Incluye:
- listado
- detalle
- creacion
- edicion
- eliminacion
- cambio de estado
- hold
- release

Criterios de cierre:
- el equipo puede operar lots desde la app
- los cambios reflejan la logica tenant-aware correcta

### Fase 6: Importacion
Objetivo:
- permitir alta masiva segura

Incluye:
- descarga de plantilla
- validacion previa
- errores por fila
- importacion final

Criterios de cierre:
- el flujo de carga masiva no requiere pasos manuales fuera de la app
- los errores son explicitos y accionables

### Fase 7: QA y documentacion
Objetivo:
- cerrar la implementacion con verificaciones reales

Incluye:
- lint
- typecheck
- build
- revisiones visuales
- actualizacion de docs si cambia la arquitectura final

Criterios de cierre:
- el CRM compila
- el CRM navega bien
- la documentacion refleja el estado real

## Checklist tecnico
- [x] Aislar landing y CRM en rutas separadas
- [x] Crear estructura escalable de carpetas
- [x] Partir CRM shell y workspace en componentes locales pequenos
- [x] Mover la UI principal del CRM a `features/crm`
- [x] Aplicar refactor minimalista mobile-first al CRM
- [x] Crear primitive de tooltip accesible sin dependencia nueva
- [x] Eliminar GitHub Pages y su configuracion
- [x] Crear cliente BFF para auth
- [x] Definir tipos de `UserAccess`, `Company`, `Project` y `Lot`
- [x] Montar query layer para company y projects
- [x] Implementar lote CRUD
- [x] Implementar importacion de lots
- [x] Verificar build, lint, typecheck y rutas locales

## Notas de control
- No reintroducir `basePath`, `assetPrefix` ni workflows de Pages.
- No mezclar logica de negocio en archivos de ruta cuando el flujo crezca.
- Mantener cualquier cambio nuevo dentro de `features/crm` primero.
- Si aparece una nueva superficie de negocio, documentarla aqui antes de expandir la arquitectura.
- La app usa fallback local cuando `CRM_API_BASE_URL` no existe para mantener el CRM navegable durante desarrollo; no reemplaza pruebas contra Laravel real.
