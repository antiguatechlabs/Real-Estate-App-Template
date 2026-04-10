const modules = [
  "BFF data orchestration",
  "React Query cache layers",
  "Tailwind UI primitives",
  "In-app dashboards",
  "Lead & property views",
  "Report exports",
];

export default function ClientAppPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16 text-slate-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="space-y-4">
          <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300">
            Cliente fuerte, UI responsiva
          </span>
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              `/app` agrupa la experiencia principal del cliente
            </h1>
            <p className="text-base leading-7 text-slate-300">
              Esta ruta contiene los módulos de operación diaria (propiedades, clientes, agendas y reportes) sobre la
              capa BFF compartida. Radica bajo el mismo layout global para garantizar consistencia visual.
            </p>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <article
              key={module}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <p className="text-lg font-medium text-white">{module}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
