import { Metadata } from "next";
import { ServiceList } from "@/components/ServiceList";

export const metadata: Metadata = {
  title: "Unsere Leistungen – Rohrreiniger Notdienst 24h",
  description: "Unsere Rohrreiniger-Leistungen: Stromausfall Notdienst, Installation, Reparaturen & mehr. Schnell & zuverlässig in Ihrer Stadt.",
};

export default function LeistungenPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-primary text-center">Unsere Rohrreiniger-Leistungen</h1>
      <p className="text-lg text-gray-600 text-center mt-4">
        Wir bieten Ihnen ein breites Spektrum an professionellen Elektro-Dienstleistungen. 
      </p>

      {/* Service-Liste */}
      <ServiceList />
    </div>
  );
}
