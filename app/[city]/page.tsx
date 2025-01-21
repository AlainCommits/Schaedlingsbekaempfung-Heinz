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


/**
 * 1) SSG: Alle möglichen Routen
 */
export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

/**
 * 2) Metadaten asynchron
 */
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = getCityData(params.city)
  if (!cityData) {
    return {
      title: 'Stadt nicht gefunden',
      description: 'Die gesuchte Stadt wurde nicht gefunden',
    }
  }
  return {
    title: `Rohrreiniger Notdienst ${cityData.name} | 24/7 Elektro-Service`,
    description: `24h Rohrreiniger Notdienst in ${cityData.name}. ✓ Festpreise ✓ Qualifizierte Mitarbeiter ✓ In 15 Min vor Ort ➤ Jetzt anrufen!`,
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
