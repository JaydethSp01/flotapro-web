export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/conductor", label: "Conductores" }, { href: "/envio", label: "Envíos" }, { href: "/mapa", label: "Mapa" }, { href: "/ruta", label: "Rutas" }, { href: "/tracking", label: "Tracking" }, { href: "/veh-culo", label: "Vehículos" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Flota Pro", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Flota Pro">{children}</ProtectedShell>
      </body>
    </html>
  );
}
