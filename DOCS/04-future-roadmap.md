# Future Roadmap

## Auth real

Siguientes pasos:

- integrar proveedor de identidad
- persistir sesion
- agregar logout y refresh
- propagar contexto de usuario al frontend

## Multitenencia

El template esta pensado para crecer hacia tenancy real.

Objetivos futuros:

- branding por empresa
- resolucion de tenant por dominio o contexto
- configuracion por empresa
- acceso condicionado por tenant

## Permisos

Falta incorporar:

- roles y claims
- politicas por modulo
- permisos por accion
- guardas de rutas y componentes

## Integracion con BFF

Hoy existe una capa base de `services`.

La siguiente evolucion natural es:

- contratos tipados por endpoint
- manejo consistente de errores
- headers de auth
- invalidacion y estrategias de cache

## Dashboards avanzados

Pendiente:

- filtros globales por fecha, proyecto o empresa
- mas KPIs de negocio
- comparativos periodicos
- widgets configurables

## Reportes

El proyecto ya incluye dependencias para evolucionar esta capa.

Futuro esperado:

- exportacion a Excel
- exportacion a PDF
- plantillas de reportes ejecutivos
- snapshots por tenant o proyecto

## Automatizaciones

Posibles extensiones:

- recordatorios de follow-ups
- alertas de negocios estancados
- tareas programadas por vendedor
- scoring de leads con apoyo de Python
