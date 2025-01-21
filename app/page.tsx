// app/page.tsx (Root Page)
import AboutSection from "@/components/modules/AboutSection"
import ContactSection from "@/components/modules/ContactSection"
import WhyUsSection from "@/components/modules/WhyUsSection"
import ReferenceSection from "@/components/modules/ReferenceSection"
import InstallationSection from "@/components/modules/EmergencySection"
import Hero from "@/components/modules/Hero"
import ServicesSection from "@/components/modules/ServiceSection"
import { Metadata } from "next"
import FAQ from '../components/modules/FAQ';

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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <WhyUsSection />
      <ReferenceSection />
      <InstallationSection />
      <FAQ />
    </main>
  )
}