// components/modules/ContactSection.tsx
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, MapPin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-16 bg-background w-full" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Kontakt Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                24/7 Rohrreinigung Notdienst
              </h2>
              <p className="text-muted-foreground text-lg">
                Verstopfung? Wir sind rund um die Uhr für Sie da und in 30 Minuten vor Ort.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="flex-1">
                <a href="tel:0157-926-430-00">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="flex-1">
                <a href="mailto:info@rohrreinigung.de">
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail senden
                </a>
              </Button>
            </div>
          </div>

          {/* Bild und Vertrauenselemente */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/support.png"
                alt="Rohrreinigung Kundenservice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {trustElements.map((element, index) => (
                <div key={index} className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {element.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {element.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const contactInfo = [
  {
    icon: Phone,
    title: "Notdienst Hotline",
    content: "0157-926-430-00"
  },
  {
    icon: Clock,
    title: "Servicezeiten",
    content: "24/7 - Auch an Sonn- und Feiertagen"
  },
  {
    icon: MapPin,
    title: "Einsatzgebiet",
    content: "In Ihrer Region - Schnell vor Ort"
  }
]

const trustElements = [
  { value: "30 Min", label: "Reaktionszeit" },
  { value: "24/7", label: "Erreichbarkeit" },
  { value: "100%", label: "Festpreisgarantie" },
  { value: "4.9★", label: "Kundenbewertung" }
]