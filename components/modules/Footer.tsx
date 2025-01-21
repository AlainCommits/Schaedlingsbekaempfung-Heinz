// components/modules/Footer.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-foreground w-full">
      {/* Main Footer */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Rohrreinigung Heinz</h3>
            <p className="text-muted-foreground">
              Ihr zuverlässiger Partner für Rohrreinigung und Kanalsanierung. 
              24/7 Notdienst in Ihrer Region.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Service</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Kontakt</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <info.icon className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Call */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Notdienst</h3>
            <p className="text-muted-foreground">
              Verstopfung? Wasserrohrbruch? 
              Wir sind rund um die Uhr für Sie da!
            </p>
            <Button size="lg" className="w-full" asChild>
              <Link href="tel:0157-926-430-00">
                <Phone className="mr-2 h-5 w-5" />
                0157-926-430-00
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rohrreinigung Heinz. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const quickLinks = [
  { label: "Rohrreinigung", href: "/services/rohrreinigung" },
  { label: "Kanalsanierung", href: "/services/kanalsanierung" },
  { label: "Verstopfungen", href: "/services/verstopfungen" },
  { label: "Kamerainspektion", href: "/services/kamerainspektion" },
  { label: "Preise", href: "/preise" },
  { label: "Über uns", href: "/about" }
]

const contactInfo = [
  { icon: MapPin, text: "Musterstraße 123, 12345 Stadt" },
  { icon: Phone, text: "0157-926-430-00" },
  { icon: Mail, text: "info@rohrreinigung.de" },
  { icon: Clock, text: "24/7 Notdienst" }
]

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" }
]