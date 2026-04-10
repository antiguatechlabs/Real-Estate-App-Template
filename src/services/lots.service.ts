import { env } from "@/config/env";
import { lotsMock } from "@/mocks/entities";
import { apiClient } from "@/lib/api-client";
import { endpoints } from "@/lib/endpoints";
import type { Lot } from "@/types";

export const lotsService = {
  async list(): Promise<Lot[]> {
    if (env.useMocks) {
      return lotsMock;
    }

    try {
      return await apiClient.get<Lot[]>(endpoints.lots.list);
    } catch {
      return lotsMock;
    }
  },
};
