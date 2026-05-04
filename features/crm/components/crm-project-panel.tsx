import type { Project } from "../types/api";

import { CrmCatalogsSummary } from "./crm-catalogs-summary";
import { CrmIntegrationStatus } from "./crm-integration-status";
import { CrmProjectSelector } from "./crm-project-selector";

type ProjectPanelProps = {
  catalogsCount: Array<[string, number]>;
  isConnected: boolean;
  lastCheck: string;
  onProjectChange: (projectId: number | undefined) => void;
  projects: Project[];
  selectedProjectId: number | undefined;
};

export function ProjectPanel({
  catalogsCount,
  isConnected,
  lastCheck,
  onProjectChange,
  projects,
  selectedProjectId,
}: ProjectPanelProps) {
  return (
    <aside className="space-y-3">
      <CrmProjectSelector
        onProjectChange={onProjectChange}
        projects={projects}
        selectedProjectId={selectedProjectId}
      />
      <CrmIntegrationStatus isConnected={isConnected} lastCheck={lastCheck} />
      <CrmCatalogsSummary catalogsCount={catalogsCount} />
    </aside>
  );
}
