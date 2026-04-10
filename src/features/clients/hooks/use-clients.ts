"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/query-keys";
import { clientsService } from "@/services/clients.service";

export const useClients = () =>
  useQuery({
    queryKey: queryKeys.clients,
    queryFn: () => clientsService.list(),
  });
