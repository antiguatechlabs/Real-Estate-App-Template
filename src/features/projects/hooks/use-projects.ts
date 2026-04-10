"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/query-keys";
import { projectsService } from "@/services/projects.service";

export const useProjects = () =>
  useQuery({
    queryKey: queryKeys.projects,
    queryFn: () => projectsService.list(),
  });
