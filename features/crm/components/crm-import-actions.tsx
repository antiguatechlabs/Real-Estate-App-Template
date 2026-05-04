type ImportActionsProps = {
  isImporting: boolean;
  isValidating: boolean;
  onDownload: () => void;
  onImport: () => void;
  importable: boolean;
  file: File | null;
};

export function CrmImportActions({
  file,
  importable,
  isImporting,
  isValidating,
  onDownload,
  onImport,
}: ImportActionsProps) {
  return (
    <>
      <button
        type="submit"
        disabled={!file || isValidating}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/24 bg-white/[0.04] px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-45"
      >
        {isValidating ? "Validando..." : "Validar archivo"}
      </button>
      <button
        type="button"
        onClick={onDownload}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/24 bg-transparent px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Descargar plantilla
      </button>
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
    </>
  );
}
