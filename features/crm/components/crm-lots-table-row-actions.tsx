import { SecondaryButton } from "./crm-operations-primitives";

type LotsTableRowActionsProps = {
  isBusy: boolean;
  lotId: number;
  onHold: (lotId: number) => void;
  onRelease: (lotId: number) => void;
};

export function CrmLotsTableRowActions({
  isBusy,
  lotId,
  onHold,
  onRelease,
}: LotsTableRowActionsProps) {
  return (
    <div className="flex gap-2">
      <SecondaryButton disabled={isBusy} onClick={() => onHold(lotId)}>
        Bloquear
      </SecondaryButton>
      <SecondaryButton disabled={isBusy} onClick={() => onRelease(lotId)}>
        Liberar
      </SecondaryButton>
    </div>
  );
}
