const stack = [
  "Next.js 16",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "ESLint",
  "React Query",
  "xlsx",
  "jsPDF",
  "jspdf-autotable",
  "react-calendar"
];

const areas = [
  {
    title: "Landing pública",
    path: "/",
    detail: "Espacio marketing para presentar la plataforma y redirigir a cada cliente al área que corresponda."
  },
  {
    title: "Aplicación principal",
    path: "/app",
    detail: "Concentra las vistas operativas del cliente (propiedades, clientes, calendarios, reportes)."
  },
  {
    title: "BFF compartido",
    path: "/api/bff",
    detail: "Provee autenticación, cache y adaptadores entre Laravel y los clientes Next.js."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
            Proyecto inicial listo para crecer
          </span>
          <div className="space-y-3">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Starter inmobiliario con un stack moderno y listo para producción.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Esta base ya incluye configuración para App Router, TypeScript, Tailwind,
              ESLint, React Query y librerías para exportación a Excel y PDF.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stack.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <p className="text-lg font-medium text-white">{item}</p>
            </article>
          ))}
        </div>

        <section className="grid gap-4 pt-8 sm:grid-cols-2">
          {areas.map(({ title, path, detail }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-slate-200 shadow-xl shadow-black/60"
            >
              <p className="text-sm uppercase tracking-wide text-slate-400">{path}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{detail}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
