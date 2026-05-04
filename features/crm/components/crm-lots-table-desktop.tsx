import type { Lot } from "../types/api";
import { formatCurrency, getLotArea, getLotStatus, getLotStatusTone } from "../lib/crm-lot-utils";

import { StatusBadge } from "./crm-operations-primitives";
import { CrmLotsTableRowActions } from "./crm-lots-table-row-actions";

type LotsTableDesktopProps = {
  currency: string;
  isBusy: boolean;
  lots: Lot[];
  onHold: (lotId: number) => void;
  onRelease: (lotId: number) => void;
};

export function CrmLotsTableDesktop({
  currency,
  isBusy,
  lots,
  onHold,
  onRelease,
}: LotsTableDesktopProps) {
  return (
    <div className="hidden overflow-x-auto rounded-lg border border-[#E5E1D8] bg-white lg:block">
      <table className="min-w-[780px] w-full border-collapse text-left text-sm">
        <thead className="bg-[#FBFAF7] text-xs font-semibold text-[#343831]">
          <tr>
            <th className="border-b border-[#E5E1D8] px-4 py-3">Codigo de lote</th>
            <th className="border-b border-[#E5E1D8] px-4 py-3">Producto</th>
            <th className="border-b border-[#E5E1D8] px-4 py-3">Area (m2)</th>
            <th className="border-b border-[#E5E1D8] px-4 py-3">Precio</th>
            <th className="border-b border-[#E5E1D8] px-4 py-3">Estado</th>
            <th className="border-b border-[#E5E1D8] px-4 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lots.map((lot) => {
            const status = getLotStatus(lot);

            return (
              <tr key={lot.id} className="border-b border-[#E5E1D8] last:border-b-0">
                <td className="px-4 py-3 font-medium text-[#343831]">
                  PLX-LOT-{String(lot.id).padStart(5, "0")}
                </td>
                <td className="px-4 py-3 text-[#343831]">{lot.name}</td>
                <td className="px-4 py-3 tabular-nums text-[#343831]">{getLotArea(lot)}</td>
                <td className="px-4 py-3 tabular-nums text-[#343831]">
                  {formatCurrency(lot.base_price, currency)}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge tone={getLotStatusTone(status)}>{status}</StatusBadge>
                </td>
                <td className="px-4 py-3">
                  <CrmLotsTableRowActions
                    isBusy={isBusy}
                    lotId={lot.id}
                    onHold={onHold}
                    onRelease={onRelease}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
