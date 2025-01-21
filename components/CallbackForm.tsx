// components/CallbackForm.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send, Loader2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CallbackFormProps {
  cityName?: string
}

export default function CallbackForm({ cityName }: CallbackFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Hier kommt Ihre Submit-Logik
    setTimeout(() => setIsLoading(false), 1000) // Simulierte Verzögerung
  }

  return (
    <Card className="border-2 ">
      <CardHeader className="space-y-2 border-primary">
        <CardTitle className="text-2xl text-primary border-primary">
          Kostenlose Beratung
        </CardTitle>
        <CardDescription>
          Wir rufen Sie innerhalb von wenigen Minuten zurück 
          {cityName && ` in ${cityName}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Name"
              required
              className="border-2 border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Telefon"
                  required
                  className="pl-10 border-2 border-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="E-Mail"
                  required
                  className="pl-10 border-2 border-primary"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Ihre Nachricht (optional)"
              className="min-h-[100px] border-2 border-primary"
            />
          </div>

          <div className="space-y-2">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Jetzt absenden
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}