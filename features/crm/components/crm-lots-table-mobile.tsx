import type { Lot } from "../types/api";
import { formatCurrency, getLotArea, getLotStatus, getLotStatusTone } from "../lib/crm-lot-utils";

import { SecondaryButton, StatusBadge } from "./crm-operations-primitives";

type LotsTableMobileProps = {
  currency: string;
  isBusy: boolean;
  lots: Lot[];
  onHold: (lotId: number) => void;
  onRelease: (lotId: number) => void;
};

export function CrmLotsTableMobile({
  currency,
  isBusy,
  lots,
  onHold,
  onRelease,
}: LotsTableMobileProps) {
  return (
    <div className="grid gap-3 lg:hidden">
      {lots.map((lot) => {
        const status = getLotStatus(lot);

        return (
          <article key={lot.id} className="rounded-lg border border-[#E5E1D8] bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#74776F]">
                  PLX-LOT-{String(lot.id).padStart(5, "0")}
                </p>
                <h3 className="mt-1 break-words text-lg font-semibold text-[#111111]">
                  {lot.name}
                </h3>
              </div>
              <StatusBadge tone={getLotStatusTone(status)}>{status}</StatusBadge>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-[#74776F]">Area</p>
                <p className="font-semibold text-[#111111]">{getLotArea(lot)} m2</p>
              </div>
              <div>
                <p className="text-xs text-[#74776F]">Precio</p>
                <p className="font-semibold text-[#111111]">
                  {formatCurrency(lot.base_price, currency)}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <SecondaryButton disabled={isBusy} onClick={() => onHold(lot.id)}>
                Bloquear
              </SecondaryButton>
              <SecondaryButton disabled={isBusy} onClick={() => onRelease(lot.id)}>
                Liberar
              </SecondaryButton>
            </div>
          </article>
        );
      })}
    </div>
  );
}
