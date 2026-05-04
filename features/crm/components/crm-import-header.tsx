import { Tooltip } from "@/components/ui/tooltip";

export function CrmImportHeader() {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold tracking-tight">Importacion</h2>
          <Tooltip content="Primero valida la plantilla. Si no hay errores, ejecuta la importacion final." />
        </div>
        <p className="mt-2 text-sm leading-6 text-white/72">Plantilla, validacion y carga.</p>
      </div>
    </div>
  );
}
