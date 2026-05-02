import { defaultLocale, isSupportedLocale, type AppLocale } from "@/i18n/locale";

export const CRM_LOCALE_COOKIE = "crm_locale";

export function resolveCrmLocale(value: string | undefined): AppLocale {
  return value && isSupportedLocale(value) ? value : defaultLocale;
}

export const crmCopy = {
  en: {
    actions: {
      adjust: "Settings",
      allLots: "View all",
      backTop: "Back to top",
      block: "Hold",
      createLot: "Create lot",
      downloadTemplate: "Download template",
      enterPanel: "Open panel",
      lots: "Lots",
      release: "Release",
      validateFile: "Validate file",
      viewFlow: "View lot flow",
      viewPanel: "View panel",
    },
    admin: {
      description:
        "Base prepared for permissions, internal flows and tenant governance without cluttering the main surface.",
      eyebrow: "Administration",
      primary: "Go to settings",
      secondary: "Back to panel",
      title: "CRM governance",
    },
    config: {
      description:
        "Ready for company settings, catalogs and rules that define how the team operates in production.",
      eyebrow: "Settings",
      primary: "Go to admin",
      secondary: "Back to panel",
      title: "Tenant settings",
    },
    locale: {
      label: "CRM language",
    },
    nav: {
      config: "Config",
      controlHub: "Control Hub",
      links: {
        configuracion: "Settings",
        empresa: "Company",
        lotes: "Lots",
        operacion: "Operations",
        resumen: "Summary",
      },
    },
    operations: {
      activeProjects: "active",
      apiConnected: "API connected",
      catalogs: "Catalogs",
      company: "Company",
      createLot: "Create lot",
      fallbackLocal: "Local fallback",
      fields: "Lot fields",
      import: "Import",
      importReady: (count: number) => `${count} rows ready to import.`,
      importReview: (count: number) => `${count} rows need review.`,
      importTitle: "Template, validation and upload.",
      language: "Language",
      lotName: "Lot name",
      price: "Price",
      projects: "Projects",
      searchLot: "Search lot",
      syncing: "Syncing",
      title: "CRM connected for lots, catalogs and import.",
      subtitle:
        "If the API is not configured, this screen keeps a local fallback and shows the exact error in a tooltip.",
      currency: "Currency",
      timezone: "Timezone",
    },
    shell: {
      action: "The next step is clear.",
      actions: "Actions",
      backLanding: "Landing",
      catalogHint: "Catalogs and signals stay compact; details remain contextual.",
      catalogs: "Catalogs",
      companyCurrent: "Current company",
      connectedCta:
        "Public landing separated, clear CRM and short help text to avoid visual noise.",
      connectedTitle: "The UI is ready to connect real data.",
      dailySignals: "Daily signals",
      desireText:
        "The session stays secure, projects read quickly and every status change keeps the operational flow free of visual noise.",
      desireTitle: "Less explanation. More traceability.",
      heroBody:
        "Company, projects and critical actions in one clear view. Detail lives in contextual help, not long blocks.",
      heroTitle: "Operate lots with less screen and more focus.",
      operationActive: "Active operation",
      projectTooltip:
        "Each project keeps status, progress and access to the lots flow.",
      projects: "Projects",
      sectionBody: "Only what is needed to decide. Explanation appears on demand.",
      sectionTitle: "Daily operations fit in three blocks.",
      sessionProtected: "Protected session",
      tenantStable: "Stable tenant through BFF.",
      settingsVisible: "Settings visible when they matter.",
    },
  },
  es: {
    actions: {
      adjust: "Ajustes",
      allLots: "Ver todos",
      backTop: "Volver arriba",
      block: "Bloquear",
      createLot: "Crear lote",
      downloadTemplate: "Descargar plantilla",
      enterPanel: "Entrar al panel",
      lots: "Lotes",
      release: "Liberar",
      validateFile: "Validar archivo",
      viewFlow: "Ver flujo de lotes",
      viewPanel: "Ver panel",
    },
    admin: {
      description:
        "Base preparada para permisos, flujos internos y control de la experiencia operativa sin ensuciar la pantalla principal.",
      eyebrow: "Administración",
      primary: "Ir a configuración",
      secondary: "Volver al panel",
      title: "Gobierno del CRM",
    },
    config: {
      description:
        "Espacio listo para company settings, catálogos y reglas que definen cómo opera el equipo en producción.",
      eyebrow: "Configuración",
      primary: "Ir a admin",
      secondary: "Volver al panel",
      title: "Ajustes del tenant",
    },
    locale: {
      label: "Idioma del CRM",
    },
    nav: {
      config: "Config",
      controlHub: "Control Hub",
      links: {
        configuracion: "Configuración",
        empresa: "Empresa",
        lotes: "Lotes",
        operacion: "Operación",
        resumen: "Resumen",
      },
    },
    operations: {
      activeProjects: "activos",
      apiConnected: "API conectada",
      catalogs: "Catálogos",
      company: "Empresa",
      createLot: "Crear lote",
      fallbackLocal: "Fallback local",
      fields: "Campos de lote",
      import: "Importación",
      importReady: (count: number) => `${count} filas listas para importar.`,
      importReview: (count: number) => `${count} filas requieren revisión.`,
      importTitle: "Plantilla, validación y carga.",
      language: "Idioma",
      lotName: "Nombre del lote",
      price: "Precio",
      projects: "Proyectos",
      searchLot: "Buscar lote",
      syncing: "Sincronizando",
      title: "CRM conectado para operar lotes, catálogos e importación.",
      subtitle:
        "Si la API no está configurada, la pantalla mantiene fallback local y muestra el error exacto en tooltip.",
      currency: "Moneda",
      timezone: "Zona",
    },
    shell: {
      action: "Siguiente paso claro.",
      actions: "Acciones",
      backLanding: "Landing",
      catalogHint:
        "Catálogos y señales se muestran compactos; los matices quedan en ayuda contextual.",
      catalogs: "Catálogos",
      companyCurrent: "Empresa actual",
      connectedCta:
        "Landing separada, CRM claro y ayudas breves para no saturar la vista.",
      connectedTitle: "La UI ya está lista para conectar datos reales.",
      dailySignals: "Señales diarias",
      desireText:
        "La sesión vive segura, los proyectos se leen rápido y cada cambio de estado mantiene el flujo operativo sin ruido visual.",
      desireTitle: "Menos explicación. Más trazabilidad.",
      heroBody:
        "Empresa, proyectos y acciones críticas en una vista clara. El detalle vive en ayudas contextuales, no en bloques largos.",
      heroTitle: "Opera lotes con menos pantalla y más foco.",
      operationActive: "Operación activa",
      projectTooltip:
        "Cada proyecto conserva estado, progreso y acceso al flujo de lotes.",
      projects: "Proyectos",
      sectionBody: "Solo lo visible para decidir. Lo explicativo queda bajo demanda.",
      sectionTitle: "La operación diaria cabe en tres bloques.",
      sessionProtected: "Sesión protegida",
      tenantStable: "Tenant estable vía BFF.",
      settingsVisible: "Configuración visible cuando importa.",
    },
  },
} as const;

export type CrmCopy = (typeof crmCopy)[AppLocale];
