export interface NavigationItem {
  title: string;
  href: string;
  shortLabel: string;
  description: string;
}

export const dashboardNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    shortLabel: "DB",
    description: "Resumen ejecutivo y estado comercial",
  },
  {
    title: "Empresas",
    href: "/companies",
    shortLabel: "EM",
    description: "Cuentas, contexto tenant y configuracion",
  },
  {
    title: "Proyectos",
    href: "/projects",
    shortLabel: "PR",
    description: "Control de desarrollos, landings e inventario",
  },
  {
    title: "Clientes",
    href: "/clients",
    shortLabel: "CL",
    description: "CRM, historial y seguimiento comercial",
  },
  {
    title: "Vendedores",
    href: "/sellers",
    shortLabel: "VD",
    description: "Equipo comercial y productividad",
  },
  {
    title: "Negocios",
    href: "/deals",
    shortLabel: "NG",
    description: "Pipeline, forecast y reservas",
  },
  {
    title: "Lotes",
    href: "/lots",
    shortLabel: "LT",
    description: "Inventario, disponibilidad y pricing",
  },
  {
    title: "Catálogos",
    href: "/catalogues",
    shortLabel: "CT",
    description: "Parametros maestros y catalogos compartidos",
  },
  {
    title: "Reportes",
    href: "/reports",
    shortLabel: "RP",
    description: "Analitica, exportables y vistas ejecutivas",
  },
];
