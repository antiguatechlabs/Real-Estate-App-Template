import type { ChangeEvent } from "react";

function UploadIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 16V5m0 0L8 9m4-4 4 4M6.5 15.5a4 4 0 0 0 .75 8h9.5a4 4 0 0 0 .75-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

type ImportDropzoneProps = {
  file: File | null;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function ImportDropzone({ file, onFileChange }: ImportDropzoneProps) {
  return (
    <label
      htmlFor="lots-import-file"
      className="flex min-h-[164px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/28 bg-white/[0.03] p-4 text-center transition-colors hover:bg-white/[0.06]"
    >
      <span className="text-white/80">
        <UploadIcon />
      </span>
      <span className="mt-3 text-sm font-semibold">
        {file ? file.name : "Arrastra tu archivo Excel aqui"}
      </span>
      <span className="mt-1 text-xs text-white/60">.xlsx, .xls (max. 10 MB)</span>
      <input
        id="lots-import-file"
        accept=".xlsx,.xls"
        name="file"
        type="file"
        onChange={onFileChange}
        className="sr-only"
      />
    </label>
  );
}
