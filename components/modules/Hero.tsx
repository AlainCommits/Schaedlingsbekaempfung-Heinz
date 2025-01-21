// components/modules/Hero.tsx
'use client'
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

export default function Hero({ cityName }: HeroProps) {
  const images = [
    {
      src: '/images/hero/slide1.jpg',
      alt: 'Professionelle Schädlingsbekämpfung'
    },
    {
      src: '/images/hero/slide2.jpg',
      alt: 'Notdienst Schädlingsbekämpfung'
    },
    {
      src: '/images/hero/slide3.jpg',
      alt: 'Schädlingsbekämpfung Service'
    },
    {
      src: '/images/hero/slide4.jpg',
      alt: 'Schädlingsbekämpfung Team'
    }
  ]

  return (
    <section className="relative bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Header Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
              <span className="font-medium">24/7 Notdienst verfügbar</span>
            </div>
            <h1 className="text-3xl font-bold text-primary">
              Schädlingsbekämpfung {cityName && `in ${cityName}`}
            </h1>
            <p className="text-base text-muted-foreground">
              Professionelle & diskrete Schädlingsbekämpfung mit Festpreisgarantie
            </p>
          </div>

          {/* Mobile Swiper */}
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              speed={1500}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="h-full w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Mobile floating elements */}
            <div className="absolute top-3 left-3 z-10 bg-primary/90 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm">
              <p className="text-base font-bold">30 Min</p>
              <p className="text-xs">Reaktionszeit</p>
            </div>
            <div className="absolute bottom-3 right-3 z-10 bg-white/90 px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm">
              <p className="text-base font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Zufriedenheit</p>
            </div>
          </div>

          <BenefitsList />

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full" asChild>
              <Link href="tel:0157-926-430-00">
                <Phone className="mr-2 h-5 w-5" />
                0157-926-430-00
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link href="#services">
                <Info className="mr-2 h-5 w-5" />
                Unsere Leistungen
              </Link>
            </Button>
          </div>

          {/* Mobile Callback Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
            <CallbackForm cityName={cityName} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
                <span className="font-medium">24/7 Notdienst verfügbar</span>
              </div>
              <h1 className="text-5xl font-bold text-primary">
                Schädlingsbekämpfung {cityName && `in ${cityName}`}
              </h1>
              <p className="text-xl text-muted-foreground">
                Professionelle & diskrete Schädlingsbekämpfung mit Festpreisgarantie
              </p>
            </div>

            <BenefitsList />

            <div className="flex gap-4">
              <Button size="lg" className="text-lg" asChild>
                <Link href="tel:0157-926-430-00">
                  <Phone className="mr-2 h-5 w-5" />
                  0157-926-430-00
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="#services">
                  <Info className="mr-2 h-5 w-5" />
                  Unsere Leistungen
                </Link>
              </Button>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-border">
              <CallbackForm cityName={cityName} />
            </div>
          </div>

          {/* Desktop Image Grid */}
          <div className="relative h-[700px]">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative h-full w-full">
              {/* Image Grid Layout */}
              <div className="absolute top-0 right-0 w-[75%] h-[45%] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute top-[25%] right-[15%] w-[45%] h-[35%] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-[20%] left-0 w-[55%] h-[40%] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 right-[5%] w-[50%] h-[35%] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={images[3].src}
                  alt={images[3].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Desktop floating elements */}
              <div className="absolute top-[15%] left-[5%] bg-primary/90 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm">
                <p className="text-2xl font-bold">30 Min</p>
                <p className="text-sm">Reaktionszeit</p>
              </div>

              <div className="absolute bottom-[30%] right-[10%] bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                <p className="text-xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Zufriedenheitsgarantie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitsList() {
  const benefits = [
    { icon: "🛡️", text: "Festpreisgarantie ohne versteckte Kosten" },
    { icon: "⚡", text: "In 30 Minuten vor Ort" },
    { icon: "✓", text: "Professionelle & diskrete Schädlingsbekämpfung" },
  ]

  return (
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="text-primary text-lg">{benefit.icon}</span>
          <span className="text-muted-foreground text-sm md:text-base">{benefit.text}</span>
        </li>
      ))}
    </ul>
  )
}