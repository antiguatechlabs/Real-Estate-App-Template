import { env } from "@/config/env";
import { dealsMock } from "@/mocks/entities";
import { apiClient } from "@/lib/api-client";
import { endpoints } from "@/lib/endpoints";
import type { Deal } from "@/types";

export const dealsService = {
  async list(): Promise<Deal[]> {
    if (env.useMocks) {
      return dealsMock;
    }

    try {
      return await apiClient.get<Deal[]>(endpoints.deals.list);
    } catch {
      return dealsMock;
    }
  },
};
