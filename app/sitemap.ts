import { MetadataRoute } from 'next'
import { cities } from '@/lib/cities' // Importieren Sie Ihre cities aus der lib

export default function sitemap(): MetadataRoute.Sitemap {
  // Basis URL Ihrer Website
  const baseUrl = 'https://schaedlingsbekaempfung-heinz.de'

  // Erstelle URLs für jede Stadt aus Ihrem cities Array
  const cityUrls = cities.map(city => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // Hauptseiten
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3
    }
  ]

  // Kombiniere alle URLs
  return [...mainPages, ...cityUrls]
}