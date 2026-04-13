# Real Estate App Template

Esta plantilla reúne los cimientos para piezas digitales del ecosistema inmobiliario que estamos construyendo. El objetivo es tener un **Next.js 16 App Router** que contiene (1) una capa BFF que habla con el backend común, (2) la aplicación principal para clientes y (3) una landing page compartida. Con esto podemos derivar nuevas aplicaciones reusando este repositorio como punto de partida.

## Arquitectura general
- El backend monolítico se basa en Laravel + PostgreSQL; la comunicación desde el frontend se canaliza exclusivamente a través del **BFF en Next.js**, que agrega la capa de autorización, caché y adaptación de datos para cada cliente.
- Dentro de este repo la carpeta `app/` alberga la BFF, la app y la landing page, de modo que cada nueva implementación puede replicar la estructura y solo cambiar la configuración o los módulos propios del cliente.
- Usa React 19 con Tailwind CSS para la interfaz, React Query para la capa de datos y utilidades listas para exportar reportes (`xlsx`, `jspdf`, `jspdf-autotable`) y calendarios (`react-calendar`).

## Stack principal
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- React Query
- xlsx
- jspdf
- jspdf-autotable
- react-calendar
- ESLint (configurado con las reglas del proyecto)

## Primeros pasos
1. Clona el repositorio y navega a la raíz.
2. Ejecuta `npm install` para instalar dependencias.
3. Crea un archivo `.env` en la raíz copiando el `.env.example` si existe o con el siguiente contenido mínimo:
   ```env
   NEXT_PUBLIC_BFF_URL=https://tu-backend-api.example.com
   ```
   Ajusta la URL a la que expone el backend Laravel/PostgreSQL; la BFF la consume para obtener datos y exponerlos a sus clientes.
4. Inicia el entorno local con `npm run dev`.

## Scripts disponibles
- `npm install`
- `npm run dev`
- `npm run build` (usa `next build --webpack` para evitar el backend Turbopack que falla en entornos restringidos)
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run export`

## Despliegue en GitHub Pages

- El sitio se exporta como HTML estático solo durante `npm run export`, que lanza `scripts/export-gh-pages.cjs`. Ese script mueve temporalmente `app/api` y el catch all `[...rest]` fuera de `app`, borra `out/`, ejecuta `NEXT_EXPORT=1 npm run build --webpack` (retomando `output: "export"`), y deja el HTML generado junto con `_next` y demás activos dentro de `out/`. El `basePath` se calcula desde `NEXT_PUBLIC_BASE_PATH` (o por defecto tomando el nombre del repositorio) antes de publicar `out/` en GitHub Pages.
- Para pruebas locales copia el nombre del repositorio y pásalo como `NEXT_PUBLIC_BASE_PATH` antes de correr la exportación (por ejemplo `NEXT_PUBLIC_BASE_PATH=/real-estate-app-template npm run export`). Si estás desplegando a tu página personal (`<username>.github.io`) deja `NEXT_PUBLIC_BASE_PATH` vacío o no lo definas.
- GitHub Actions ejecuta `.github/workflows/deploy-gh-pages.yml` en cada `push` sobre `main`. El flujo instala dependencias (`npm ci`), ejecuta `npm run export` con `NEXT_PUBLIC_BASE_PATH=/<repo>` y publica `out/` con `peaceiris/actions-gh-pages@v4`. El resultado se sirve desde la rama `gh-pages`.
- Si necesitas un dominio personalizado o una rama desplegada diferente, ajusta la variable `NEXT_PUBLIC_BASE_PATH` (y el `basePath` en `next.config.ts` si haces cambios manuales) antes de volver a exportar.

## Recursos y documentación
- [docs/context.md](docs/context.md)
- [docs/architecture.md](docs/architecture.md)
- [AGENTS.md](/Users/mersis12/Documents/GitHub/Real-Estate-App-Template/AGENTS.md)

Usa este repositorio como plantilla base y adapta la BFF, la app o la landing page según el nuevo cliente que estés construyendo.
