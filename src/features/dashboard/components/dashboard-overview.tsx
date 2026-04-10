"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { useDashboardSummary } from "@/features/dashboard/hooks/use-dashboard-summary";
import { formatCompactNumber, formatCurrency, formatDateTime } from "@/utils/format";

const stageToneMap = {
  lead: "neutral",
  qualified: "brand",
  "visit-scheduled": "warning",
  proposal: "warning",
  reservation: "success",
  won: "success",
  lost: "danger",
} as const;

const lotToneMap = {
  available: "success",
  reserved: "warning",
  sold: "brand",
  blocked: "danger",
} as const;

export const DashboardOverview = () => {
  const { data, isLoading } = useDashboardSummary();

  if (isLoading || !data) {
    return (
      <div className="space-y-6">
        <PageHeader
          eyebrow="Dashboard"
          title="Cargando operacion comercial"
          description="Preparando resumen, pipeline y actividad reciente."
          status="Inicializando"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="h-36 animate-pulse bg-slate-100" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Dashboard"
        title="Control operativo del ecosistema inmobiliario"
        description="Resumen base para direcciones comerciales, seguimiento de pipeline, inventario y actividad del equipo."
        status="Conectado a React Query"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((metric) => (
          <StatCard
            key={metric.label}
            helper={metric.trend}
            label={metric.label}
            value={metric.label === "Ventas del mes" ? formatCurrency(metric.value) : formatCompactNumber(metric.value)}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Estado del pipeline</CardTitle>
              <CardDescription className="mt-2">
                Conteo y valor por etapa para priorizar cierres y detectar cuellos de botella.
              </CardDescription>
            </div>
            <Badge tone="brand">Forecast</Badge>
          </div>

          <div className="mt-6 space-y-3">
            {data.pipeline.map((item) => (
              <div
                key={item.stage}
                className="grid gap-3 rounded-2xl bg-slate-50 px-4 py-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"
              >
                <div>
                  <p className="text-sm font-semibold capitalize text-slate-950">{item.stage.replace("-", " ")}</p>
                  <p className="text-sm text-slate-500">{item.count} oportunidades activas</p>
                </div>
                <Badge tone={stageToneMap[item.stage]}>{item.count}</Badge>
                <p className="text-sm font-semibold text-slate-950">{formatCurrency(item.value)}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Actividad reciente</CardTitle>
          <CardDescription className="mt-2">
            Bitacora rapida de operaciones relevantes que el equipo deberia ver primero.
          </CardDescription>

          <div className="mt-6 space-y-4">
            {data.recentActivity.map((activity) => (
              <div key={activity.id} className="rounded-2xl border border-slate-100 px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-950">{activity.title}</p>
                  <Badge tone="neutral">{activity.type}</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-600">{activity.description}</p>
                <p className="mt-3 text-xs text-slate-400">{formatDateTime(activity.timestamp)}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card className="p-6">
          <CardTitle>Proyectos recientes</CardTitle>
          <CardDescription className="mt-2">Landings, inventario y estado de disponibilidad.</CardDescription>
          <div className="mt-6 space-y-3">
            {data.recentProjects.map((project) => (
              <div key={project.id} className="rounded-2xl bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">{project.name}</p>
                <p className="mt-1 text-sm text-slate-500">{project.location}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-slate-500">{project.availableLots} lotes disponibles</span>
                  <Badge tone={project.status === "active" ? "success" : "warning"}>{project.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Negocios recientes</CardTitle>
          <CardDescription className="mt-2">Oportunidades con mas movimiento comercial.</CardDescription>
          <div className="mt-6 space-y-3">
            {data.recentDeals.map((deal) => (
              <div key={deal.id} className="rounded-2xl bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">{deal.clientName}</p>
                <p className="mt-1 text-sm text-slate-500">{deal.projectName}</p>
                <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                  <Badge tone={stageToneMap[deal.stage]}>{deal.stage}</Badge>
                  <span className="font-semibold text-slate-950">{deal.amount ? formatCurrency(deal.amount) : "Por definir"}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle>Lotes y seguimientos</CardTitle>
          <CardDescription className="mt-2">Inventario sensible y tareas con impacto en cierres.</CardDescription>
          <div className="mt-6 space-y-3">
            {data.recentLots.map((lot) => (
              <div key={lot.id} className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-950">{lot.code}</p>
                  <Badge tone={lotToneMap[lot.status]}>{lot.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-500">{lot.areaM2} m2 · {formatCurrency(lot.listPrice)}</p>
              </div>
            ))}
            {data.followUps.map((followUp) => (
              <div key={followUp.id} className="rounded-2xl border border-dashed border-slate-200 px-4 py-4">
                <p className="text-sm font-semibold text-slate-950">{followUp.title}</p>
                <p className="mt-1 text-sm text-slate-500">{followUp.ownerName}</p>
                <p className="mt-2 text-xs text-slate-400">{formatDateTime(followUp.dueAt)}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};
