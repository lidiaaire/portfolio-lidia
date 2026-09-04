import "./globals.css";

export const metadata = {
  title: "Lidia García Torregrosa | Portfolio",
  description: "Portfolio profesional de Lidia García Torregrosa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
