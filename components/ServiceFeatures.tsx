// components/ServiceFeatures.tsx
import { Check } from 'lucide-react'

export default function ServiceFeatures({ city }: { city: string }) {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary p-2">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Festpreise ohne Überraschungen</h3>
              <p className="text-muted-foreground">
                Transparente Preise für alle Elektro-Dienstleistungen in {city}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary p-2">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Qualifizierte Mitarbeiter</h3>
              <p className="text-muted-foreground">
                Erfahrene Rohrreiniger für Ihren Notfall in {city}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary p-2">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Blitzschnelle Anfahrt</h3>
              <p className="text-muted-foreground">
                Im Notfall in ca. 15 Min. vor Ort in {city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}