import type { Lot } from "../types/api";

import { CrmLotsTableDesktop } from "./crm-lots-table-desktop";
import { CrmLotsTableMobile } from "./crm-lots-table-mobile";

type LotsTableProps = {
  currency: string;
  isBusy: boolean;
  lots: Lot[];
  onHold: (lotId: number) => void;
  onRelease: (lotId: number) => void;
};

export function LotsTable({
  currency,
  isBusy,
  lots,
  onHold,
  onRelease,
}: LotsTableProps) {
  if (lots.length === 0) {
    return (
      <div className="rounded-lg border border-[#E5E1D8] bg-white p-6 text-sm text-[#5E625C]">
        No hay lotes para los filtros seleccionados.
      </div>
    );
  }

  return (
    <>
      <CrmLotsTableDesktop
        currency={currency}
        isBusy={isBusy}
        lots={lots}
        onHold={onHold}
        onRelease={onRelease}
      />
      <CrmLotsTableMobile
        currency={currency}
        isBusy={isBusy}
        lots={lots}
        onHold={onHold}
        onRelease={onRelease}
      />
    </>
  );
}
