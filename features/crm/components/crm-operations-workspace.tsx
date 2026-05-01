"use client";

import { useState, type FormEvent } from "react";

import { Tooltip } from "@/components/ui/tooltip";

import {
  fallbackCatalogs,
  fallbackCompany,
  fallbackLotFields,
  fallbackLots,
  fallbackProjects,
} from "../data/crm-api-fallback";
import { crmBffClient, CrmBffError } from "../services/bff-client";
import { useCrmLots, useCrmMutations, useCrmOverview } from "../hooks/use-crm-data";
import type { Lot, Project } from "../types/api";

function formatCurrency(value: number | null | undefined, currency = "GTQ") {
  if (value == null) {
    return "Sin precio";
  }

  return new Intl.NumberFormat("es-GT", {
    currency,
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

function getErrorMessage(error: unknown) {
  if (error instanceof CrmBffError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Sin conexión al BFF.";
}

function SyncState({ error, isLoading }: { error: unknown; isLoading: boolean }) {
  if (isLoading) {
    return <span className="text-[#74776F]">Sincronizando</span>;
  }

  if (error) {
    return (
      <span className="inline-flex items-center gap-2 text-[#9F2F2D]">
        Fallback local
        <Tooltip content={getErrorMessage(error)} />
      </span>
    );
  }

  return <span className="text-[#346538]">API conectada</span>;
}

function Metric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="flex items-start justify-between gap-4 border-t border-[#E5E1D8] py-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#74776F]">
          {label}
        </p>
        <p className="mt-1 text-2xl font-semibold tracking-tight text-[#111111]">
          {value}
        </p>
      </div>
      <Tooltip content={note} />
    </article>
  );
}

function LotCard({
  currency,
  lot,
  onHold,
  onRelease,
}: {
  currency: string;
  lot: Lot;
  onHold: (lotId: number) => void;
  onRelease: (lotId: number) => void;
}) {
  const status = String(lot.fields.STATUS ?? lot.fields.status ?? "AVAILABLE");

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E5E1D8] bg-[#FBFAF7]">
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="text-xl font-semibold tracking-tight text-[#111111]">
            {lot.name}
          </p>
          <p className="mt-1 text-sm text-[#5E625C]">
            {formatCurrency(lot.base_price, currency)}
          </p>
        </div>
        <span className="rounded-md border border-[#D8D2C8] bg-white px-2.5 py-1 text-xs font-semibold text-[#343831]">
          {status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-[#E5E1D8]">
        {Object.entries(lot.fields).slice(0, 4).map(([key, value]) => (
          <div key={key} className="bg-white p-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#74776F]">
              {key}
            </p>
            <p className="mt-1 text-sm font-semibold text-[#111111]">{String(value)}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 p-4">
        <button
          type="button"
          onClick={() => onHold(lot.id)}
          className="flex-1 rounded-md border border-[#D8D2C8] bg-white px-3 py-2 text-sm font-semibold text-[#111111] transition-colors hover:border-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
        >
          Bloquear
        </button>
        <button
          type="button"
          onClick={() => onRelease(lot.id)}
          className="flex-1 rounded-md border border-[#111111] bg-[#111111] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#333333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0]"
        >
          Liberar
        </button>
      </div>
    </article>
  );
}

export function CrmOperationsWorkspace() {
  const overview = useCrmOverview();
  const mutations = useCrmMutations();
  const [projectId, setProjectId] = useState<number | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [importResult, setImportResult] = useState<string | null>(null);

  const lotsQuery = useCrmLots({ project_id: projectId, search });
  const company = overview.company.data?.company ?? fallbackCompany;
  const projects = overview.projects.data?.projects ?? fallbackProjects;
  const catalogs = overview.catalogs.data ?? fallbackCatalogs;
  const lotFields = overview.lotFields.data?.fields ?? fallbackLotFields;
  const lots = lotsQuery.data?.lots ?? fallbackLots;
  const currency = company.settings?.currency_code ?? "GTQ";
  const selectedProject = projects.find((project) => project.id === projectId) ?? projects[0];
  const hasConnectionError =
    overview.company.error ??
    overview.projects.error ??
    overview.catalogs.error ??
    overview.lotFields.error ??
    lotsQuery.error;

  const createLot = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const basePrice = Number(formData.get("base_price") ?? 0);

    if (!name || !selectedProject) {
      return;
    }

    mutations.createLot.mutate({
      base_price: Number.isFinite(basePrice) ? basePrice : null,
      fields: {
        AREA_M2: Number(formData.get("area_m2") ?? 0),
      },
      name,
      project_id: selectedProject.id,
    });
    event.currentTarget.reset();
  };

  const importLots = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get("file");

    if (!(file instanceof File) || !selectedProject) {
      return;
    }

    mutations.validateImport.mutate(
      { file, projectId: selectedProject.id },
      {
        onSuccess: (result) => {
          setImportResult(
            result.can_import
              ? `${result.will_create} filas listas para importar.`
              : `${result.rows.invalid} filas requieren revisión.`,
          );
        },
      },
    );
  };

  const downloadTemplate = async () => {
    const blob = await crmBffClient.downloadLotsTemplate();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "lots_template.xlsx";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="operacion"
      className="mx-auto w-full max-w-7xl py-24 md:py-36"
    >
      <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h2 className="max-w-6xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#111111]">
            CRM conectado para operar lotes, catálogos e importación.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#5E625C] md:text-base">
            Si la API no está configurada, la pantalla mantiene fallback local y muestra
            el error exacto en tooltip.
          </p>
        </div>
        <div className="rounded-xl border border-[#E5E1D8] bg-[#FBFAF7] px-4 py-3 text-sm font-semibold">
          <SyncState error={hasConnectionError} isLoading={overview.company.isLoading} />
        </div>
      </div>

      <div className="grid grid-flow-dense gap-px overflow-hidden rounded-2xl border border-[#E5E1D8] bg-[#E5E1D8] md:grid-cols-12">
        <article className="bg-[#FBFAF7] p-5 md:col-span-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#74776F]">Empresa</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#111111]">
                {company.name}
              </h3>
            </div>
            <Tooltip content="El tenant se resuelve en el BFF con X-Tenant-Code; el cliente no envía company_id editable." />
          </div>
          <div className="mt-8 grid gap-0 md:grid-cols-3 md:gap-5">
            <Metric
              label="Moneda"
              note="Se usa para lotes, reservas y financiamiento."
              value={currency}
            />
            <Metric
              label="Zona"
              note="Controla fechas de sesión, holds e importación."
              value={company.settings?.timezone ?? "N/D"}
            />
            <Metric
              label="Idioma"
              note="Base para mensajes y catálogos localizados."
              value={company.settings?.default_language ?? "es"}
            />
          </div>
        </article>

        <article className="bg-white p-5 md:col-span-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#74776F]">Proyectos</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#111111]">
                {projects.length} activos
              </h3>
            </div>
            <Tooltip content="Selecciona un proyecto para filtrar lotes e importación." />
          </div>
          <div className="mt-6 grid gap-2">
            {projects.map((project: Project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setProjectId(project.id)}
                className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] ${
                  selectedProject?.id === project.id
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-[#E5E1D8] bg-[#FBFAF7] text-[#111111] hover:border-[#111111]"
                }`}
              >
                <span>
                  <span className="block text-sm font-semibold">{project.name}</span>
                  <span className="block text-xs opacity-70">{project.code}</span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                  {project.status}
                </span>
              </button>
            ))}
          </div>
        </article>

        <article className="bg-white p-5 md:col-span-4 md:p-7">
          <p className="text-sm font-medium text-[#74776F]">Catálogos</p>
          <div className="mt-5 space-y-3">
            {[
              ["Lotes", catalogs.lot_statuses.length],
              ["Negocios", catalogs.deal_statuses.length],
              ["Reservas", catalogs.reservation_statuses.length],
              ["Pagos", catalogs.payment_statuses.length],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-t border-[#E5E1D8] pt-3"
              >
                <span className="text-sm text-[#5E625C]">{label}</span>
                <span className="text-lg font-semibold text-[#111111]">{value}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="bg-[#FBFAF7] p-5 md:col-span-4 md:p-7">
          <p className="text-sm font-medium text-[#74776F]">Campos de lote</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {lotFields.map((field) => (
              <span
                key={field.code}
                className="rounded-md border border-[#E5E1D8] bg-white px-3 py-2 text-sm font-medium text-[#111111]"
              >
                {field.label}
              </span>
            ))}
          </div>
        </article>

        <article className="bg-white p-5 md:col-span-4 md:p-7">
          <p className="text-sm font-medium text-[#74776F]">Crear lote</p>
          <form className="mt-5 space-y-3" onSubmit={createLot}>
            <input
              name="name"
              placeholder="Nombre del lote"
              className="w-full rounded-lg border border-[#D8D2C8] bg-[#FBFAF7] px-3 py-3 text-sm outline-none focus:border-[#2C7DA0]"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                name="base_price"
                placeholder="Precio"
                type="number"
                className="w-full rounded-lg border border-[#D8D2C8] bg-[#FBFAF7] px-3 py-3 text-sm outline-none focus:border-[#2C7DA0]"
              />
              <input
                name="area_m2"
                placeholder="Area m2"
                type="number"
                className="w-full rounded-lg border border-[#D8D2C8] bg-[#FBFAF7] px-3 py-3 text-sm outline-none focus:border-[#2C7DA0]"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md border border-[#111111] bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#333333]"
            >
              Crear lote
            </button>
          </form>
        </article>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar lote"
              className="min-h-11 flex-1 rounded-lg border border-[#D8D2C8] bg-white px-4 text-sm outline-none focus:border-[#2C7DA0]"
            />
            <button
              type="button"
              onClick={() => setProjectId(undefined)}
              className="rounded-md border border-[#D8D2C8] bg-[#FBFAF7] px-4 py-2 text-sm font-semibold text-[#111111] hover:border-[#111111]"
            >
              Ver todos
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {lots.map((lot) => (
              <LotCard
                key={lot.id}
                currency={currency}
                lot={lot}
                onHold={(lotId) => mutations.holdLot.mutate(lotId)}
                onRelease={(lotId) => mutations.releaseLot.mutate(lotId)}
              />
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-[#E5E1D8] bg-[#111111] p-5 text-white">
          <p className="text-sm font-medium text-white/60">Importación</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            Plantilla, validación y carga.
          </h3>
          <form className="mt-6 space-y-3" onSubmit={importLots}>
            <input
              accept=".xlsx"
              name="file"
              type="file"
              className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-3 text-sm text-white file:mr-3 file:rounded-md file:border-0 file:bg-white file:px-3 file:py-2 file:text-sm file:font-semibold file:text-[#111111]"
            />
            <button
              type="submit"
              className="w-full rounded-md border border-white bg-white px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#F7F6F2]"
            >
              Validar archivo
            </button>
            <button
              type="button"
              onClick={() => void downloadTemplate()}
              className="w-full rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Descargar plantilla
            </button>
          </form>
          {(importResult || mutations.validateImport.error) && (
            <p className="mt-4 rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-white/78">
              {importResult ?? getErrorMessage(mutations.validateImport.error)}
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
