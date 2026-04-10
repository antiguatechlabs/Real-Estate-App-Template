"use client";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/lib/query-keys";
import { dealsService } from "@/services/deals.service";

export const useDeals = () =>
  useQuery({
    queryKey: queryKeys.deals,
    queryFn: () => dealsService.list(),
  });
