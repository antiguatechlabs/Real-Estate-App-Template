import { env } from "@/config/env";
import { dashboardSummaryMock } from "@/mocks/dashboard";
import { apiClient } from "@/lib/api-client";
import { endpoints } from "@/lib/endpoints";
import type { DashboardSummary } from "@/types";

export const dashboardService = {
  async getSummary(): Promise<DashboardSummary> {
    if (env.useMocks) {
      return dashboardSummaryMock;
    }

    try {
      return await apiClient.get<DashboardSummary>(endpoints.dashboard.summary);
    } catch {
      return dashboardSummaryMock;
    }
  },
};
