import Link from "next/link";
// components/EmergencyBanner.tsx
export default function EmergencyBanner({ city }: { city: string }) {
  return (
    <div className="w-full bg-primary text-primary-foreground py-3">
      <div className="container">
        <p className="text-center">
          Haben Sie einen Elektro Notfall in {city}? Wir sind 24 Std erreichbar:{" "}
          <Link href="tel:0157-926-430-00" className="font-bold hover:underline">
            0157-926-430-00
          </Link>
        </p>
      </div>
    </div>
  )
}