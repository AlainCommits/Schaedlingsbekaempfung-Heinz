// components/modules/ServiceSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bug, Shield, Clock, Rat, BugOff, Zap } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section className="py-16 bg-muted w-full" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-4">
            Unsere Leistungen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Professionelle Schädlingsbekämpfung
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Von der Rattenbekämpfung bis zur Bettwanzenbeseitigung - 
            wir bieten Ihnen umfassende Lösungen für alle Schädlingsprobleme.
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
    icon: Rat,
    title: "Rattenbekämpfung",
    description: "Effektive Bekämpfung von Ratten und Mäusen",
    features: [
      "Professionelle Köderauslage",
      "Nachhaltige Beseitigung",
      "Präventive Maßnahmen",
    ]
  },
  {
    icon: Bug,
    title: "Bettwanzenbekämpfung",
    description: "Gründliche Beseitigung von Bettwanzen",
    features: [
      "Thermische Behandlung",
      "Chemische Behandlung",
      "Nachkontrolle",
    ]
  },
  {
    icon: BugOff,
    title: "Kakerlakenbekämpfung",
    description: "Professionelle Bekämpfung von Kakerlaken",
    features: [
      "Sofortige Maßnahmen",
      "Langfristige Lösung",
      "Präventivbehandlung",
    ]
  },
  {
    icon: Zap,
    title: "Wespenbekämpfung",
    description: "Sichere Entfernung von Wespennestern",
    features: [
      "Schnelle Hilfe",
      "Fachgerechte Entfernung",
      "Präventive Beratung",
    ]
  },
  {
    icon: Shield,
    title: "Schädlingsprävention",
    description: "Vorbeugende Maßnahmen gegen Schädlingsbefall",
    features: [
      "Regelmäßige Kontrollen",
      "Beratungsservice",
      "Langfristiger Schutz",
    ]
  },
  {
    icon: Clock,
    title: "24/7 Notdienst",
    description: "Schnelle Hilfe bei akutem Schädlingsbefall",
    features: [
      "30 Minuten Reaktionszeit",
      "Rund um die Uhr",
      "Faire Festpreise",
    ]
  }
]