// components/modules/EmergencySection.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, ShieldCheck, Wrench } from 'lucide-react'
import Link from 'next/link'

export default function EmergencySection() {
  return (
    <section className="py-16 bg-primary/5 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Linke Seite - Notfall-Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-medium">24/7 Notdienst</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Rohrverstopfung? Wir sind sofort für Sie da!
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Keine Panik bei verstopften Rohren! Unser Notfall-Team ist rund um die Uhr 
              für Sie im Einsatz - schnell, zuverlässig und zu fairen Festpreisen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" asChild>
                <Link href="tel:0157-926-430-00">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt Hilfe rufen
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="flex-1" asChild>
                <Link href="#contact">
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  Festpreis anfragen
                </Link>
              </Button>
            </div>
          </div>

          {/* Rechte Seite - Service-Karten */}
          <div className="grid gap-6">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="mt-3 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 text-primary">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {emergencyStats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const emergencyServices = [
  {
    icon: Clock,
    title: "Notfall-Rohrreinigung",
    description: "Sofortige Hilfe bei akuten Verstopfungen",
    features: [
      "Reaktionszeit unter 30 Minuten",
      "24/7 Verfügbarkeit",
      "Festpreisgarantie"
    ]
  },
  {
    icon: Wrench,
    title: "Vorbeugende Wartung",
    description: "Regelmäßige Inspektion und Reinigung",
    features: [
      "Professionelle Kamerainspektion",
      "Wartungsverträge möglich",
      "Dokumentierte Durchführung"
    ]
  }
]

const emergencyStats = [
  { value: "30 Min", label: "Durchschnittliche Anfahrtszeit" },
  { value: "24/7", label: "Notdienst Verfügbarkeit" },
  { value: "100%", label: "Zufriedenheitsgarantie" },
  { value: "0€", label: "Anfahrtskosten im Stadtgebiet" }
]