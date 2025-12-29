import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { App } from "antd";

export const metadata: Metadata = {
  title: "QSER Révisions - SwanBones",
  description:
    "Révise les questions du permis, pas d'inscription requise! Pour sauvegarder ton progrès, juste copie le lien!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="swanbones" />
        <meta
          name="description"
          content="Ce site permet de facilement réviser ses questions de vérifications! Gratuit et sécurisé car il fonctionne sans backend."
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <Suspense>
        <body>
          <App>{children}</App>
        </body>
      </Suspense>
    </html>
  );
}
