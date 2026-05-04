import type { Lot } from "../types/api";

export type StatusTone = "danger" | "neutral" | "success" | "warning";

export function formatCurrency(value: number | null | undefined, currency = "GTQ") {
  if (value == null) {
    return "Sin precio";
  }

  return new Intl.NumberFormat("es-GT", {
    currency,
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

export function getLotStatus(lot: Lot) {
  return String(lot.fields.STATUS ?? lot.fields.status ?? "AVAILABLE");
}

export function getLotArea(lot: Lot) {
  const value = lot.fields.AREA_M2 ?? lot.fields.area_m2 ?? lot.fields.Area;
  return value == null ? "N/D" : String(value);
}

export function getLotStatusTone(status: string): StatusTone {
  const normalized = status.toLowerCase();

  if (normalized.includes("available") || normalized.includes("disponible")) {
    return "success";
  }

  if (
    normalized.includes("blocked") ||
    normalized.includes("bloqueado") ||
    normalized.includes("hold")
  ) {
    return "warning";
  }

  if (normalized.includes("error") || normalized.includes("cancel")) {
    return "danger";
  }

  return "neutral";
}
