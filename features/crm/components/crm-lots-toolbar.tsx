import { FieldLabel, PrimaryButton, SecondaryButton, TextInput } from "./crm-operations-primitives";

type LotsToolbarProps = {
  currentCount: number;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  search: string;
  searchLabel: string;
  status: string;
  statusOptions: Array<{ code: string; id: string | number; name: string }>;
  totalCount: number;
};

export function CrmLotsToolbar({
  currentCount,
  onSearchChange,
  onStatusChange,
  search,
  searchLabel,
  status,
  statusOptions,
  totalCount,
}: LotsToolbarProps) {
  return (
    <>
      <section className="rounded-lg border border-[#E5E1D8] bg-white p-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_180px_auto] lg:items-end">
          <div className="space-y-2">
            <FieldLabel htmlFor="lot-search">{searchLabel}</FieldLabel>
            <TextInput
              id="lot-search"
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Buscar por codigo, producto, lote o estado..."
              value={search}
            />
          </div>
          <div className="space-y-2">
            <FieldLabel htmlFor="lot-status">Estado</FieldLabel>
            <select
              id="lot-status"
              value={status}
              onChange={(event) => onStatusChange(event.target.value)}
              className="min-h-11 w-full rounded-md border border-[#D8D2C8] bg-white px-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/15"
            >
              <option value="">Todos</option>
              {statusOptions.map((item) => (
                <option key={item.id} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <PrimaryButton type="button">Buscar</PrimaryButton>
        </div>
      </section>

      <div className="flex flex-col gap-3 rounded-lg border border-[#E5E1D8] bg-white px-4 py-3 text-sm text-[#5E625C] sm:flex-row sm:items-center sm:justify-between">
        <p>
          Mostrando 1 a {currentCount} de {totalCount} lotes
        </p>
        <div className="flex items-center gap-2">
          <SecondaryButton type="button">1</SecondaryButton>
          <SecondaryButton type="button">2</SecondaryButton>
          <SecondaryButton type="button">3</SecondaryButton>
        </div>
      </div>
    </>
  );
}
