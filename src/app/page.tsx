import { LinkButton } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { dashboardNavigation } from "@/config/navigation";

const HomePage = () => (
  <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <section className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.3)] backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">real-state-app-template</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Base enterprise para CRM inmobiliario, operacion comercial y landings por proyecto.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          Plantilla reusable para empresas inmobiliarias con dashboard administrativo, modulos de negocio y una capa de integracion lista para conectar BFFs y backends externos.
        </p>
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/dashboard">Abrir dashboard</LinkButton>
          <LinkButton href="/projects/sierra-verde" variant="secondary">
            Ver landing publica
          </LinkButton>
        </div>
      </div>

      <Card className="p-8">
        <CardTitle>Alcance inicial cubierto</CardTitle>
        <CardDescription className="mt-2">
          El template deja una base coherente para crecer por modulos y por tenant sin rehacer rutas, layout ni convenciones.
        </CardDescription>
        <div className="mt-6 grid gap-3">
          <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
            Dashboard administrativo con cards, actividad, pipeline y listas recientes.
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
            Modulos placeholder bien estructurados para empresas, proyectos, clientes, vendedores, negocios, lotes, catalogos y reportes.
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
            React Query, servicios, endpoints, tipos y mocks centralizados.
          </div>
        </div>
      </Card>
    </section>

    <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {dashboardNavigation.map((item) => (
        <Card key={item.href} className="p-6">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-xs font-bold text-white">
            {item.shortLabel}
          </div>
          <CardTitle className="mt-5">{item.title}</CardTitle>
          <CardDescription className="mt-2">{item.description}</CardDescription>
          <LinkButton className="mt-6 w-full" href={item.href} variant="secondary">
            Ir al modulo
          </LinkButton>
        </Card>
      ))}
    </section>
  </main>
);

export default HomePage;
