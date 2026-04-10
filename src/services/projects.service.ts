import { env } from "@/config/env";
import { projectsMock } from "@/mocks/entities";
import { apiClient } from "@/lib/api-client";
import { endpoints } from "@/lib/endpoints";
import type { Project } from "@/types";

export const projectsService = {
  async list(): Promise<Project[]> {
    if (env.useMocks) {
      return projectsMock;
    }

    try {
      return await apiClient.get<Project[]>(endpoints.projects.list);
    } catch {
      return projectsMock;
    }
  },
};
