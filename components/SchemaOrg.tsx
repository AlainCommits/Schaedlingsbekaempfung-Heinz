// components/SchemaOrg.tsx
export function SchemaOrg({ city }: { city: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Rohrreiniger Notdienst ${city}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": "DE"
    },
    "description": `24/7 Rohrreiniger Notdienst in ${city}...`,
    // Weitere Schema-Daten
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}