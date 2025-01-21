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
    default: 'Rohrreinigung | Ihr Experte',
    template: '%s | Rohrreinigung'
  },
  description: 'Professionelle Rohrreinigung in Ihrer Region',
  openGraph: {
    title: 'Rohrreinigung | Ihr Experte',
    description: 'Professionelle Rohrreinigung in Ihrer Region',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
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
