import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { cities, getCityData } from '@/lib/cities'

import Hero from '@/components/modules/Hero'
import AboutSection from '@/components/modules/AboutSection'
import ContactSection from '@/components/modules/ContactSection'
import WhyUsSection from '@/components/modules/WhyUsSection'
import ReferenceSection from '@/components/modules/ReferenceSection'
import InstallationSection from '@/components/modules/EmergencySection'
import ServicesSection from '@/components/modules/ServiceSection'
import FAQ from '@/components/modules/FAQ'

// Definiere den Props Type
type PageProps = {
  params: {
    city: string
  }
}
/**
 * 1) SSG: Alle möglichen Routen
 */
export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

/**
 * 2) Metadaten asynchron
 */
export function generateMetadata({ params }: PageProps): Metadata {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  
  return {
    title: `Schädlingsbekämpfung ${cityName} | 24/7 Notdienst`,
    description: `Professionelle Schädlingsbekämpfung in ${cityName} ✓ 24/7 Notdienst ✓ 30 Min vor Ort ✓ Festpreisgarantie ✓ Alle Schädlinge ➤ Jetzt anfragen!`,
    alternates: {
      canonical: `https://schaedlingsbekaempfung-heinz.de/${params.city}`
    }
  }
}

/**
 * 3) Page asynchron
 */
export default async function CityPage({ params }: { params: { city: string } }) {
  const cityData = getCityData(params.city)

  if (!cityData) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Hero cityName={cityData.name} />
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
