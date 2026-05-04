import type { Project } from "../types/api";

import { FieldLabel } from "./crm-operations-primitives";

type ProjectSelectorProps = {
  onProjectChange: (projectId: number | undefined) => void;
  projects: Project[];
  selectedProjectId: number | undefined;
};

export function CrmProjectSelector({
  onProjectChange,
  projects,
  selectedProjectId,
}: ProjectSelectorProps) {
  return (
    <section className="rounded-lg border border-[#E5E1D8] bg-white p-4">
      <FieldLabel htmlFor="crm-project">Proyecto</FieldLabel>
      <select
        id="crm-project"
        value={selectedProjectId ?? ""}
        onChange={(event) => onProjectChange(event.target.value ? Number(event.target.value) : undefined)}
        className="mt-2 min-h-11 w-full rounded-md border border-[#D8D2C8] bg-white px-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#2C7DA0] focus:ring-2 focus:ring-[#2C7DA0]/15"
      >
        <option value="">Todos los proyectos</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <div className="mt-3 space-y-2">
        {projects.slice(0, 2).map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => onProjectChange(project.id)}
            className={`min-h-11 w-full rounded-md border px-3 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7DA0] ${
              selectedProjectId === project.id
                ? "border-[#111111] bg-[#111111] text-white"
                : "border-[#E5E1D8] bg-[#FBFAF7] text-[#343831] hover:border-[#111111]"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>
    </section>
  );
}
