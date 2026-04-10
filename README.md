# real-state-app-template

Base frontend reusable para un ecosistema de CRM inmobiliario orientado a venta de lotes, control de proyectos, clientes, vendedores, negocios, pipeline comercial, reportes, dashboards y landings por proyecto.

Repositorio remoto: [antiguatechlabs/Real-Estate-App-Template](https://github.com/antiguatechlabs/Real-Estate-App-Template.git)

## Stack

- Next.js 16
- App Router
- TypeScript
- Tailwind CSS
- ESLint
- pnpm
- React Query
- xlsx
- jsPDF
- jspdf-autotable

## Instalacion

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Crear el proyecto desde cero

```bash
pnpm create next-app@latest real-state-app-template --ts --tailwind --eslint --app --src-dir --use-pnpm --import-alias "@/*"
cd real-state-app-template
pnpm add @tanstack/react-query xlsx jspdf jspdf-autotable
```

## Variables de entorno

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_USE_MOCKS=true
```

## Estructura

```txt
DOCS/
src/
  app/
  components/
  config/
  features/
  hooks/
  lib/
  mocks/
  services/
  types/
  utils/
```

## Arquitectura general

Este frontend forma parte de un ecosistema mayor con:

- backend robusto separado en Laravel + Python + PostgreSQL
- una app Next.js por empresa
- un BFF por empresa o app
- una landing page por proyecto

El objetivo de este repositorio es servir como template/base reutilizable para las apps frontend del ecosistema.

## Modulos incluidos

- Dashboard
- Empresas
- Proyectos
- Clientes
- Vendedores
- Negocios
- Lotes
- Catálogos
- Reportes
- Login
- Landing publica por proyecto

## Data layer

La integracion sigue este patron:

```txt
feature hook -> service -> api client -> BFF/backend
```

Mientras no exista backend conectado, el template puede correr con mocks centralizados usando `NEXT_PUBLIC_USE_MOCKS=true`.

## Documentacion adicional

La carpeta `DOCS` contiene contexto tecnico, de negocio y lineamientos para futuros developers o agentes.
