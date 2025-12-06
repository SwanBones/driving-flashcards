import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
