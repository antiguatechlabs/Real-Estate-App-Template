# API Integration

## Como se consume backend o BFF

El template no acopla las pantallas directamente al `fetch`.

El patron actual es:

1. `lib/api-client.ts` define infraestructura HTTP
2. `lib/endpoints.ts` centraliza rutas
3. `services/*.service.ts` expone operaciones por dominio
4. `features/*/hooks` conecta esos servicios a React Query
5. los componentes consumen hooks o datos listos para render

## Patron de servicios

Cada servicio representa una frontera clara de dominio.

Ejemplos:

- `dashboard.service.ts`
- `projects.service.ts`
- `clients.service.ts`

La responsabilidad de cada servicio es:

- conocer el endpoint correcto
- ejecutar la llamada
- devolver tipos consistentes
- manejar fallback simple cuando se usan mocks

## Manejo de endpoints

Todos los endpoints se concentran en `src/lib/endpoints.ts`.

Esto evita:

- strings duplicados
- rutas regadas por componentes
- acoplamiento entre UI y contratos HTTP

## Variable de entorno

Variable principal:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Variable opcional para desarrollo inicial:

```env
NEXT_PUBLIC_USE_MOCKS=true
```

## Flujo de datos

Flujo esperado:

```txt
UI -> feature hook -> service -> api client -> BFF o backend
```

Durante desarrollo local, si `NEXT_PUBLIC_USE_MOCKS=true`, el service puede devolver mocks centralizados.

Esto permite:

- correr el frontend sin bloquearse por falta de backend
- mantener una frontera limpia para migrar a APIs reales
- evitar hardcode disperso en componentes
