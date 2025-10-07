import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/layout-content";
import { notFound } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "CONTE | Kuchenstudio für Mühldorf & Region Munchen",
  description:
    "Ihr Küchenfachgeschäft für exklusive Küchen in Mühldorf, München, Erding, Rosenheim & Ebersberg. Eigene Werkstatt – Manufakturqualität inklusive Montage.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
