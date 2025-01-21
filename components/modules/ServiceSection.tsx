// components/modules/ServiceSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Droplet, Search, Clock, Shield, Ban } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section className="py-16 bg-muted w-full" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-4">
            Unsere Leistungen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Professionelle Rohrreinigung
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Von der einfachen Verstopfung bis zur komplexen Kanalsanierung - 
            wir bieten Ihnen umfassende Lösungen für alle Rohrprobleme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {<service.icon className="w-6 h-6 text-primary" />}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: Wrench,
    title: "Rohrreinigung & Verstopfungen",
    description: "Schnelle Hilfe bei verstopften Abflüssen und Rohren",
    features: [
      "Sofortige Verfügbarkeit",
      "Modernste Werkzeuge",
      "Nachhaltige Lösung",
    ]
  },
  {
    icon: Search,
    title: "Kamerainspektion",
    description: "Professionelle Rohruntersuchung mit modernster Kameratechnik",
    features: [
      "Digitale Aufzeichnung",
      "Schadensanalyse",
      "Präzise Ortung",
    ]
  },
  {
    icon: Clock,
    title: "24/7 Notdienst",
    description: "Rund um die Uhr für Notfälle verfügbar",
    features: [
      "Schnelle Reaktionszeit",
      "Faire Festpreise",
      "Sofort-Hilfe",
    ]
  },
  {
    icon: Shield,
    title: "Rohrsanierung",
    description: "Nachhaltige Reparatur und Sanierung von Rohrleitungen",
    features: [
      "Ohne Aufgrabung",
      "Langlebige Lösung",
      "Kosteneffizient",
    ]
  },
  {
    icon: Droplet,
    title: "Kanalreinigung",
    description: "Professionelle Reinigung von Abwasserkanälen",
    features: [
      "Hochdruck-Spülung",
      "Verstopfungsbeseitigung",
      "Wartungsservice",
    ]
  },
  {
    icon: Ban,
    title: "Verstopfungsprävention",
    description: "Vorbeugende Maßnahmen gegen Rohrverstopfungen",
    features: [
      "Regelmäßige Wartung",
      "Beratungsservice",
      "Langfristiger Schutz",
    ]
  }
]