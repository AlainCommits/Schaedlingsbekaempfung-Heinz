// components/modules/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function FAQSection() {
  return (
    <section className="py-16 w-full bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren Rohrreinigungsservice
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Accordion */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Card */}
          <div className="lg:mt-0 mt-8">
            <div className="bg-primary/5 rounded-lg p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Noch Fragen?
                </h3>
                <p className="text-muted-foreground">
                  Unser freundliches Team steht Ihnen rund um die Uhr zur Verfügung. 
                  Kontaktieren Sie uns - wir beraten Sie gerne!
                </p>
              </div>

              <div className="grid gap-4">
                <Button size="lg" asChild>
                  <Link href="tel:0157-926-430-00" className="w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    0157-926-430-00
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="mailto:info@rohrreinigung.de" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    info@rohrreinigung.de
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  {contactFeatures.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="text-primary font-bold mb-1">{feature.value}</div>
                      <div className="text-sm text-muted-foreground">{feature.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqItems = [
  {
    question: "Wie schnell sind Sie bei einem Notfall vor Ort?",
    answer: "In der Regel sind wir innerhalb von 30 Minuten bei Ihnen. Unser 24/7 Notdienst garantiert schnelle Hilfe - auch nachts und an Feiertagen."
  },
  {
    question: "Was kostet ein Rohrreinigungseinsatz?",
    answer: "Wir arbeiten mit transparenten Festpreisen, die wir vor Arbeitsbeginn mit Ihnen besprechen. Die genauen Kosten hängen von der Art der Verstopfung und dem notwendigen Arbeitsaufwand ab."
  },
  {
    question: "Welche Zahlungsmöglichkeiten bieten Sie an?",
    answer: "Sie können bar, mit EC-Karte oder auf Rechnung bezahlen. Bei Firmenkunden ist auch eine Zahlung auf Rechnung mit vereinbartem Zahlungsziel möglich."
  },
  {
    question: "Geben Sie eine Garantie auf Ihre Arbeit?",
    answer: "Ja, wir geben eine Zufriedenheitsgarantie auf unsere Arbeit. Sollte das Problem nach der Reinigung erneut auftreten, kommen wir kostenlos wieder."
  },
  {
    question: "Welche Gebiete decken Sie ab?",
    answer: "Wir sind in der gesamten Region tätig und bieten unseren Service im Umkreis von 50 km an. Für genaue Informationen kontaktieren Sie uns bitte."
  },
  {
    question: "Wie kann ich Rohrverstopfungen vorbeugen?",
    answer: "Regelmäßige Wartung und richtige Nutzung sind wichtig. Wir bieten auch vorbeugende Inspektionen und Beratung zur korrekten Pflege Ihrer Rohre an."
  }
]

const contactFeatures = [
  { value: "24/7", label: "Erreichbarkeit" },
  { value: "30 Min", label: "Reaktionszeit" },
  { value: "100%", label: "Festpreisgarantie" },
  { value: "4.9★", label: "Bewertung" }
]