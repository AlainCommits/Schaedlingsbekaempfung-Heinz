//Users/alonondanse/Schädlingsbekämpfung/lib/api.ts
import axios from 'axios';
import type { City } from './types';

interface ZipApiResponse {
  places: Array<{
    place: string;
    state: string;
    "state-code": string;
    "postal-code": string;
  }>;
}

// Funktion zur Slug-Generierung
const generateSlug = (cityName: string): string =>
  cityName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');

export async function fetchLocations(): Promise<City[]> {
  console.log('Fetching locations...');
  const cities = new Map<string, City>();

  const states = ['Nordrhein-Westfalen', 'Bremen'];
  
  for (const state of states) {
    try {
      // API-Call für alle Städte eines Bundeslandes
      const response = await axios.get(`https://zip-api.eu/api/v1/codes/state=DE-${state}`);
      console.log(`📡 API Response für ${state}:`, response.data);

      if (!response.data || response.data.length === 0) {
        console.warn(`⚠️ Keine Städte für Bundesland ${state} gefunden.`);
        continue;
      }

      response.data.forEach((entry: { place_name: string, postal_code: string }) => {
        const cityName = entry.place_name;
        const postcode = entry.postal_code;

        if (!cities.has(cityName)) {
          cities.set(cityName, { name: cityName, slug: generateSlug(cityName), region: state, zip: [postcode] });
        } else {
          const city = cities.get(cityName)!;
          if (!city.zip.includes(postcode)) {
            city.zip.push(postcode);
          }
        }
      });

    } catch (error) {
      console.error(`❌ Fehler beim Abrufen von ${state}:`, error);
    }

    // API-Rate-Limit beachten
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  const result = Array.from(cities.values());
  console.log('✅ Verarbeitung abgeschlossen:', result);
  return result;
}