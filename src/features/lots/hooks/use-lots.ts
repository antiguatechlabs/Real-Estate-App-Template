"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/query-keys";
import { lotsService } from "@/services/lots.service";

export const useLots = () =>
  useQuery({
    queryKey: queryKeys.lots,
    queryFn: () => lotsService.list(),
  });
