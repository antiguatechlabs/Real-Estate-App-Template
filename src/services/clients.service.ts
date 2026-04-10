import { env } from "@/config/env";
import { clientsMock } from "@/mocks/entities";
import { apiClient } from "@/lib/api-client";
import { endpoints } from "@/lib/endpoints";
import type { Client } from "@/types";

export const clientsService = {
  async list(): Promise<Client[]> {
    if (env.useMocks) {
      return clientsMock;
    }

    try {
      return await apiClient.get<Client[]>(endpoints.clients.list);
    } catch {
      return clientsMock;
    }
  },
};
