import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import WhatsAppWidget from "@/app/components/WhatsAppWidget";
import HelpWidget from "@/app/components/HelpWidget";

export const metadata: Metadata = {
  title: "HG Transport Experts | Eenvoud in Internationaal Transport",
  description: "Betrouwbaar fiets- en autotransport in Nederland en België. End-to-end logistieke oplossingen met klantenportal en track & trace.",
  keywords: "transport, fiets transport, auto transport, warehousing, logistiek, nederland, belgie",
  icons: {
    icon: [
      { url: "/images/Favicon.png", sizes: "32x32" },
      { url: "/images/Favicon.png", sizes: "64x64" },
    ],
    shortcut: "/images/Favicon.png",
    apple: [
      { url: "/images/Favicon.png", sizes: "180x180" },
    ],
    other: {
      rel: "apple-touch-icon",
      url: "/images/Favicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <HelpWidget />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
