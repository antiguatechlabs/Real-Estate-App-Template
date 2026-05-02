import type {
  CatalogsResponse,
  Company,
  Lot,
  LotFieldDefinition,
  Project,
  StatusCatalogItem,
} from "../types/api";

export const fallbackCompany: Company = {
  id: 1,
  name: "Mercafarma S.A.",
  slug: "mercafarma",
  settings: {
    id: 1,
    company_id: 1,
    timezone: "America/Guatemala",
    currency_code: "GTQ",
    locale: "es_GT",
    default_country: "GT",
    default_language: "es",
    allow_company_admin_manage_projects: true,
    allow_company_admin_manage_project_settings: true,
    allow_company_admin_manage_statuses: true,
    allow_company_admin_manage_lot_fields: true,
    allow_public_pages: false,
    settings_json: { features: ["catalogs", "lots", "imports"] },
  },
};

export const fallbackProjects: Project[] = [
  {
    id: 1,
    name: "Mercafarma Norte",
    code: "MF-N",
    slug: "mercafarma-norte",
    description: "Proyecto operativo principal.",
    status: "active",
    starts_at: "2026-01-01T00:00:00Z",
    ends_at: null,
    settings: {
      allow_lot_hold: true,
      allow_public_lot_listing: true,
      currency_code: "GTQ",
      is_active: true,
      lot_hold_expiration_hours: 24,
      timezone: "America/Guatemala",
    },
  },
  {
    id: 2,
    name: "Villas del Lago",
    code: "VL-02",
    slug: "villas-del-lago",
    description: "Proyecto en pre-reserva.",
    status: "active",
    starts_at: "2026-02-15T00:00:00Z",
    ends_at: null,
    settings: {
      allow_lot_hold: true,
      allow_public_lot_listing: false,
      currency_code: "GTQ",
      is_active: true,
      lot_hold_expiration_hours: 12,
      timezone: "America/Guatemala",
    },
  },
];

const status = (
  id: number,
  name: string,
  code: string,
  color: string,
): StatusCatalogItem => ({
  id,
  name,
  code,
  color,
  sort_order: id * 10,
  is_initial: id === 1,
  is_final: false,
  is_active: true,
});

export const fallbackCatalogs: CatalogsResponse = {
  lot_statuses: [
    status(1, "Disponible", "AVAILABLE", "#4D7C5A"),
    status(2, "Bloqueado", "BLOCKED", "#B7791F"),
    status(3, "Reservado", "RESERVED", "#12344D"),
  ],
  deal_statuses: [
    { ...status(1, "Nuevo", "NEW", "#2C7DA0"), is_won: false, is_lost: false },
  ],
  pre_reservation_statuses: [status(1, "Pendiente", "PENDING", "#B7791F")],
  reservation_statuses: [status(1, "Pendiente", "PENDING", "#B7791F")],
  sale_statuses: [status(1, "Borrador", "DRAFT", "#6B7280")],
  installment_statuses: [status(1, "Pendiente", "PENDING", "#B7791F")],
  payment_statuses: [status(1, "Pendiente", "PENDING", "#B7791F")],
};

export const fallbackLotFields: LotFieldDefinition[] = [
  {
    code: "AREA_M2",
    label: "Area m2",
    required: true,
    type: "decimal",
    placeholder: "120.50",
  },
  {
    code: "BLOCK",
    label: "Bloque",
    required: false,
    type: "text",
  },
];

export const fallbackLots: Lot[] = [
  {
    id: 1,
    name: "Lote A1",
    base_price: 10000,
    fields: {
      AREA_M2: 120,
      BLOCK: "A",
      STATUS: "AVAILABLE",
    },
  },
  {
    id: 2,
    name: "Lote B4",
    base_price: 14600,
    fields: {
      AREA_M2: 168,
      BLOCK: "B",
      STATUS: "BLOCKED",
    },
  },
  {
    id: 3,
    name: "Lote C7",
    base_price: 22100,
    fields: {
      AREA_M2: 210,
      BLOCK: "C",
      STATUS: "RESERVED",
    },
  },
];
