'use client'
// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'
import CallbackForm from '@/components/CallbackForm'
import { Button } from '../ui/button'
import { Phone, Info } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
interface HeroProps {
  cityName?: string
}

// components/Hero.tsx
export default function Hero({ cityName }: HeroProps) {
  const slides = [
    {
      image: '/images/hero/slide1.jpg',
      alt: 'Professionelle Rohrreinigung'
    },
    {
      image: '/images/hero/slide2.jpg',
      alt: 'Notdienst Rohrreinigung'
    },
    {
      image: '/images/hero/slide3.jpg',
      alt: 'Kanalreinigung Service'
    },
    {
      image: '/images/hero/slide4.jpg',
      alt: 'Kanalreinigung Service'
    }
  ]
  return (
    <section className="relative min-h-[calc(100vh-var(--navbar-height-mobile))] md:min-h-[calc(100vh-var(--navbar-height))] flex items-center pt-12">      {/* Background */}
      <div className="absolute inset-0 -z-10">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1500} // Langsamere Übergangsgeschwindigkeit
        autoplay={{
          delay: 4000, // Längere Verzögerung zwischen Slides
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
        initialSlide={0} // Starte mit dem ersten Slide
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={85}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="text-white space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Rohrreinigung Notdienst {cityName && `in ${cityName}`}
            </h1>
            <h2 className="text-lg md:text-xl text-primary-foreground/90">
              24/7 VERSTOPFUNGEN LÖSEN • KANALREINIGUNG • ROHRSANIERUNG
            </h2>
            
            <BenefitsList />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="tel:0157-926-430-00">
                  <Phone className="mr-2 h-5 w-5" />
                  0157-926-430-00
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="#services" className='text-slate-700'>
                  <Info className="mr-2 h-5 w-5 text-slate-700" />
                  Unsere Leistungen
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:mt-0 mt-6">
            <CallbackForm cityName={cityName} />
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsList() {
  const benefits = [
    { icon: "💧", text: "Festpreisgarantie ohne versteckte Kosten" },
    { icon: "🔧", text: "Modernste Rohrreinigungstechnik" },
    { icon: "⚡", text: "Notdienst: In 30 Min. vor Ort" },
  ]

  return (
    <ul className="space-y-4">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="text-primary">{benefit.icon}</span>
          <span className="text-primary-foreground/90">{benefit.text}</span>
        </li>
      ))}
    </ul>
  )
}