# Tracker de implementacion - CRM `/app`

## Mini tracker
- Arquitectura de carpetas [x]
- Separacion landing / CRM [x]
- UI shell de `/app` [x]
- Revision minimalista mobile-first [x]
- Eliminacion de GitHub Pages [x]
- Base de `features/crm` [x]
- BFF auth/session [x]
- Company / projects [x]
- Catalogs [x]
- Lots CRUD [x]
- Importacion de lots [x]
- QA y cierre [x]

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

## Estado actual
La base del CRM ya esta montada en el repo:
- `app/app/page.tsx` renderiza el shell del CRM
- `features/crm/components/crm-shell.tsx` contiene la experiencia visual principal, ahora revisada hacia una UI minimalista mobile-first
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
| UI shell CRM | `app/app/page.tsx`, `app/app/layout.tsx`, `features/crm/components/crm-shell.tsx` | Revision minimalista aplicada | Alta | Por asignar | 2026-05-01 | Hero reducido, bento claro, tooltips y motion sobrio; marquee y dark dashboard eliminados |
| Base de contenido CRM | `features/crm/data/crm-content.ts` | Hecho | Media | Por asignar | 2026-05-01 | Contenido local para la primera iteracion visual |
| Tooltip UI primitive | `components/ui/tooltip.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Ayuda contextual accesible sin dependencia nueva |
| GitHub Pages | `.github/workflows/*`, `scripts/export-gh-pages.cjs`, `next.config.ts`, `package.json` | Hecho | Alta | Por asignar | 2026-05-01 | Eliminado porque ya no se usara |
| BFF auth/session | `app/api/bff/**`, `features/crm/services/**` | Hecho | Alta | Por asignar | 2026-05-01 | Login, me, refresh, logout y cookie `httpOnly`; requiere `CRM_API_BASE_URL` para probar contra Laravel |
| Company info | `features/crm/services/**`, `features/crm/types/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Carga empresa/settings con fallback local si la API no esta configurada |
| Projects | `features/crm/services/**`, `features/crm/hooks/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Listado, seleccion de proyecto y update settings tipado |
| Catalogs | `features/crm/services/**`, `features/crm/types/**` | Hecho | Media | Por asignar | 2026-05-01 | Estados principales agregados desde endpoints de catalogos |
| Lots CRUD | `features/crm/services/**`, `features/crm/hooks/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Crear, editar, borrar, cambiar estado, hold y release conectados por servicio/hook |
| Importacion de lots | `features/crm/services/**`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Alta | Por asignar | 2026-05-01 | Descarga de template, validacion e importacion conectadas al BFF |
| QA visual | `features/crm/components/crm-shell.tsx`, `features/crm/components/crm-operations-workspace.tsx` | Hecho | Media | Por asignar | 2026-05-01 | Responsive, scroll motion sobrio y densidad visual verificados por build |
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
