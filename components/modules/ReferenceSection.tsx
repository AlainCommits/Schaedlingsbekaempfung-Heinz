// components/modules/ReferenceSection.tsx
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"

export default function ReferenceSection() {
  return (
    <section className="py-16 bg-muted w-full" id="references">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary">Referenzen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Unsere zufriedenen Kunden
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vertrauen Sie auf unsere langjährige Erfahrung und Expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {references.map((ref, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-background/50">
                <Image
                  src={ref.image}
                  alt={ref.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-primary">{ref.name}</h3>
                <p className="text-sm text-muted-foreground">{ref.type}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary">★</div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const references = [
  {
    name: "Hotel Maritim",
    type: "Hotelkette",
    image: "/images/references/hotel.jpg"
  },
  {
    name: "Restaurant Bella Vista",
    type: "Gastronomie",
    image: "/images/references/restaurant.jpg"
  },
  {
    name: "Wohnanlage Parkview",
    type: "Wohnungswirtschaft",
    image: "/images/references/apartment.jpg"
  },
  {
    name: "Stadtwerke",
    type: "Öffentliche Einrichtung",
    image: "/images/references/public.jpg"
  }
]

const testimonials = [
  {
    quote: "Schnelle und professionelle Hilfe",
    author: "Familie Heinz"
  },
  {
    quote: "Faire Preise, top Service",
    author: "Restaurant Bella Vista"
  },
  {
    quote: "Immer wieder gerne",
    author: "Hausverwaltung Meyer"
  },
  {
    quote: "Kompetente Beratung",
    author: "Hotel Maritim"
  }
]