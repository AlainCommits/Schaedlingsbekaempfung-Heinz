import { MetadataRoute } from 'next'

// Diese Funktion erstellt automatisch eine robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',      // Gilt für alle Suchmaschinen-Bots
      allow: '/',          // Erlaube Zugriff auf alle Seiten
      disallow: '/private/' // Verbiete Zugriff auf private Seiten
    },
    sitemap: 'https://schaedlingsbekaempfung-heinz.de/sitemap.xml'
  }
}