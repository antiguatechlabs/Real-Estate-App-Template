import type { FormEvent } from "react";

import { FieldLabel, PrimaryButton, TextInput } from "./crm-operations-primitives";

type CreateLotFormProps = {
  currency: string;
  isPending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function CreateLotForm({ currency, isPending, onSubmit }: CreateLotFormProps) {
  return (
    <form className="rounded-lg border border-[#E5E1D8] bg-white p-4" onSubmit={onSubmit}>
      <h3 className="text-base font-semibold text-[#111111]">Crear lote</h3>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1.15fr_0.8fr_0.9fr_auto] lg:items-end">
        <div className="space-y-2">
          <FieldLabel htmlFor="lot-name">Producto</FieldLabel>
          <TextInput id="lot-name" name="name" placeholder="Parqueo Logistico 125" />
        </div>
        <div className="space-y-2">
          <FieldLabel htmlFor="lot-area">Area (m2)</FieldLabel>
          <TextInput id="lot-area" name="area_m2" placeholder="250.00" type="number" />
        </div>
        <div className="space-y-2">
          <FieldLabel htmlFor="lot-price">Precio ({currency})</FieldLabel>
          <TextInput id="lot-price" name="base_price" placeholder="125000" type="number" />
        </div>
        <PrimaryButton disabled={isPending} type="submit">
          {isPending ? "Creando..." : "Crear lote"}
        </PrimaryButton>
      </div>
    </form>
  );
}
