import { CrmBffError } from "../services/bff-client";

export function getErrorMessage(error: unknown) {
  if (error instanceof CrmBffError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Sin conexion al BFF.";
}
