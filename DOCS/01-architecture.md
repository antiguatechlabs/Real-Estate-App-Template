# Architecture

## Arquitectura general del ecosistema

La arquitectura objetivo no vive dentro de este repositorio solamente. El ecosistema se compone de varias piezas desacopladas:

- una app Next.js por empresa o contexto de negocio
- un BFF por empresa o app
- una o varias landing pages por proyecto
- un backend robusto separado en Laravel + Python + PostgreSQL

## Rol de cada pieza

### Next.js app

La app Next.js es la capa frontend operativa.

Aqui viven:

- dashboard administrativo
- CRM comercial
- vistas de inventario
- modulos operativos
- experiencia de usuario para equipos internos

### BFF

El BFF se encarga de adaptar los contratos del backend a las necesidades del frontend.

Debe concentrar:

- agregacion de endpoints
- simplificacion de payloads
- reglas especificas del frontend
- cache o composicion de datos cuando aplique
- seguridad y validacion a nivel de app

### Landing pages por proyecto

Cada proyecto puede tener una landing publica propia.

Esas landings sirven para:

- captacion de leads
- campañas por proyecto
- SEO y conversion
- formularios y tracking

Pueden vivir en la misma app o en apps separadas, pero este template deja el espacio conceptual y estructural para soportarlas.

### Backend robusto

El backend principal no se implementa aqui, pero este template se diseña pensando en el siguiente reparto:

- Laravel: capa de negocio central, APIs administrativas, autenticacion, permisos, tenancy y procesos CRUD
- Python: analitica, scoring, automatizaciones, modelos predictivos o procesos especializados
- PostgreSQL: fuente de verdad transaccional y analitica estructurada

## Rol de este repo

Este repositorio representa la base reusable del frontend.

Debe resolver:

- estructura inicial limpia
- layouts consistentes
- modulos listos para evolucionar
- patrones de servicios y tipos
- convenciones para equipos humanos y agentes

No debe asumir:

- un backend fijo
- un proveedor de auth definitivo
- una unica empresa
- una unica estrategia de despliegue
