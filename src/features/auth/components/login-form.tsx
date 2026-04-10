"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const LoginForm = () => (
  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
    <Card className="p-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Acceso</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Inicia sesion en tu workspace</h1>
        <p className="text-sm leading-6 text-slate-500">
          Este template deja listo el punto de entrada para autenticacion, permisos y tenancy sin acoplarlo todavia a un proveedor real.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Correo corporativo</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none ring-0 transition focus:border-cyan-400"
            placeholder="admin@empresa.com"
            type="email"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Contrasena</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none ring-0 transition focus:border-cyan-400"
            placeholder="••••••••"
            type="password"
          />
        </label>

        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
          Placeholder funcional para luego conectar SSO, auth provider, middleware y proteccion de rutas.
        </div>

        <Button className="w-full" type="submit">
          Continuar
        </Button>
      </form>
    </Card>

    <Card className="p-8">
      <CardTitle>Roadmap de acceso</CardTitle>
      <CardDescription className="mt-2">
        Este repositorio ya deja el espacio correcto para evolucionar a un flujo enterprise sin rehacer pantallas base.
      </CardDescription>

      <div className="mt-6 space-y-4 text-sm text-slate-600">
        <div className="rounded-2xl bg-slate-50 px-4 py-4">
          1. Integrar proveedor real de autenticacion y sesion por empresa.
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-4">
          2. Agregar proteccion de rutas en App Router y politicas de acceso.
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-4">
          3. Sincronizar permisos, roles y claims desde el BFF o identidad central.
        </div>
      </div>
    </Card>
  </div>
);
