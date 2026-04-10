import type { DashboardSummary, FollowUp } from "@/types";

import { dealsMock, lotsMock, projectsMock } from "@/mocks/entities";

const followUpsMock: FollowUp[] = [
  {
    id: "fu-1",
    dealId: "de-1",
    title: "Enviar propuesta final y esquema de reserva",
    dueAt: "2026-04-09T14:00:00Z",
    status: "pending",
    ownerName: "Andrea Morales",
  },
  {
    id: "fu-2",
    dealId: "de-2",
    title: "Confirmar visita presencial con notaria",
    dueAt: "2026-04-08T18:30:00Z",
    status: "overdue",
    ownerName: "Luis Alvarado",
  },
  {
    id: "fu-3",
    dealId: "de-3",
    title: "Contactar por WhatsApp y enviar brochure",
    dueAt: "2026-04-10T09:00:00Z",
    status: "pending",
    ownerName: "Andrea Morales",
  },
];

export const dashboardSummaryMock: DashboardSummary = {
  metrics: [
    {
      label: "Ventas del mes",
      value: 128000,
      trend: "+14% vs mes anterior",
    },
    {
      label: "Negocios activos",
      value: 27,
      trend: "6 cierres en riesgo",
    },
    {
      label: "Lotes disponibles",
      value: 63,
      trend: "2 proyectos con inventario bajo",
    },
    {
      label: "Leads calificados",
      value: 46,
      trend: "12 nuevos esta semana",
    },
  ],
  pipeline: [
    { stage: "lead", count: 18, value: 0 },
    { stage: "qualified", count: 12, value: 184000 },
    { stage: "visit-scheduled", count: 7, value: 144500 },
    { stage: "proposal", count: 5, value: 116300 },
    { stage: "reservation", count: 3, value: 98200 },
    { stage: "won", count: 6, value: 128000 },
  ],
  recentActivity: [
    {
      id: "act-1",
      title: "Nueva reserva confirmada",
      description: "Carlos Pineda aparto el lote B-08 en Mirador del Bosque.",
      timestamp: "2026-04-08T12:10:00Z",
      type: "deal",
    },
    {
      id: "act-2",
      title: "Landing page actualizada",
      description: "Sierra Verde publico una nueva seccion de beneficios financieros.",
      timestamp: "2026-04-07T18:40:00Z",
      type: "project",
    },
    {
      id: "act-3",
      title: "Seguimiento reprogramado",
      description: "Andrea Morales reagendo una llamada para Maria Jose Cifuentes.",
      timestamp: "2026-04-07T16:20:00Z",
      type: "client",
    },
  ],
  recentProjects: projectsMock,
  recentDeals: dealsMock,
  recentLots: lotsMock,
  followUps: followUpsMock,
};
