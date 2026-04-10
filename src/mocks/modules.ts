export interface ModulePageConfig {
  title: string;
  description: string;
  status: string;
  stats: Array<{
    label: string;
    value: string;
    helper: string;
  }>;
  focusItems: string[];
  nextComponents: string[];
  recentRows: Array<{
    title: string;
    subtitle: string;
    value: string;
  }>;
}

export const modulePageConfigs: Record<string, ModulePageConfig> = {
  companies: {
    title: "Empresas",
    description:
      "Vista base para gestionar cuentas, despliegues por empresa y configuracion operativa del ecosistema inmobiliario.",
    status: "Base lista para directorio, configuracion y tenancy.",
    stats: [
      { label: "Empresas activas", value: "2", helper: "1 en onboarding operativo" },
      { label: "Apps por empresa", value: "1", helper: "Preparado para crecimiento por tenant" },
      { label: "BFFs esperados", value: "2", helper: "Uno por app o contexto empresarial" },
    ],
    focusItems: [
      "Datos maestros de cada empresa y contexto comercial.",
      "Configuracion futura para branding, permisos y modulos habilitados.",
      "Relacion con proyectos, usuarios, pipelines y reportes.",
    ],
    nextComponents: [
      "Tabla paginada con filtros por estado y pais.",
      "Panel de configuracion por tenant.",
      "Flujos de activacion y auditoria de cambios.",
    ],
    recentRows: [
      {
        title: "Terranova Capital",
        subtitle: "3 proyectos activos, 27 negocios vivos",
        value: "Activo",
      },
      {
        title: "Altos del Valle",
        subtitle: "Onboarding comercial y armado de primer proyecto",
        value: "Planning",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    description:
      "Espacio para administrar inventario, avance comercial, fichas maestras y assets publicos por desarrollo.",
    status: "Preparado para conectar inventario, landings y etapas de ejecucion.",
    stats: [
      { label: "Proyectos activos", value: "2", helper: "1 proyecto adicional en planeacion" },
      { label: "Landings vinculadas", value: "3", helper: "2 publicadas y 1 en borrador" },
      { label: "Inventario total", value: "295 lotes", helper: "Consolidado del portafolio base" },
    ],
    focusItems: [
      "Ficha del proyecto, ubicacion, KPIs y performance comercial.",
      "Sincronizacion futura con etapas constructivas y pricing.",
      "Relacion con lotes, negocios, clientes y landings por proyecto.",
    ],
    nextComponents: [
      "Listado con cards y vista tablero por estado.",
      "Detalles de proyecto con tabs por modulo.",
      "Publicacion y versionado de landing pages.",
    ],
    recentRows: [
      {
        title: "Sierra Verde",
        subtitle: "64% del inventario comprometido",
        value: "Activo",
      },
      {
        title: "Reserva del Pinar",
        subtitle: "Preventa en preparacion y assets comerciales en draft",
        value: "Planning",
      },
    ],
  },
  clients: {
    title: "Clientes",
    description:
      "Base para relacion comercial, historial de contacto, origen del lead y trazabilidad de conversiones.",
    status: "Lista para CRM, notas de seguimiento y scoring comercial.",
    stats: [
      { label: "Clientes activos", value: "164", helper: "49 con negociacion abierta" },
      { label: "Nuevos esta semana", value: "12", helper: "Mayor origen: Meta Ads" },
      { label: "Clientes sin contacto", value: "7", helper: "Requieren rutina automatizada" },
    ],
    focusItems: [
      "Perfil completo con informacion de contacto y preferencias.",
      "Historial de notas, llamadas, reuniones y mensajes.",
      "Vista futura de segmentacion, scoring y tareas pendientes.",
    ],
    nextComponents: [
      "Inbox comercial con filtros por estado y origen.",
      "Timeline de seguimiento por cliente.",
      "Asignacion automatica a vendedores y reglas de SLA.",
    ],
    recentRows: [
      {
        title: "Fernanda Lemus",
        subtitle: "Interes en Sierra Verde, origen website",
        value: "Nuevo",
      },
      {
        title: "Maria Jose Cifuentes",
        subtitle: "Seguimiento activo con propuesta en curso",
        value: "Qualified",
      },
    ],
  },
  sellers: {
    title: "Vendedores",
    description:
      "Modulo base para equipos comerciales, performance, metas y carga operativa de seguimiento.",
    status: "Preparado para metas, ranking y comisiones futuras.",
    stats: [
      { label: "Vendedores activos", value: "2", helper: "Ambos con carga saludable" },
      { label: "Conversion promedio", value: "27%", helper: "Sobre oportunidades calificadas" },
      { label: "Cierres del mes", value: "6", helper: "Meta mensual: 10" },
    ],
    focusItems: [
      "Directorio comercial con capacidad, equipo y estado.",
      "Performance por vendedor, proyecto y fuente de lead.",
      "Base para comisiones, cuotas y supervisiones.",
    ],
    nextComponents: [
      "Dashboard individual por asesor.",
      "Vista de cartera viva y tareas del dia.",
      "Resumen de comisiones y recuperacion.",
    ],
    recentRows: [
      {
        title: "Andrea Morales",
        subtitle: "11 negocios activos, 4 cierres este mes",
        value: "31%",
      },
      {
        title: "Luis Alvarado",
        subtitle: "8 negocios activos y 2 reservas confirmadas",
        value: "24%",
      },
    ],
  },
  deals: {
    title: "Negocios",
    description:
      "Pipeline comercial para controlar reservas, cierres, seguimiento de objeciones y forecast de ventas.",
    status: "Base lista para pipeline, forecast y alertas operativas.",
    stats: [
      { label: "Negocios activos", value: "27", helper: "3 reservas en etapa final" },
      { label: "Valor en pipeline", value: "US$ 542K", helper: "Forecast parcial del mes" },
      { label: "En riesgo", value: "6", helper: "Sin actividad reciente o follow-up vencido" },
    ],
    focusItems: [
      "Pipeline por etapa, valor y responsables.",
      "Seguimientos, notas y fechas compromiso.",
      "Base para forecast, alertas y reportes comerciales.",
    ],
    nextComponents: [
      "Vista kanban por etapa.",
      "Forecast por vendedor y por proyecto.",
      "Motor de alertas para negocios estancados.",
    ],
    recentRows: [
      {
        title: "Maria Jose Cifuentes / Sierra Verde",
        subtitle: "Propuesta economica enviada",
        value: "Proposal",
      },
      {
        title: "Carlos Pineda / Mirador del Bosque",
        subtitle: "Reserva confirmada con documentacion pendiente",
        value: "Reservation",
      },
    ],
  },
  lots: {
    title: "Lotes",
    description:
      "Inventario base para controlar disponibilidad, precio, apartados, ventas y condiciones comerciales.",
    status: "Preparado para grid de inventario, filtros y reservas.",
    stats: [
      { label: "Disponibles", value: "63", helper: "Concentrados en 2 proyectos" },
      { label: "Reservados", value: "21", helper: "Revisar aging de reservas" },
      { label: "Vendidos", value: "97", helper: "Inventario historico consolidado" },
    ],
    focusItems: [
      "Inventario con bloque, fase, metraje y precio.",
      "Control de estados y trazabilidad de apartados.",
      "Base para mapas, filtros avanzados y exportacion.",
    ],
    nextComponents: [
      "Grid visual por proyecto y fase.",
      "Mapa interactivo con color por disponibilidad.",
      "Acciones de reserva, bloqueo y liberacion.",
    ],
    recentRows: [
      {
        title: "B-08 / Mirador del Bosque",
        subtitle: "Listo para reserva con plan flexible",
        value: "Disponible",
      },
      {
        title: "A-12 / Sierra Verde",
        subtitle: "Pendiente de documentacion final",
        value: "Reservado",
      },
    ],
  },
  catalogues: {
    title: "Catalogos",
    description:
      "Espacio para tablas maestras y parametros operativos reutilizados por todo el template.",
    status: "Ideal para fuentes de leads, estados, origenes y configuraciones compartidas.",
    stats: [
      { label: "Catalogos sugeridos", value: "8", helper: "Estados, canales, ubicaciones y equipos" },
      { label: "Reutilizacion", value: "Alta", helper: "Transversal a todo el CRM" },
      { label: "Gobierno de datos", value: "Listo", helper: "Con soporte futuro para versionado" },
    ],
    focusItems: [
      "Catalogos centralizados para consistencia de negocio.",
      "Base para parametrizacion por empresa o tenant.",
      "Punto de entrada para admin tools y governance.",
    ],
    nextComponents: [
      "CRUD generico por catalogo.",
      "Versionado y activacion por empresa.",
      "Dependencias entre catalogos y validaciones.",
    ],
    recentRows: [
      {
        title: "Canales de origen",
        subtitle: "Meta Ads, website, referral, walk-in",
        value: "4 items",
      },
      {
        title: "Etapas del pipeline",
        subtitle: "Lead a cierre con estados homologados",
        value: "7 items",
      },
    ],
  },
  reports: {
    title: "Reportes",
    description:
      "Base para analitica comercial, exportacion y vistas ejecutivas sobre el ciclo de venta inmobiliaria.",
    status: "Conectado conceptualmente a React Query, xlsx y jsPDF para evolucionar rapido.",
    stats: [
      { label: "Dashboards previstos", value: "5+", helper: "Comercial, inventario, vendedores y landings" },
      { label: "Exportables", value: "Excel / PDF", helper: "Dependencias listas para integrarse" },
      { label: "Horizonte", value: "Ejecutivo", helper: "Listo para KPIs y cortes por tenant" },
    ],
    focusItems: [
      "KPIs operativos y ejecutivos por modulo.",
      "Exportacion programatica a Excel y PDF.",
      "Base para filtros globales, cortes de fecha y segmentacion.",
    ],
    nextComponents: [
      "Centro de reportes con cards por caso de uso.",
      "Filtros persistentes y exportacion on demand.",
      "Snapshots por proyecto, vendedor y empresa.",
    ],
    recentRows: [
      {
        title: "Pipeline mensual",
        subtitle: "Seguimiento de valor, aging y conversion",
        value: "Prioridad alta",
      },
      {
        title: "Inventario por proyecto",
        subtitle: "Disponibilidad y rotacion de lotes",
        value: "Prioridad media",
      },
    ],
  },
};
