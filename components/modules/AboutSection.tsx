// components/modules/AboutSection.tsx
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-background mx-auto" id="about">
      <div className="container mx-auto px-4 max-w-7xl">        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Ihr Experte für Schädlingsbekämpfung
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Professionelle Schädlingsbekämpfung mit Festpreisgarantie
              </h2>
              <p className="text-muted-foreground text-lg">
                24/7 Notdienst für Schädlingsbefall aller Art. 
                Schnell, zuverlässig und diskret.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 p-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/r3.png"
                alt="Professionelle Schädlingsbekämpfung im Einsatz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    title: "Blitzschneller 24/7 Notdienst",
    description: "Innerhalb von 60 Minuten sind wir bei Ihnen vor Ort - auch nachts und am Wochenende."
  },
  {
    title: "Modernste Schädlingsbekämpfung",
    description: "Wir arbeiten mit hochmodernen und umweltschonenden Methoden für nachhaltige Schädlingsbekämpfung."
  },
  {
    title: "Festpreisgarantie",
    description: "Transparente Preise ohne versteckte Kosten. Bezahlung erst nach erfolgreicher Schädlingsbekämpfung."
  }
]

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "50k+", label: "Zufriedene Kunden" },
  { value: "24/7", label: "Notdienst" }
]