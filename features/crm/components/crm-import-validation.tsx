import type { ImportValidationResult } from "../types/api";

type ImportValidationProps = {
  validation: ImportValidationResult;
};

export function ImportValidationSummary({ validation }: ImportValidationProps) {
  return (
    <div className="mt-4 rounded-lg border border-white/12 bg-white/[0.06] p-3 text-sm leading-6 text-white/82">
      <p>
        {validation.can_import
          ? `${validation.will_create} filas listas para importar.`
          : `${validation.rows.invalid} filas requieren revision.`}
      </p>
      {validation.errors.slice(0, 3).map((error) => (
        <p key={`${error.row}-${error.message}`} className="mt-1 text-[#F8D7D7]">
          Fila {error.row}: {error.message}
        </p>
      ))}
    </div>
  );
}
