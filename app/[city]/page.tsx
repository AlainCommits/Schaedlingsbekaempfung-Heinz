//Users/alonondanse/Schädlingsbekämpfung/app/[city]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Remove the import of hardcoded cities
// import { cities, getCityData } from '@/lib/cities'
import { fetchLocations } from '@/lib/api'

import Hero from '@/components/modules/Hero'
import AboutSection from '@/components/modules/AboutSection'
import ContactSection from '@/components/modules/ContactSection'
import WhyUsSection from '@/components/modules/WhyUsSection'
import ReferenceSection from '@/components/modules/ReferenceSection'
import InstallationSection from '@/components/modules/EmergencySection'
import ServicesSection from '@/components/modules/ServiceSection'
import FAQ from '@/components/modules/FAQ'

type PageProps = {
  params: {
    city: string
  }
}

// Update generateStaticParams to use the API
export async function generateStaticParams() {
  const cities = await fetchLocations()
  return cities.map((city) => ({
    city: city.slug
  }))
}

// Update getCityData function
async function getCityData(slug: string) {
  const cities = await fetchLocations()
  return cities.find((city) => city.slug === slug)
}

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

export default async function CityPage({ params }: { params: { city: string } }) {
  const cityData = await getCityData(params.city)

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
