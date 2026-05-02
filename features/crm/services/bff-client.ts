import type {
  AuthResponse,
  CatalogsResponse,
  Company,
  ImportResult,
  ImportValidationResult,
  LoginPayload,
  Lot,
  LotFieldDefinition,
  LotPayload,
  Project,
  ProjectSettings,
  UserAccess,
} from "../types/api";

type RequestOptions = {
  body?: unknown;
  formData?: FormData;
  method?: "GET" | "POST" | "PUT" | "DELETE";
};

export class CrmBffError extends Error {
  status: number;
  payload: unknown;

  constructor(message: string, status: number, payload: unknown) {
    super(message);
    this.name = "CrmBffError";
    this.status = status;
    this.payload = payload;
  }
}

async function crmRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const headers = new Headers({
    Accept: "application/json",
  });

  let body: BodyInit | undefined;

  if (options.formData) {
    body = options.formData;
  } else if (options.body !== undefined) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(options.body);
  }

  const response = await fetch(`/api/bff/${path.replace(/^\//, "")}`, {
    method: options.method ?? "GET",
    headers,
    body,
  });

  if (response.status === 204) {
    return undefined as T;
  }

  const contentType = response.headers.get("content-type") ?? "";
  const payload = contentType.includes("application/json") ? await response.json() : null;

  if (!response.ok) {
    throw new CrmBffError(
      payload?.message ?? "No se pudo completar la solicitud al CRM.",
      response.status,
      payload,
    );
  }

  return payload as T;
}

export const crmBffClient = {
  login(payload: LoginPayload) {
    return crmRequest<AuthResponse>("auth/login", {
      method: "POST",
      body: payload,
    });
  },

  me() {
    return crmRequest<{ user: UserAccess }>("auth/me");
  },

  refresh() {
    return crmRequest<AuthResponse>("auth/refresh", { method: "POST" });
  },

  logout() {
    return crmRequest<{ message: string }>("auth/logout", { method: "POST" });
  },

  company() {
    return crmRequest<{ company: Company }>("company");
  },

  projects() {
    return crmRequest<{ projects: Project[] }>("projects");
  },

  project(projectId: number) {
    return crmRequest<{ project: Project }>(`projects/${projectId}`);
  },

  updateProjectSettings(projectId: number, settings: Partial<ProjectSettings>) {
    return crmRequest<{ message: string }>(`projects/${projectId}/settings`, {
      method: "PUT",
      body: { settings },
    });
  },

  async catalogs(): Promise<CatalogsResponse> {
    const [
      lotStatuses,
      dealStatuses,
      preReservationStatuses,
      reservationStatuses,
      saleStatuses,
      installmentStatuses,
      paymentStatuses,
    ] = await Promise.all([
      crmRequest<Pick<CatalogsResponse, "lot_statuses">>("catalogs/lot-statuses"),
      crmRequest<Pick<CatalogsResponse, "deal_statuses">>("catalogs/deal-statuses"),
      crmRequest<Pick<CatalogsResponse, "pre_reservation_statuses">>(
        "catalogs/pre-reservation-statuses",
      ),
      crmRequest<Pick<CatalogsResponse, "reservation_statuses">>(
        "catalogs/reservation-statuses",
      ),
      crmRequest<Pick<CatalogsResponse, "sale_statuses">>("catalogs/sale-statuses"),
      crmRequest<Pick<CatalogsResponse, "installment_statuses">>(
        "catalogs/installment-statuses",
      ),
      crmRequest<Pick<CatalogsResponse, "payment_statuses">>("catalogs/payment-statuses"),
    ]);

    return {
      ...lotStatuses,
      ...dealStatuses,
      ...preReservationStatuses,
      ...reservationStatuses,
      ...saleStatuses,
      ...installmentStatuses,
      ...paymentStatuses,
    };
  },

  lotFields() {
    return crmRequest<{ fields: LotFieldDefinition[] }>("lots/fields");
  },

  lots(filters: { project_id?: number; status?: string; search?: string } = {}) {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params.set(key, String(value));
      }
    });

    const query = params.toString();
    return crmRequest<{ lots: Lot[] }>(`lots${query ? `?${query}` : ""}`);
  },

  createLot(payload: LotPayload) {
    return crmRequest<Lot>("lots", {
      method: "POST",
      body: payload,
    });
  },

  updateLot(lotId: number, payload: LotPayload) {
    return crmRequest<Lot>(`lots/${lotId}`, {
      method: "PUT",
      body: payload,
    });
  },

  deleteLot(lotId: number) {
    return crmRequest<void>(`lots/${lotId}`, { method: "DELETE" });
  },

  changeLotStatus(lotId: number, payload: { status_code: string; reason?: string; comment?: string }) {
    return crmRequest<Lot>(`lots/${lotId}/change-status`, {
      method: "POST",
      body: payload,
    });
  },

  holdLot(lotId: number) {
    return crmRequest<Lot>(`lots/${lotId}/hold`, { method: "POST" });
  },

  releaseLot(lotId: number) {
    return crmRequest<Lot>(`lots/${lotId}/release`, { method: "POST" });
  },

  async downloadLotsTemplate() {
    const response = await fetch("/api/bff/lots/template");

    if (!response.ok) {
      throw new CrmBffError("No se pudo descargar la plantilla.", response.status, null);
    }

    return response.blob();
  },

  validateLotsImport(projectId: number, file: File) {
    const formData = new FormData();
    formData.set("project_id", String(projectId));
    formData.set("file", file);

    return crmRequest<ImportValidationResult>("lots/import/validate", {
      method: "POST",
      formData,
    });
  },

  importLots(projectId: number, file: File) {
    const formData = new FormData();
    formData.set("project_id", String(projectId));
    formData.set("file", file);

    return crmRequest<ImportResult>("lots/import", {
      method: "POST",
      formData,
    });
  },
};
