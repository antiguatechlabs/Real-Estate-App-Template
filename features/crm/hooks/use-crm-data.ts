"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { crmBffClient } from "../services/bff-client";
import type { LotPayload, ProjectSettings } from "../types/api";

export const crmQueryKeys = {
  catalogs: ["crm", "catalogs"] as const,
  company: ["crm", "company"] as const,
  lotFields: ["crm", "lot-fields"] as const,
  lots: (filters: { project_id?: number; status?: string; search?: string }) =>
    ["crm", "lots", filters] as const,
  me: ["crm", "me"] as const,
  projects: ["crm", "projects"] as const,
};

export function useCrmSession() {
  return useQuery({
    queryKey: crmQueryKeys.me,
    queryFn: crmBffClient.me,
    retry: false,
  });
}

export function useCrmOverview() {
  const company = useQuery({
    queryKey: crmQueryKeys.company,
    queryFn: crmBffClient.company,
    retry: false,
  });
  const projects = useQuery({
    queryKey: crmQueryKeys.projects,
    queryFn: crmBffClient.projects,
    retry: false,
  });
  const catalogs = useQuery({
    queryKey: crmQueryKeys.catalogs,
    queryFn: crmBffClient.catalogs,
    retry: false,
  });
  const lotFields = useQuery({
    queryKey: crmQueryKeys.lotFields,
    queryFn: crmBffClient.lotFields,
    retry: false,
  });

  return {
    catalogs,
    company,
    lotFields,
    projects,
  };
}

export function useCrmLots(filters: { project_id?: number; status?: string; search?: string }) {
  return useQuery({
    queryKey: crmQueryKeys.lots(filters),
    queryFn: () => crmBffClient.lots(filters),
    retry: false,
  });
}

export function useCrmMutations() {
  const queryClient = useQueryClient();

  const invalidateLots = () => {
    void queryClient.invalidateQueries({ queryKey: ["crm", "lots"] });
  };

  return {
    changeLotStatus: useMutation({
      mutationFn: ({
        lotId,
        payload,
      }: {
        lotId: number;
        payload: { status_code: string; reason?: string; comment?: string };
      }) => crmBffClient.changeLotStatus(lotId, payload),
      onSuccess: invalidateLots,
    }),
    createLot: useMutation({
      mutationFn: (payload: LotPayload) => crmBffClient.createLot(payload),
      onSuccess: invalidateLots,
    }),
    deleteLot: useMutation({
      mutationFn: (lotId: number) => crmBffClient.deleteLot(lotId),
      onSuccess: invalidateLots,
    }),
    holdLot: useMutation({
      mutationFn: (lotId: number) => crmBffClient.holdLot(lotId),
      onSuccess: invalidateLots,
    }),
    importLots: useMutation({
      mutationFn: ({ file, projectId }: { file: File; projectId: number }) =>
        crmBffClient.importLots(projectId, file),
      onSuccess: invalidateLots,
    }),
    releaseLot: useMutation({
      mutationFn: (lotId: number) => crmBffClient.releaseLot(lotId),
      onSuccess: invalidateLots,
    }),
    updateLot: useMutation({
      mutationFn: ({ lotId, payload }: { lotId: number; payload: LotPayload }) =>
        crmBffClient.updateLot(lotId, payload),
      onSuccess: invalidateLots,
    }),
    updateProjectSettings: useMutation({
      mutationFn: ({
        projectId,
        settings,
      }: {
        projectId: number;
        settings: Partial<ProjectSettings>;
      }) => crmBffClient.updateProjectSettings(projectId, settings),
      onSuccess: () => {
        void queryClient.invalidateQueries({ queryKey: crmQueryKeys.projects });
      },
    }),
    validateImport: useMutation({
      mutationFn: ({ file, projectId }: { file: File; projectId: number }) =>
        crmBffClient.validateLotsImport(projectId, file),
    }),
  };
}
