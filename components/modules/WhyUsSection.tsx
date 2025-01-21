// components/modules/WhyUsSection.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, BadgeCheck, ThumbsUp, HeartHandshake, Banknote } from 'lucide-react'

export default function WhyUsSection() {
  return (
    <section className="py-16 bg-background w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary">Ihre Vorteile</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Warum Sie uns vertrauen können
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professionelle Schädlingsbekämpfung mit über 20 Jahren Erfahrung. 
            Wir garantieren schnelle Hilfe und nachhaltige Lösungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const reasons = [
  {
    icon: Clock,
    title: "24/7 Notdienst",
    description: "Innerhalb von 30 Minuten sind wir bei Ihnen vor Ort - auch nachts und an Feiertagen."
  },
  {
    icon: Shield,
    title: "Zertifizierte Experten",
    description: "Unser Team besteht aus ausgebildeten und zertifizierten Schädlingsbekämpfern."
  },
  {
    icon: BadgeCheck,
    title: "Erfolgsgarantie",
    description: "Wir garantieren die erfolgreiche Beseitigung Ihres Schädlingsproblems."
  },
  {
    icon: ThumbsUp,
    title: "Modernste Methoden",
    description: "Wir setzen auf innovative und umweltschonende Bekämpfungsmethoden."
  },
  {
    icon: HeartHandshake,
    title: "Diskrete Behandlung",
    description: "Absolute Diskretion und professionelle Durchführung garantiert."
  },
  {
    icon: Banknote,
    title: "Faire Festpreise",
    description: "Transparente Preise ohne versteckte Kosten oder Überraschungen."
  }
]