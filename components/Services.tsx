// components/Services.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Services({ city }: { city: string }) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Unsere Elektro-Services in {city}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Notdienst</CardTitle>
              <CardDescription>24/7 Elektro-Notdienst</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>✓ Stromausfall beheben</li>
                <li>✓ Kurzschluss reparieren</li>
                <li>✓ Sicherungen prüfen</li>
              </ul>
            </CardContent>
          </Card>
          {/* Weitere Service-Cards */}
        </div>
      </div>
    </section>
  )
}