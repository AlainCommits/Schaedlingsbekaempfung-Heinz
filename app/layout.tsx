import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Footer from "@/components/modules/Footer";
import {Navbar} from "@/components/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Schädlingsbekämpfung Heinz | 24/7 Notdienst',
    template: '%s | Schädlingsbekämpfung Heinz'
  },
  description: 'Professionelle Schädlingsbekämpfung ✓ 24/7 Notdienst ✓ 30 Min Reaktionszeit ✓ Festpreisgarantie ➤ Jetzt anfragen!',
  keywords: ['Schädlingsbekämpfung', 'Kammerjäger', 'Schädlingsbekämpfer', 'Notdienst', 'Rattenbekämpfung', 'Bettwanzenbekämpfung'],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://schaedlingsbekaempfung-heinz.de',
    siteName: 'Schädlingsbekämpfung Heinz',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Schädlingsbekämpfung Heinz'
    }]
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* <Header /> */}        
        <Navbar />
        <main className="flex-1 pt-[var(--navbar-height)]">
        <Suspense fallback={<p>Lädt...</p>}>
          {children}
        </Suspense>
        <Footer />
        <Toaster />
      </main>
      </body>
    </html>
  );
}
