"use client";

import { useState, type FormEvent } from "react";

import type { AppLocale } from "@/i18n/locale";

import {
  fallbackCatalogs,
  fallbackCompany,
  fallbackLotFields,
  fallbackLots,
  fallbackProjects,
} from "../data/crm-api-fallback";
import { useCrmLots, useCrmMutations, useCrmOverview } from "../hooks/use-crm-data";
import { crmCopy } from "../lib/crm-locale";
import { crmBffClient } from "../services/bff-client";
import type { ImportValidationResult } from "../types/api";
import { getErrorMessage } from "../lib/crm-errors";
import { getLotStatus, getLotStatusTone } from "../lib/crm-lot-utils";

import { CompanySummary } from "./crm-company-summary";
import { CreateLotForm } from "./crm-create-lot-form";
import { ImportPanel } from "./crm-import-panel";
import { LotsTable } from "./crm-lots-table";
import { ProjectPanel } from "./crm-project-panel";
import { CrmLotsToolbar } from "./crm-lots-toolbar";

export function CrmOperationsWorkspace({ locale }: { locale: AppLocale }) {
  const copy = crmCopy[locale].operations;
  const overview = useCrmOverview();
  const mutations = useCrmMutations();
  const [projectId, setProjectId] = useState<number | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [importFile, setImportFile] = useState<File | null>(null);
  const [validation, setValidation] = useState<ImportValidationResult | null>(null);
  const [importResult, setImportResult] = useState<string | null>(null);

  const lotsQuery = useCrmLots({ project_id: projectId, search, status });
  const company = overview.company.data?.company ?? fallbackCompany;
  const projects = overview.projects.data?.projects ?? fallbackProjects;
  const catalogs = overview.catalogs.data ?? fallbackCatalogs;
  const lotFields = overview.lotFields.data?.fields ?? fallbackLotFields;
  const lots = lotsQuery.data?.lots ?? fallbackLots;
  const currency = company.settings?.currency_code ?? "GTQ";
  const timezone = company.settings?.timezone ?? "America/Guatemala";
  const selectedProject = projects.find((project) => project.id === projectId) ?? projects[0];
  const connectionError =
    overview.company.error ??
    overview.projects.error ??
    overview.catalogs.error ??
    overview.lotFields.error ??
    lotsQuery.error;
  const isConnected = !connectionError;
  const availableCount = lots.filter((lot) => getLotStatusTone(getLotStatus(lot)) === "success").length;
  const blockedCount = lots.filter((lot) => getLotStatusTone(getLotStatus(lot)) === "warning").length;
  const visibleLots = lots.slice(0, 5);
  const catalogsCount: Array<[string, number]> = [
    ["Productos", lotFields.length],
    ["Lotes", catalogs.lot_statuses.length],
    ["Reservas", catalogs.reservation_statuses.length],
    ["Pagos", catalogs.payment_statuses.length],
  ];

  const createLot = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const basePrice = Number(formData.get("base_price") ?? 0);
    const area = Number(formData.get("area_m2") ?? 0);

    if (!name || !selectedProject) {
      return;
    }

    mutations.createLot.mutate({
      area_m2: Number.isFinite(area) ? area : null,
      base_price: Number.isFinite(basePrice) ? basePrice : null,
      fields: {
        AREA_M2: Number.isFinite(area) ? area : null,
      },
      name,
      project_id: selectedProject.id,
    });
    event.currentTarget.reset();
  };

  const validateImport = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!importFile || !selectedProject) {
      return;
    }

    mutations.validateImport.mutate(
      { file: importFile, projectId: selectedProject.id },
      {
        onSuccess: (result) => {
          setValidation(result);
          setImportResult(null);
        },
      },
    );
  };

  const importLots = () => {
    if (!importFile || !selectedProject || !validation?.can_import) {
      return;
    }

    mutations.importLots.mutate(
      { file: importFile, projectId: selectedProject.id },
      {
        onSuccess: (result) => {
          setImportResult(`${result.created} lotes importados. ${result.failed} fallidos.`);
          setValidation(null);
          setImportFile(null);
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
      className="mx-auto w-full max-w-[1480px] space-y-4 px-4 pb-8 sm:px-5 md:px-8"
    >
      <CompanySummary
        availableCount={availableCount}
        blockedCount={blockedCount}
        companyName={company.name}
        connectionErrorMessage={getErrorMessage(connectionError)}
        currency={currency}
        isConnected={isConnected}
        projectNames={projects.map((project) => project.name)}
        projectsCount={projects.length}
        timezone={timezone}
      />

      <section
        id="lotes"
        className="grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)_320px]"
      >
        <ProjectPanel
          catalogsCount={catalogsCount}
          isConnected={isConnected}
          lastCheck="10/05/2024 10:32"
          onProjectChange={setProjectId}
          projects={projects}
          selectedProjectId={projectId}
        />

        <div className="space-y-4">
          <CrmLotsToolbar
            currentCount={visibleLots.length}
            onSearchChange={setSearch}
            onStatusChange={setStatus}
            search={search}
            searchLabel={copy.searchLot}
            status={status}
            statusOptions={catalogs.lot_statuses}
            totalCount={lots.length}
          />

          <LotsTable
            currency={currency}
            isBusy={mutations.holdLot.isPending || mutations.releaseLot.isPending}
            lots={visibleLots}
            onHold={(lotId) => mutations.holdLot.mutate(lotId)}
            onRelease={(lotId) => mutations.releaseLot.mutate(lotId)}
          />

          <CreateLotForm
            currency={currency}
            isPending={mutations.createLot.isPending}
            onSubmit={createLot}
          />
        </div>

        <ImportPanel
          file={importFile}
          importResult={importResult}
          isImporting={mutations.importLots.isPending}
          isValidating={mutations.validateImport.isPending}
          onDownload={() => void downloadTemplate()}
          onFileChange={(event) => {
            setImportFile(event.target.files?.[0] ?? null);
            setValidation(null);
            setImportResult(null);
          }}
          onImport={importLots}
          onValidate={validateImport}
          validation={validation}
          validationError={mutations.validateImport.error}
        />
      </section>
    </section>
  );
}
