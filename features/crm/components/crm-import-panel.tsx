import type { ChangeEvent, FormEvent } from "react";

import type { ImportValidationResult } from "../types/api";
import { getErrorMessage } from "../lib/crm-errors";

import { ImportDropzone } from "./crm-import-dropzone";
import { CrmImportActions } from "./crm-import-actions";
import { CrmImportHeader } from "./crm-import-header";
import { ImportFooter } from "./crm-import-footer";
import { ImportValidationSummary } from "./crm-import-validation";

type ImportPanelProps = {
  file: File | null;
  importResult: string | null;
  isImporting: boolean;
  isValidating: boolean;
  onDownload: () => void;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onImport: () => void;
  onValidate: (event: FormEvent<HTMLFormElement>) => void;
  validation: ImportValidationResult | null;
  validationError: unknown;
};

export function ImportPanel({
  file,
  importResult,
  isImporting,
  isValidating,
  onDownload,
  onFileChange,
  onImport,
  onValidate,
  validation,
  validationError,
}: ImportPanelProps) {
  return (
    <aside className="rounded-lg border border-[#111111] bg-[#111111] p-5 text-white">
      <CrmImportHeader />

      <form className="mt-5 space-y-3" onSubmit={onValidate}>
        <ImportDropzone file={file} onFileChange={onFileChange} />
        <CrmImportActions
          file={file}
          importable={Boolean(validation?.can_import)}
          isImporting={isImporting}
          isValidating={isValidating}
          onDownload={onDownload}
          onImport={onImport}
        />
      </form>

      {validation && <ImportValidationSummary validation={validation} />}

      {Boolean(validationError) && (
        <p className="mt-4 rounded-lg border border-[#F0C9C8]/30 bg-[#FDEBEC]/10 p-3 text-sm text-[#F8D7D7]">
          {getErrorMessage(validationError)}
        </p>
      )}

      <ImportFooter
        file={file}
        importResult={importResult}
        importable={Boolean(validation?.can_import)}
        isImporting={isImporting}
        onImport={onImport}
      />
    </aside>
  );
}
