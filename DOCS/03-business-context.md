# Business Context

## Empresas

Una empresa representa un tenant o unidad operativa dentro del ecosistema.

Cada empresa puede tener:

- su propia app frontend
- su propio BFF
- usuarios y roles
- proyectos y configuraciones
- branding y reglas de negocio especificas

## Proyectos

Un proyecto representa un desarrollo inmobiliario.

Debe contener:

- informacion comercial
- ubicacion
- inventario asociado
- estrategia de venta
- landing page publica
- estado operativo

## Lotes

El lote es la unidad comercializable principal.

Debe poder modelar:

- codigo
- bloque o fase
- metraje
- precio
- estado
- apartados o ventas
- notas o restricciones operativas

## Vendedores

Los vendedores son responsables del seguimiento comercial y cierre.

Interesan variables como:

- cartera activa
- conversion
- proyectos asignados
- seguimiento pendiente
- cumplimiento de metas

## Clientes

El cliente es el prospecto o comprador.

Debe existir trazabilidad sobre:

- origen del lead
- interes por proyecto
- ultimo contacto
- estado comercial
- notas y follow-ups

## Negocios

Un negocio representa una oportunidad comercial en pipeline.

Debe conectar:

- cliente
- proyecto
- lote
- vendedor
- etapa del pipeline
- forecast o valor esperado

## Pipeline

El pipeline es la vista principal de operacion comercial.

Permite responder:

- cuantos leads estan activos
- donde se estancan los cierres
- que monto potencial hay por etapa
- que vendedores requieren atencion

## Landings por proyecto

Cada proyecto puede requerir una landing propia para captacion y conversion.

Estas landings deben integrarse con:

- formularios
- tracking
- branding del proyecto
- disponibilidad o mensajes comerciales
- CRM interno mediante BFF o APIs
