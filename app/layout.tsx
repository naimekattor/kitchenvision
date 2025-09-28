import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/layout-content";
import { dir } from "i18next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title:
    "CONTE Küchen | Hochwertige Küchen Mühldorf · München · Erding · Rosenheim",
  description:
    "Ihr Küchenfachgeschäft für exklusive Küchen in Mühldorf, München, Erding, Rosenheim & Ebersberg. Eigene Werkstatt – Manufakturqualität inklusive Montage.",
  icons: { apple: "/apple-touch-icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" dir={dir("de")}>
      <body className={`${montserrat.variable} antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
