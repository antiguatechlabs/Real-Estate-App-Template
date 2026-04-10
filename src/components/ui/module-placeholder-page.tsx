import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import type { ModulePageConfig } from "@/mocks/modules";

interface ModulePlaceholderPageProps {
  config: ModulePageConfig;
}

export const ModulePlaceholderPage = ({ config }: ModulePlaceholderPageProps) => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="Modulo"
      title={config.title}
      description={config.description}
      status={config.status}
    />

    <section className="grid gap-4 md:grid-cols-3">
      {config.stats.map((stat) => (
        <StatCard key={stat.label} helper={stat.helper} label={stat.label} value={stat.value} />
      ))}
    </section>

    <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <Card className="p-6">
        <CardTitle>Que vive aqui</CardTitle>
        <CardDescription className="mt-2">
          Esta pagina ya funciona como contenedor consistente para evolucionar el modulo sin rehacer el layout.
        </CardDescription>
        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          {config.focusItems.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <CardTitle>Siguientes componentes</CardTitle>
        <CardDescription className="mt-2">
          Lista base de entregables naturales para el siguiente sprint del modulo.
        </CardDescription>
        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          {config.nextComponents.map((item) => (
            <li key={item} className="rounded-2xl border border-dashed border-slate-200 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </section>

    <section>
      <Card className="overflow-hidden p-2">
        <div className="grid gap-2">
          {config.recentRows.map((row) => (
            <div
              key={row.title}
              className="grid gap-2 rounded-[1.3rem] bg-slate-50 px-4 py-4 sm:grid-cols-[1.4fr_1fr_auto] sm:items-center"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{row.title}</p>
                <p className="text-sm text-slate-500">{row.subtitle}</p>
              </div>
              <div className="text-sm text-slate-500">Dato de referencia inicial</div>
              <div className="text-sm font-semibold text-slate-900">{row.value}</div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  </div>
);
