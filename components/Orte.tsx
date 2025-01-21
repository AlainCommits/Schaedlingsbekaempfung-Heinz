import Link from "next/link";

const cities = [
  "Berlin", "Hamburg", "München", "Köln", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Bremen",
  "Dresden", "Leipzig", "Hannover", "Nürnberg", "Duisburg"
];

export function CitiesList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {cities.map((city, index) => (
        <Link key={index} href={`/${city.toLowerCase()}`} className="p-6 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
          <h3 className="text-xl font-semibold text-primary">{city}</h3>
          <p className="text-gray-600 mt-2">Rohrreiniger Notdienst in {city}</p>
        </Link>
      ))}
    </section>
  );
}
