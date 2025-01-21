// app/impressum/page.tsx
'use client'

import { toast } from 'sonner'

export default function ImpressumPage() {
  const showImpressum = () => {
    toast('Impressum', {
      description: (
        <div className="space-y-4 text-sm">
          <h2 className="font-bold">Angaben gemäß §5 TMG:</h2>
          <p>Elektriko-Heinz ist ein Vermittlungsservice vertreten durch:</p>
          <p>Karsten Heinz</p>
          <p>Telefon: 0157-926-430-00</p>
          <p>E-Mail: karsten@elektro-heinrich.de</p>
          
          {/* Weitere Impressum-Inhalte */}
        </div>
      ),
      duration: 0,
      position: 'bottom-center',
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <button 
        onClick={showImpressum}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Impressum anzeigen
      </button>
    </div>
  )
}