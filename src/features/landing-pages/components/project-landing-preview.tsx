import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projectsMock } from "@/mocks/entities";
import { formatCurrency } from "@/utils/format";

interface ProjectLandingPreviewProps {
  slug: string;
}

export const ProjectLandingPreview = ({ slug }: ProjectLandingPreviewProps) => {
  const project = projectsMock.find((item) => item.slug === slug) ?? projectsMock[0];

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Proyecto publico</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            {project.landingPage.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            {project.name} centraliza informacion comercial, disponibilidad y conversion para un flujo publico listo para anuncios, pauta y asesoria.
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/login">{project.landingPage.primaryCta}</LinkButton>
            <LinkButton href="/dashboard" variant="secondary">
              Ver panel interno
            </LinkButton>
          </div>
        </div>

        <Card className="p-8">
          <p className="text-sm font-medium text-slate-500">Indicador de landing</p>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{project.landingPage.heroMetric}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 px-4 py-4">
              <p className="text-sm text-slate-500">Ubicacion</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">{project.location}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-4 py-4">
              <p className="text-sm text-slate-500">Rango de precio</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {formatCurrency(project.priceRange.min)} - {formatCurrency(project.priceRange.max)}
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <p className="text-sm text-slate-500">Lotes totales</p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{project.totalLots}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-slate-500">Disponibles</p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{project.availableLots}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-slate-500">Reservados</p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{project.reservedLots}</p>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Arquitectura de landing por proyecto</h2>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Hero comercial con CTA principal y prueba social.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Bloques preparados para beneficios, ubicacion, amenidades y financiamiento.</li>
            <li className="rounded-2xl bg-slate-50 px-4 py-3">Formularios y tracking listos para integrarse con BFF y CRM.</li>
          </ul>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-slate-950">Que sigue aqui</h2>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
            <li className="rounded-2xl border border-dashed border-slate-200 px-4 py-3">CMS o editor de bloques por proyecto.</li>
            <li className="rounded-2xl border border-dashed border-slate-200 px-4 py-3">Integracion de formularios y tracking de campañas.</li>
            <li className="rounded-2xl border border-dashed border-slate-200 px-4 py-3">Versionado, A/B testing y SEO por landing.</li>
          </ul>
        </Card>
      </section>
    </div>
  );
};
