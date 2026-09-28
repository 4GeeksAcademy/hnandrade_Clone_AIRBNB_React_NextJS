import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Clon de la interfaz de Airbnb con Next.js",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
