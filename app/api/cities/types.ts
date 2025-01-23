export interface City {
    name: string;
    slug: string;
    region: string;
    zip: string[];
  }
  
  export interface OpenPLZLocation {
    osm_id: number;
    ags: string;
    ort: string;
    plz: string;
    bundesland: string;
    landkreis: string;
    lat: string;
    lon: string;
  }