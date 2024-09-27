import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Inicio",
  description: "Pagina principal para herramienta de uso empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
