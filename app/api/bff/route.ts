import { NextResponse } from "next/server";

export async function GET() {
  const payload = {
    name: "BFF placeholder",
    description: "Ruta compartida para mediación entre Laravel y los clientes Next.js",
    lastUpdated: new Date().toISOString(),
  };

  return NextResponse.json(payload);
}
