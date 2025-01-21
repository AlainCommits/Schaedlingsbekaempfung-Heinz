// components/Navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm">24/7 Notdienst - Schnell & Zuverlässig</p>
            <Link 
              href="tel:0157-926-430-00" 
              className="text-sm font-bold hover:text-secondary"
            >
              📞 0157-926-430-00
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="relative w-40 h-12"> {/* Passen Sie die Größe nach Bedarf an */}
              <Image
                src="/images/logo.png"
                alt="Rohrreinigung Schmidt Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <Button variant="default" asChild>
                <Link href="tel:0157-926-430-00">
                  Jetzt anrufen
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-muted-foreground hover:text-primary"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container px-4 py-4 space-y-4">
              <NavLinks mobile onClick={() => setIsOpen(false)} />
              <Button className="w-full" asChild>
                <Link href="tel:0157-926-430-00">
                  Jetzt anrufen
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLinks({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { href: "#about", label: "Über uns" },
    { href: "#services", label: "Leistungen" },
    { href: "#contact", label: "Kontakt" },
    { href: "#references", label: "Referenzen" },
  ]

  return (
    <div className={mobile ? "space-y-4" : "flex space-x-8"}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={onClick}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}