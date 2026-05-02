export type CrmNavLink = {
  label: string;
  href: string;
  key: "configuracion" | "empresa" | "lotes" | "operacion" | "resumen";
};

export type CrmProject = {
  name: string;
  code: string;
  status: string;
  progress: number;
  note: string;
};

export type CrmCatalogItem = {
  label: string;
  value: string;
  tone: string;
};

export type CrmQuickAction = {
  label: string;
  description: string;
  href: string;
};

export type CrmFact = {
  label: string;
  value: string;
  note: string;
};

export type CrmTestimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export const crmNavLinks: CrmNavLink[] = [
  { key: "resumen", label: "Resumen", href: "#resumen" },
  { key: "empresa", label: "Proyectos", href: "#empresa" },
  { key: "lotes", label: "Lotes", href: "#lotes" },
  { key: "operacion", label: "Operación", href: "#operacion" },
  { key: "configuracion", label: "Configuración", href: "#configuracion" },
];

export const crmProjects: CrmProject[] = [
  {
    name: "Mercafarma Norte",
    code: "MF-N",
    status: "Venta activa",
    progress: 84,
    note: "7 lotes listos para cambio de estado.",
  },
  {
    name: "Villas del Lago",
    code: "VL-02",
    status: "Pre-reserva",
    progress: 62,
    note: "Pendientes de aprobación del supervisor.",
  },
  {
    name: "Altos del Valle",
    code: "AV-11",
    status: "Operación estable",
    progress: 91,
    note: "Catálogo y financiamiento sincronizados.",
  },
];

export const crmCatalogs: CrmCatalogItem[] = [
  { label: "Estados de lote", value: "12 activos", tone: "emerald" },
  { label: "Estados de negocio", value: "9 reglas", tone: "cyan" },
  { label: "Estados de pago", value: "6 vigentes", tone: "amber" },
  { label: "Campos dinámicos", value: "18 listos", tone: "violet" },
];

export const crmQuickActions: CrmQuickAction[] = [
  {
    label: "Abrir lotes",
    description: "Filtra por proyecto, estado o búsqueda textual.",
    href: "#lotes",
  },
  {
    label: "Revisar empresa",
    description: "Confirma timezone, moneda y permisos de tenant.",
    href: "#configuracion",
  },
  {
    label: "Ver proyectos",
    description: "Navega entre configuraciones y avances operativos.",
    href: "#proyectos",
  },
  {
    label: "Importar plantilla",
    description: "Prepara la carga masiva de lotes desde Excel.",
    href: "#lotes",
  },
];

export const crmCompanyFacts: CrmFact[] = [
  {
    label: "Moneda",
    value: "GTQ",
    note: "Operación local sin fricción.",
  },
  {
    label: "Zona horaria",
    value: "America/Guatemala",
    note: "Sesiones y eventos alineados.",
  },
  {
    label: "Permisos",
    value: "Acceso completo",
    note: "Tenant listo para trabajo diario.",
  },
];

export const crmDailySignals: CrmFact[] = [
  {
    label: "Sesión",
    value: "Protegida",
    note: "Cookie httpOnly en backend.",
  },
  {
    label: "Tenant",
    value: "Fijo",
    note: "Header resuelto en servidor.",
  },
  {
    label: "Importación",
    value: "Guiada",
    note: "Plantilla y validación primero.",
  },
];

export const crmTestimonials: CrmTestimonial[] = [
  {
    quote:
      "La sesión carga rápido y los filtros dejan de sentirse como una cola manual.",
    author: "Sofía Álvarez",
    role: "Coordinación comercial",
    avatar: "session-flow",
  },
  {
    quote:
      "Poder ver proyectos, catálogos y lotes en el mismo ritmo baja mucho el ruido operativo.",
    author: "Carlos Mejía",
    role: "Administración",
    avatar: "project-stack",
  },
  {
    quote:
      "La capa BFF debe sentirse invisible: estable, predecible y sin pasos extra para el equipo.",
    author: "Laura Pérez",
    role: "Operaciones",
    avatar: "bff-calm",
  },
];

export const crmOperationalWords = [
  "sesión",
  "tenant",
  "proyectos",
  "lotes",
  "catálogos",
  "importación",
  "estado",
  "seguimiento",
  "cierre",
];

export const crmStackCards = [
  {
    title: "Lotes listos para actuar",
    description:
      "Consulta disponibilidad, estado actual y cambio de estado sin salir del panel.",
    image: "lot-monitoring",
    metric: "41 abiertos",
  },
  {
    title: "Automatización de sesión",
    description:
      "La cookie httpOnly mantiene el acceso estable y evita fugas al navegador.",
    image: "session-control",
    metric: "JWT protegido",
  },
  {
    title: "Exportación y carga masiva",
    description:
      "Plantillas, validación e importación trabajan sobre un mismo flujo operativo.",
    image: "import-rhythm",
    metric: "24 filas válidas",
  },
];
