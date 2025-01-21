// lib/seo.ts
export function getSEODataForCity(city: string) {
    const cityFormatted = city.charAt(0).toUpperCase() + city.slice(1);
    return {
      title: `Rohrreiniger Notdienst ${cityFormatted} – 24h Service`,
      description: `🔧 Ihr zuverlässiger Rohrreiniger Notdienst in ${cityFormatted} – rund um die Uhr erreichbar! Jetzt anrufen.`,
      openGraph: {
        title: `Rohrreiniger Notdienst ${cityFormatted}`,
        description: `🔧 Rohrreiniger Service in ${cityFormatted}. Schnell, professionell & rund um die Uhr.`,
        url: `https://Rohrreiniger-notdienst-24h.de/Rohrreiniger-in/${city}`,
      },
    };
  }
  