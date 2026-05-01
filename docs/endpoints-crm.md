# Endpoints para CRM externo

Este documento resume los endpoints que puede consumir la app externa del CRM o su BFF por empresa.
La API actual vive bajo `/api/v1`.

## Contrato general

Todos los endpoints de negocio usan tenant por header. El frontend/BFF debe inyectar el codigo fijo de la empresa y nunca enviar `company_id` como dato editable.

Headers comunes para endpoints tenant-aware:

```http
X-Tenant-Code: MERCAFARMA
Authorization: Bearer <jwt>
Accept: application/json
```

Excepciones:
- `GET /api/v1/healthcheck` no requiere tenant ni JWT.
- `POST /api/v1/auth/login` requiere `X-Tenant-Code`, pero no requiere JWT.

Errores comunes:

```json
{
  "message": "El header X-Tenant-Code es obligatorio."
}
```

```json
{
  "message": "No autenticado."
}
```

```json
{
  "message": "No tienes acceso a este tenant."
}
```

```json
{
  "message": "Tenant no encontrado."
}
```

```json
{
  "message": "Los superusuarios no pueden acceder a endpoints de la API tenant."
}
```

## Interfaces base

### UserAccess

```ts
interface UserAccess {
  id: number;
  company_id: number;
  tenant_code: string;
  name: string;
  email: string;
  is_super_user: false;
  role: string | null;
  roles: string[];
  permissions: string[];
}
```

### Company

```ts
interface Company {
  id: number;
  name: string;
  slug: string;
  settings: CompanySettings | null;
}

interface CompanySettings {
  id: number;
  company_id: number;
  timezone: string | null;
  currency_code: string | null;
  locale: string | null;
  default_country: string | null;
  default_language: string | null;
  allow_company_admin_manage_projects: boolean;
  allow_company_admin_manage_project_settings: boolean;
  allow_company_admin_manage_statuses: boolean;
  allow_company_admin_manage_lot_fields: boolean;
  allow_public_pages: boolean;
  settings_json: Record<string, unknown> | null;
}
```

### Project

La respuesta de proyectos usa los campos visibles actuales del controlador.
`settings` viene del modelo `project_settings` y puede incluir mas campos que los mostrados aqui si existen en base de datos.

```ts
interface Project {
  id: number;
  name: string;
  code: string;
  slug: string;
  description: string | null;
  status: string;
  starts_at: string | null;
  ends_at: string | null;
  settings: ProjectSettings | null;
}

interface ProjectSettings {
  id: number;
  company_id: number;
  project_id: number;
  is_active: boolean;
  currency_code: string | null;
  timezone: string | null;
  notes: string | null;
  allow_public_project_page: boolean;
  allow_public_lot_listing: boolean;
  allow_public_lot_prices: boolean;
  allow_public_pre_reservation: boolean;
  allow_public_reservation_request: boolean;
  public_contact_whatsapp: string | null;
  public_contact_phone: string | null;
  public_contact_email: string | null;
  allow_pre_reservations: boolean;
  pre_reservation_expiration_hours: number | null;
  pre_reservation_requires_supervisor_approval: boolean;
  pre_reservation_auto_cancel_on_expiration: boolean;
  pre_reservation_allows_same_lot_multiple_requests: boolean;
  allow_reservations: boolean;
  reservation_requires_payment: boolean;
  reservation_payment_amount: string | number | null;
  reservation_expiration_hours: number | null;
  reservation_requires_supervisor_approval: boolean;
  reservation_auto_cancel_on_expiration: boolean;
  reservation_holds_lot: boolean;
  reservation_release_lot_on_cancellation: boolean;
  lot_pricing_mode: string | null;
  allow_manual_lot_price_override: boolean;
  allow_manual_price_per_m2_override: boolean;
  require_base_price_on_lot_creation: boolean;
  allow_financing: boolean;
  max_financing_months: number | null;
  max_interest_free_months: number | null;
  annual_interest_rate: string | number | null;
  interest_calculation_mode: "flat" | "reducing" | null;
  payment_frequency: string | null;
  default_payment_day: number | null;
  allow_custom_financing_terms: boolean;
  minimum_down_payment_amount: string | number | null;
  minimum_down_payment_percentage: string | number | null;
  down_payment_floor_mode: "amount" | "percentage" | null;
  allow_down_payment_installments: boolean;
  max_down_payment_installments: number | null;
  allow_late_fee: boolean;
  late_fee_grace_days: number | null;
  late_fee_type: "fixed" | "percentage" | null;
  late_fee_value: string | number | null;
  late_fee_frequency: "daily" | "monthly" | null;
  late_fee_base: "installment" | "balance" | null;
  late_fee_maximum_amount: string | number | null;
  late_fee_maximum_percentage: string | number | null;
  generate_installments_on_sale_confirmation: boolean;
  allow_principal_prepayment: boolean;
  prepayment_recalculation_mode: "reduce_term" | "reduce_payment" | "none" | null;
  allow_advance_installment_payment: boolean;
  allow_partial_installment_payment: boolean;
  payment_application_order: unknown[] | Record<string, unknown> | null;
  seller_commission_type: "percentage" | "fixed" | null;
  seller_commission_value: string | number | null;
  seller_commission_payment_trigger: "on_down_payment" | "on_full_payment" | null;
  down_payment_commission_percentage: string | number | null;
  allow_custom_commission_override: boolean;
  assignment_mode: string | null;
  auto_assign_on_lead_creation: boolean;
  auto_assign_on_pre_reservation_creation: boolean;
  allow_supervisor_take_ownership: boolean;
  reassign_if_salesperson_inactive: boolean;
  max_open_leads_per_salesperson: number | null;
  allow_lot_hold: boolean;
  lot_hold_expiration_hours: number | null;
  auto_release_held_lot: boolean;
  allow_same_customer_multiple_lots: boolean;
  require_customer_documents_for_reservation: boolean;
  require_customer_documents_for_sale: boolean;
  require_signed_documents_for_sale_confirmation: boolean;
  send_pre_reservation_notifications: boolean;
  send_reservation_notifications: boolean;
  send_payment_due_reminders: boolean;
  send_overdue_payment_notifications: boolean;
  days_before_due_for_reminder: number | null;
  require_comment_on_manual_status_change: boolean;
  require_comment_on_reservation_cancellation: boolean;
  require_comment_on_sale_cancellation: boolean;
  strict_lot_status_control: boolean;
  created_at: string;
  updated_at: string;
}
```

### StatusCatalogItem

```ts
interface StatusCatalogItem {
  id: number;
  name: string;
  code: string;
  color: string | null;
  sort_order: number;
  is_initial: boolean;
  is_final: boolean;
  is_active: boolean;
}

interface DealStatusCatalogItem extends StatusCatalogItem {
  is_won: boolean;
  is_lost: boolean;
}
```

### Lot

La respuesta actual de lotes es reducida. Los campos como `code`, `project_id`, `block`, `phase` y `current_status_id` se reciben para crear/editar o filtrar, pero no se devuelven en `LotResource` hoy.

```ts
interface Lot {
  id: number;
  name: string;
  base_price: number | null;
  fields: Record<string, string | number | boolean | string[] | Record<string, unknown> | null>;
}

interface LotFieldDefinition {
  code: string;
  label: string;
  type: "text" | "number" | "decimal" | "boolean" | "date" | "json" | string;
  required: boolean;
  options?: unknown[];
  placeholder?: string;
  default_value?: string;
}
```

## Endpoints implementados

### Healthcheck <GET> [/api/v1/healthcheck]

Valida que la API este levantada.
No requiere tenant ni autenticacion.

Body: no aplica.

Respuesta:

```json
{
  "status": "ok",
  "service": "Real Estate App Backend",
  "timestamp": "2026-04-26T12:00:00+00:00"
}
```

### Login <POST> [/api/v1/auth/login]

Autentica un usuario operativo del tenant y devuelve un JWT.
El usuario debe pertenecer a la empresa resuelta por `X-Tenant-Code`; los superusuarios no entran por API.

Body:

```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

Respuesta:

```json
{
  "access_token": "token.jwt",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": 1,
    "company_id": 1,
    "tenant_code": "MERCAFARMA",
    "name": "Jane Doe",
    "email": "admin@example.com",
    "is_super_user": false,
    "role": "Asesor",
    "roles": ["Asesor"],
    "permissions": ["deals.view", "deals.create"]
  }
}
```

Error de credenciales:

```json
{
  "message": "Credenciales inválidas."
}
```

### Usuario autenticado <GET> [/api/v1/auth/me]

Devuelve el usuario actual y sus roles/permisos.
Sirve para inicializar el contexto de sesion del CRM externo.

Body: no aplica.

Respuesta:

```json
{
  "user": {
    "id": 1,
    "company_id": 1,
    "tenant_code": "MERCAFARMA",
    "name": "Jane Doe",
    "email": "admin@example.com",
    "is_super_user": false,
    "role": "Asesor",
    "roles": ["Asesor"],
    "permissions": ["deals.view", "deals.create"]
  }
}
```

### Refrescar token <POST> [/api/v1/auth/refresh]

Renueva el JWT actual.
Devuelve el mismo formato de respuesta que login.

Body: no aplica.

Respuesta:

```json
{
  "access_token": "nuevo.token.jwt",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": 1,
    "company_id": 1,
    "tenant_code": "MERCAFARMA",
    "name": "Jane Doe",
    "email": "admin@example.com",
    "is_super_user": false,
    "role": "Asesor",
    "roles": ["Asesor"],
    "permissions": ["deals.view", "deals.create"]
  }
}
```

### Cerrar sesion <POST> [/api/v1/auth/logout]

Invalida el JWT actual.
El cliente debe borrar su token local despues de una respuesta exitosa.

Body: no aplica.

Respuesta:

```json
{
  "message": "Sesión cerrada correctamente."
}
```

### Empresa actual <GET> [/api/v1/company]

Obtiene la empresa del tenant actual con su configuracion.
El tenant se resuelve por `X-Tenant-Code`; el cliente no envia `company_id`.

Body: no aplica.

Respuesta:

```json
{
  "company": {
    "id": 1,
    "name": "Mi Empresa",
    "slug": "mi-empresa",
    "settings": {
      "id": 1,
      "company_id": 1,
      "timezone": "America/Guatemala",
      "currency_code": "GTQ",
      "locale": "es_GT",
      "default_country": "GT",
      "default_language": "es",
      "allow_company_admin_manage_projects": true,
      "allow_company_admin_manage_project_settings": true,
      "allow_company_admin_manage_statuses": true,
      "allow_company_admin_manage_lot_fields": true,
      "allow_public_pages": false,
      "settings_json": {
        "features": ["catalogs"]
      }
    }
  }
}
```

### Listar proyectos <GET> [/api/v1/projects]

Lista los proyectos del tenant actual.
Incluye la configuracion asociada cuando exista.

Body: no aplica.

Respuesta:

```json
{
  "projects": [
    {
      "id": 1,
      "name": "Proyecto Ejemplo",
      "code": "PRJ-001",
      "slug": "proyecto-ejemplo",
      "description": "Descripción de ejemplo del proyecto",
      "status": "active",
      "starts_at": "2026-01-01T00:00:00Z",
      "ends_at": null,
      "settings": {
        "id": 1,
        "company_id": 1,
        "project_id": 1,
        "is_active": true,
        "currency_code": "USD",
        "timezone": "UTC",
        "notes": "Notas de configuración",
        "allow_public_project_page": false
      }
    }
  ]
}
```

### Ver proyecto <GET> [/api/v1/projects/{project}]

Obtiene un proyecto especifico del tenant actual.
Si el proyecto no pertenece al tenant, el binding tenant-aware responde 404.

Body: no aplica.

Respuesta:

```json
{
  "project": {
    "id": 1,
    "name": "Proyecto Ejemplo",
    "code": "PRJ-001",
    "slug": "proyecto-ejemplo",
    "description": "Descripción de ejemplo del proyecto",
    "status": "active",
    "starts_at": "2026-01-01T00:00:00Z",
    "ends_at": null,
    "settings": {
      "id": 1,
      "company_id": 1,
      "project_id": 1,
      "is_active": true,
      "currency_code": "USD",
      "timezone": "UTC",
      "notes": "Notas de configuración",
      "allow_public_project_page": false
    }
  }
}
```

### Actualizar configuracion de proyecto <PUT> [/api/v1/projects/{project}/settings]

Crea o actualiza la configuracion operativa y financiera de un proyecto.
No se acepta `company_id`; solo campos dentro de `settings`.

Body:

```json
{
  "settings": {
    "is_active": true,
    "notes": "Proyecto habilitado para ventas",
    "allow_public_lot_prices": true,
    "allow_public_reservation_request": true,
    "public_contact_whatsapp": "+50255555555",
    "public_contact_phone": "+50222222222",
    "public_contact_email": "ventas@example.com",
    "reservation_requires_supervisor_approval": true,
    "reservation_auto_cancel_on_expiration": true,
    "pre_reservation_allows_same_lot_multiple_requests": false,
    "max_financing_months": 24,
    "max_interest_free_months": 6,
    "annual_interest_rate": 12.5,
    "interest_calculation_mode": "flat",
    "payment_frequency": "monthly",
    "default_payment_day": 5,
    "allow_custom_financing_terms": true,
    "minimum_down_payment_amount": 1000,
    "minimum_down_payment_percentage": 10,
    "down_payment_floor_mode": "amount",
    "allow_down_payment_installments": true,
    "max_down_payment_installments": 3,
    "allow_late_fee": true,
    "late_fee_grace_days": 5,
    "late_fee_type": "fixed",
    "late_fee_value": 50,
    "late_fee_frequency": "daily",
    "late_fee_base": "installment",
    "late_fee_maximum_amount": 500,
    "late_fee_maximum_percentage": 20,
    "generate_installments_on_sale_confirmation": true,
    "allow_principal_prepayment": true,
    "prepayment_recalculation_mode": "reduce_term",
    "allow_advance_installment_payment": true,
    "allow_partial_installment_payment": true,
    "payment_application_order": "interest_first",
    "seller_commission_type": "percentage",
    "seller_commission_value": 5,
    "seller_commission_payment_trigger": "on_down_payment",
    "down_payment_commission_percentage": 2,
    "allow_custom_commission_override": true,
    "reassign_if_salesperson_inactive": true,
    "max_open_leads_per_salesperson": 20,
    "allow_lot_hold": true,
    "lot_hold_expiration_hours": 24,
    "auto_release_held_lot": true,
    "allow_same_customer_multiple_lots": true,
    "require_customer_documents_for_reservation": true,
    "require_customer_documents_for_sale": true,
    "require_signed_documents_for_sale_confirmation": true,
    "send_pre_reservation_notifications": true,
    "send_reservation_notifications": true,
    "send_payment_due_reminders": true,
    "send_overdue_payment_notifications": true,
    "days_before_due_for_reminder": 3
  }
}
```

Respuesta:

```json
{
  "message": "La configuración del proyecto se actualizó correctamente."
}
```

### Catalogo de estados de lote <GET> [/api/v1/catalogs/lot-statuses]

Devuelve estados de lote configurados para el tenant.
Usa `StatusCatalogItem[]`.

Body: no aplica.

Respuesta:

```json
{
  "lot_statuses": [
    {
      "id": 1,
      "name": "Disponible",
      "code": "AVAILABLE",
      "color": "#10B981",
      "sort_order": 10,
      "is_initial": true,
      "is_final": false,
      "is_active": true
    }
  ]
}
```

### Catalogo de estados de negocio <GET> [/api/v1/catalogs/deal-statuses]

Devuelve estados de oportunidad/negocio configurados para el tenant.
Agrega `is_won` e `is_lost` sobre `StatusCatalogItem`.

Body: no aplica.

Respuesta:

```json
{
  "deal_statuses": [
    {
      "id": 1,
      "name": "Nuevo",
      "code": "NEW",
      "color": "#3B82F6",
      "sort_order": 10,
      "is_initial": true,
      "is_final": false,
      "is_active": true,
      "is_won": false,
      "is_lost": false
    }
  ]
}
```

### Catalogo de estados de pre-reserva <GET> [/api/v1/catalogs/pre-reservation-statuses]

Devuelve estados de pre-reserva configurados para el tenant.
Usa `StatusCatalogItem[]`.

Body: no aplica.

Respuesta:

```json
{
  "pre_reservation_statuses": [
    {
      "id": 1,
      "name": "Pendiente",
      "code": "PENDING",
      "color": "#F59E0B",
      "sort_order": 10,
      "is_initial": true,
      "is_final": false,
      "is_active": true
    }
  ]
}
```

### Catalogo de estados de reserva <GET> [/api/v1/catalogs/reservation-statuses]

Devuelve estados de reserva configurados para el tenant.
Usa `StatusCatalogItem[]`.

Body: no aplica.

Respuesta:

```json
{
  "reservation_statuses": [
    {
      "id": 1,
      "name": "Pendiente",
      "code": "PENDING",
      "color": "#F59E0B",
      "sort_order": 10,
      "is_initial": true,
      "is_final": false,
      "is_active": true
    }
  ]
}
```

### Catalogo de estados de venta <GET> [/api/v1/catalogs/sale-statuses]

Devuelve estados de venta configurados para el tenant.
Usa `StatusCatalogItem[]`.

Body: no aplica.

Respuesta:

```json
{
  "sale_statuses": [
    {
      "id": 1,
      "name": "Borrador",
      "code": "DRAFT",
      "color": "#6B7280",
      "sort_order": 10,
      "is_initial": true,
      "is_final": false,
      "is_active": true
    }
  ]
}
```

### Catalogo de estados de cuota <GET> [/api/v1/catalogs/installment-statuses]

Devuelve estados de cuota configurados para el tenant.
La respuesta actual no expone `is_paid` ni `is_overdue`.

Body: no aplica.

Respuesta:

```json
{
  "installment_statuses": [
    {
      "id": 1,
      "name": "Pendiente",
      "code": "PENDING",
      "color": "#F59E0B",
      "sort_order": 10,
      "is_initial": true,
      "is_final": false,
      "is_active": true
    }
  ]
}
```

### Catalogo de estados de pago <GET> [/api/v1/catalogs/payment-statuses]

Devuelve estados de pago configurados para el tenant.
La respuesta actual no expone `is_confirmed` ni `is_rejected`.

Body: no aplica.

Respuesta:

```json
{
  "payment_statuses": [
    {
      "id": 1,
      "name": "Pendiente",
      "code": "PENDING",
      "color": "#F59E0B",
      "sort_order": 10,
      "is_initial": true,
      "is_final": false,
      "is_active": true
    }
  ]
}
```

### Descargar plantilla de lotes <GET> [/api/v1/lots/template]

Descarga un archivo `.xlsx` para importacion masiva.
Incluye columnas base y campos dinamicos activos del tenant.

Body: no aplica.

Respuesta:

```http
Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
Content-Disposition: attachment; filename=lots_template.xlsx
```

### Validar importacion de lotes <POST> [/api/v1/lots/import/validate]

Valida una plantilla `.xlsx` sin crear registros.
Se usa antes de importar para mostrar errores por fila.

Body `multipart/form-data`:

```txt
project_id=1
file=<lots_template.xlsx>
```

Respuesta:

```json
{
  "can_import": false,
  "rows": {
    "total": 28,
    "valid": 25,
    "invalid": 3
  },
  "will_create": 25,
  "headers": {
    "base": ["name", "base_price"],
    "dynamic": ["AREA_M2", "BLOCK"],
    "unknown": []
  },
  "project_id": 1,
  "errors": [
    {
      "row": 3,
      "message": "El campo name es obligatorio."
    }
  ]
}
```

### Importar lotes <POST> [/api/v1/lots/import]

Importa lotes desde un archivo `.xlsx` generado con la plantilla.
Crea registros validos y devuelve resumen de filas fallidas.

Body `multipart/form-data`:

```txt
project_id=1
file=<lots_template.xlsx>
```

Respuesta:

```json
{
  "created": 25,
  "failed": 3,
  "errors": [
    {
      "row": 3,
      "message": "El project_id no es válido."
    }
  ]
}
```

### Definiciones de campos de lote <GET> [/api/v1/lots/fields]

Devuelve campos dinamicos activos para lotes del tenant.
El frontend puede usarlos para construir formularios o tablas.

Body: no aplica.

Respuesta:

```json
{
  "fields": [
    {
      "code": "AREA_M2",
      "label": "Área (m²)",
      "type": "decimal",
      "required": true,
      "placeholder": "120.50",
      "default_value": "0"
    }
  ]
}
```

### Listar lotes <GET> [/api/v1/lots]

Lista lotes del tenant actual.
Permite filtrar por proyecto, estado y busqueda textual.

Query params:

```txt
project_id=1
status=AVAILABLE
search=A1
```

Body: no aplica.

Respuesta:

```json
{
  "lots": [
    {
      "id": 1,
      "name": "Lote A1",
      "base_price": 10000,
      "fields": {
        "AREA_M2": 120,
        "PRICE_PER_M2": 80
      }
    }
  ]
}
```

### Crear lote <POST> [/api/v1/lots]

Crea un lote en un proyecto del tenant.
`code` es opcional; si no viene se genera desde `name`.

Body:

```json
{
  "project_id": 1,
  "code": "LOT_A1",
  "name": "Lote A1",
  "block": "A",
  "phase": "1",
  "reference": "A-001",
  "base_price": 10000,
  "price_per_m2": 80,
  "area_m2": 120,
  "front_measure": 10,
  "depth_measure": 12,
  "is_featured": true,
  "is_public_visible": true,
  "public_title": "Lote A1",
  "public_description": "Lote cerca del ingreso principal.",
  "notes": "Disponible para venta.",
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 80
  }
}
```

Respuesta `201`:

```json
{
  "id": 1,
  "name": "Lote A1",
  "base_price": 10000,
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 80
  }
}
```

### Ver lote <GET> [/api/v1/lots/{lot}]

Obtiene un lote especifico del tenant.
La respuesta usa la misma estructura `Lot`.

Body: no aplica.

Respuesta:

```json
{
  "id": 1,
  "name": "Lote A1",
  "base_price": 10000,
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 80
  }
}
```

### Actualizar lote <PUT> [/api/v1/lots/{lot}]

Actualiza los datos base y campos dinamicos de un lote.
El body usa el mismo contrato que crear lote y no acepta `company_id`.

Body:

```json
{
  "project_id": 1,
  "code": "LOT_A1",
  "name": "Lote A1 actualizado",
  "block": "A",
  "phase": "1",
  "reference": "A-001",
  "base_price": 11000,
  "price_per_m2": 85,
  "area_m2": 120,
  "front_measure": 10,
  "depth_measure": 12,
  "is_featured": false,
  "is_public_visible": true,
  "public_title": "Lote A1",
  "public_description": "Descripcion publica actualizada.",
  "notes": "Precio actualizado.",
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 85
  }
}
```

Respuesta:

```json
{
  "id": 1,
  "name": "Lote A1 actualizado",
  "base_price": 11000,
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 85
  }
}
```

### Eliminar lote <DELETE> [/api/v1/lots/{lot}]

Elimina logicamente un lote del tenant.
Devuelve `204 No Content`.

Body: no aplica.

Respuesta:

```json
{}
```

### Cambiar estado de lote <POST> [/api/v1/lots/{lot}/change-status]

Cambia el estado actual de un lote usando un codigo de estado del tenant.
Registra historial con usuario, razon, comentario y metadata de accion.

Body:

```json
{
  "status_code": "RESERVED",
  "reason": "Reserva confirmada",
  "comment": "Cambio solicitado por ventas."
}
```

Respuesta:

```json
{
  "id": 1,
  "name": "Lote A1",
  "base_price": 10000,
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 80
  }
}
```

Errores de validacion posibles:

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "status_code": ["El estado RESERVED no está configurado para este tenant."]
  }
}
```

### Bloquear lote <POST> [/api/v1/lots/{lot}/hold]

Bloquea un lote usando el estado estandar `BLOCKED`.
Requiere que `allow_lot_hold` este activo en la configuracion del proyecto.

Body: no aplica.

Respuesta:

```json
{
  "id": 1,
  "name": "Lote A1",
  "base_price": 10000,
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 80
  }
}
```

Error de validacion posible:

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "message": ["El bloqueo de lotes no está habilitado para este proyecto."]
  }
}
```

### Liberar lote <POST> [/api/v1/lots/{lot}/release]

Libera un lote usando el estado estandar `AVAILABLE`.
Tambien respeta las reglas de transicion estricta del proyecto.

Body: no aplica.

Respuesta:

```json
{
  "id": 1,
  "name": "Lote A1",
  "base_price": 10000,
  "fields": {
    "AREA_M2": 120,
    "PRICE_PER_M2": 80
  }
}
```

## Endpoints esperados pero aun no implementados

Segun `docs/context.md`, `docs/resumen.md` y los modelos/migraciones existentes, estos modulos son parte del flujo CRM V1 pero todavia no aparecen en `routes/api.php`:

- Clientes y leads: `customers`, `customer_contacts`, `customer_interactions`, `lead_sources`, `landing_submissions`.
- Negocios: `deals`, `deal_assignments`, `deal_notes`, `deal_loss_reasons`.
- Pre-reservas: `pre_reservations`, asignaciones, notas e historiales.
- Reservas: `reservations`, pagos y cancelaciones.
- Ventas: `sales` e historiales.
- Financiamiento: `sale_financings`, `sale_installments`, `sale_payments`, asignaciones de pago, documentos, abonos a capital y mora.
- Operacion: `tasks`, `task_comments`, `appointments`.
- Auditoria/notificaciones: `audit_logs`, `activity_logs`, `notifications`, `notification_reads`.

Cuando se implementen, deben seguir el mismo contrato: `/api/v1`, `auth:api`, `tenant.resolve`, `tenant.access`, header `X-Tenant-Code`, sin recibir `company_id` desde el cliente y documentacion Scribe en espanol.
