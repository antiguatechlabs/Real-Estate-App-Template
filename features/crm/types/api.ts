export type UserAccess = {
  id: number;
  company_id: number;
  tenant_code: string;
  name: string;
  email: string;
  is_super_user: false;
  role: string | null;
  roles: string[];
  permissions: string[];
};

export type CompanySettings = {
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
};

export type Company = {
  id: number;
  name: string;
  slug: string;
  settings: CompanySettings | null;
};

export type ProjectSettings = {
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
};

export type Project = {
  id: number;
  name: string;
  code: string;
  slug: string;
  description: string | null;
  status: string;
  starts_at: string | null;
  ends_at: string | null;
  settings: Partial<ProjectSettings> | null;
};

export type StatusCatalogItem = {
  id: number;
  name: string;
  code: string;
  color: string | null;
  sort_order: number;
  is_initial: boolean;
  is_final: boolean;
  is_active: boolean;
};

export type DealStatusCatalogItem = StatusCatalogItem & {
  is_won: boolean;
  is_lost: boolean;
};

export type LotFieldValue =
  | string
  | number
  | boolean
  | string[]
  | Record<string, unknown>
  | null;

export type Lot = {
  id: number;
  name: string;
  base_price: number | null;
  fields: Record<string, LotFieldValue>;
};

export type LotFieldDefinition = {
  code: string;
  label: string;
  type: "text" | "number" | "decimal" | "boolean" | "date" | "json" | string;
  required: boolean;
  options?: unknown[];
  placeholder?: string;
  default_value?: string;
};

export type LotPayload = {
  project_id: number;
  code?: string;
  name: string;
  block?: string;
  phase?: string;
  reference?: string;
  base_price?: number | null;
  price_per_m2?: number | null;
  area_m2?: number | null;
  front_measure?: number | null;
  depth_measure?: number | null;
  is_featured?: boolean;
  is_public_visible?: boolean;
  public_title?: string;
  public_description?: string;
  notes?: string;
  fields?: Record<string, LotFieldValue>;
};

export type CatalogsResponse = {
  lot_statuses: StatusCatalogItem[];
  deal_statuses: DealStatusCatalogItem[];
  pre_reservation_statuses: StatusCatalogItem[];
  reservation_statuses: StatusCatalogItem[];
  sale_statuses: StatusCatalogItem[];
  installment_statuses: StatusCatalogItem[];
  payment_statuses: StatusCatalogItem[];
};

export type ImportValidationResult = {
  can_import: boolean;
  rows: {
    total: number;
    valid: number;
    invalid: number;
  };
  will_create: number;
  headers: {
    base: string[];
    dynamic: string[];
    unknown: string[];
  };
  project_id: number;
  errors: Array<{
    row: number;
    message: string;
  }>;
};

export type ImportResult = {
  created: number;
  failed: number;
  errors: Array<{
    row: number;
    message: string;
  }>;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
  user: UserAccess;
};
