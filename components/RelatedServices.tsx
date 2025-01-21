// components/RelatedServices.tsx
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RelatedServices() {
  const services = [
    {
      title: "Rohrreinigung für Privathaushalte",
      description: "Schnelle Hilfe bei verstopften Abflüssen in Bad, Küche und Keller",
      href: "/rohrreinigung-privat"
    },
    {
      title: "Gewerbe & Industrie",
      description: "Professionelle Rohrreinigung für Unternehmen und Industrieanlagen",
      href: "/rohrreinigung-gewerbe"
    },
    {
      title: "Kanalinspektion",
      description: "Moderne Kamerainspektion zur Schadensanalyse",
      href: "/kanalinspektion"
    }
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <Card key={service.title} className="group hover:shadow-lg transition-shadow">
          <Link href={service.href}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {service.title}
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-2" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}