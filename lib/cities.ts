// lib/cities.ts
export interface City {
  name: string;
  slug: string;
  region: string;
  zip: string[];
}

// lib/cities.ts
export const cities: City[] = [
  // Großstädte NRW
  {
    name: "Köln",
    slug: "koeln",
    region: "Nordrhein-Westfalen",
    zip: ["50667", "50668", "50670"],
  },
  {
    name: "Düsseldorf",
    slug: "duesseldorf",
    region: "Nordrhein-Westfalen",
    zip: ["40210", "40211", "40213"],
  },
  {
    name: "Dortmund",
    slug: "dortmund",
    region: "Nordrhein-Westfalen",
    zip: ["44135", "44137", "44139"],
  },
  {
    name: "Essen",
    slug: "essen",
    region: "Nordrhein-Westfalen",
    zip: ["45127", "45128", "45130"],
  },
  {
    name: "Duisburg",
    slug: "duisburg",
    region: "Nordrhein-Westfalen",
    zip: ["47051", "47053", "47055"],
  },
  {
    name: "Bochum",
    slug: "bochum",
    region: "Nordrhein-Westfalen",
    zip: ["44787", "44789", "44791"],
  },
  {
    name: "Wuppertal",
    slug: "wuppertal",
    region: "Nordrhein-Westfalen",
    zip: ["42103", "42105", "42107"],
  },
  {
    name: "Bielefeld",
    slug: "bielefeld",
    region: "Nordrhein-Westfalen",
    zip: ["33602", "33604", "33607"],
  },
  {
    name: "Bonn",
    slug: "bonn",
    region: "Nordrhein-Westfalen",
    zip: ["53111", "53113", "53115"],
  },
  {
    name: "Münster",
    slug: "muenster",
    region: "Nordrhein-Westfalen",
    zip: ["48143", "48145", "48147"],
  },
  {
    name: "Aachen",
    slug: "aachen",
    region: "Nordrhein-Westfalen",
    zip: ["52062", "52064", "52066"],
  },
  {
    name: "Mönchengladbach",
    slug: "moenchengladbach",
    region: "Nordrhein-Westfalen",
    zip: ["41061", "41063", "41065"],
  },
  {
    name: "Gelsenkirchen",
    slug: "gelsenkirchen",
    region: "Nordrhein-Westfalen",
    zip: ["45879", "45881", "45883"],
  },
  {
    name: "Krefeld",
    slug: "krefeld",
    region: "Nordrhein-Westfalen",
    zip: ["47798", "47799", "47800"],
  },
  {
    name: "Oberhausen",
    slug: "oberhausen",
    region: "Nordrhein-Westfalen",
    zip: ["46045", "46047", "46049"],
  },
  {
    name: "Hagen",
    slug: "hagen",
    region: "Nordrhein-Westfalen",
    zip: ["58095", "58097", "58099"],
  },
  {
    name: "Hamm",
    slug: "hamm",
    region: "Nordrhein-Westfalen",
    zip: ["59063", "59065", "59067"],
  },
  {
    name: "Mülheim an der Ruhr",
    slug: "muelheim-an-der-ruhr",
    region: "Nordrhein-Westfalen",
    zip: ["45468", "45470", "45472"],
  },
  {
    name: "Solingen",
    slug: "solingen",
    region: "Nordrhein-Westfalen",
    zip: ["42651", "42653", "42655"],
  },
  {
    name: "Leverkusen",
    slug: "leverkusen",
    region: "Nordrhein-Westfalen",
    zip: ["51373", "51375", "51377"],
  },
  {
    name: "Neuss",
    slug: "neuss",
    region: "Nordrhein-Westfalen",
    zip: ["41460", "41462", "41464"],
  },
  {
    name: "Paderborn",
    slug: "paderborn",
    region: "Nordrhein-Westfalen",
    zip: ["33098", "33100", "33102"],
  },
  {
    name: "Recklinghausen",
    slug: "recklinghausen",
    region: "Nordrhein-Westfalen",
    zip: ["45657", "45659", "45661"],
  },
  {
    name: "Bottrop",
    slug: "bottrop",
    region: "Nordrhein-Westfalen",
    zip: ["46236", "46238", "46240"],
  },
  {
    name: "Remscheid",
    slug: "remscheid",
    region: "Nordrhein-Westfalen",
    zip: ["42853", "42855", "42857"],
  },
  {
    name: "Siegen",
    slug: "siegen",
    region: "Nordrhein-Westfalen",
    zip: ["57072", "57074", "57076"],
  }
];

// Synchrone Version ohne async/await
export function getCityBySlug(slug: string): City | undefined {
  if (!slug) return undefined;
  return cities.find(city => city.slug.toLowerCase() === slug.toLowerCase());
}

// Hilfsfunktionen
export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

export function isValidCity(slug: string): boolean {
  return cities.some(city => city.slug.toLowerCase() === slug.toLowerCase());
}

export function getCityData(slug: string) {
  return cities.find(city => city.slug.toLowerCase() === slug.toLowerCase());
}