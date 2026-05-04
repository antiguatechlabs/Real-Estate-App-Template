import { StatusBadge } from "./crm-operations-primitives";

type ImportFooterProps = {
  file: File | null;
  importResult: string | null;
  importable: boolean;
  isImporting: boolean;
  onImport: () => void;
};

export function ImportFooter({
  file,
  importResult,
  importable,
  isImporting,
  onImport,
}: ImportFooterProps) {
  return (
    <div className="mt-5 border-t border-white/12 pt-5">
      <p className="text-xs text-white/58">Ultima importacion</p>
      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold">10/05/2024 10:32</p>
        <StatusBadge tone="success">Completada</StatusBadge>
      </div>
      {importable && (
        <button
          type="button"
          disabled={!file || isImporting}
          onClick={onImport}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white bg-white px-4 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#F7F6F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-45"
        >
          {isImporting ? "Importando..." : "Importar lotes"}
        </button>
      )}
      {importResult && <p className="mt-3 text-sm leading-6 text-white/78">{importResult}</p>}
    </div>
  );
}
