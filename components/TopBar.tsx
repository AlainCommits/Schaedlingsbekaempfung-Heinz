// components/TopBar.tsx
export default function TopBar() {
  return (
    <div className="bg-[#1a237e] text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-8">
          <a href="tel:0157-926-430-00" className="flex items-center">
            <span>📞 Telefonnummer: 0157-926-430-00</span>
          </a>
          <a href="mailto:karsten@elektro-heinrich.de" className="flex items-center">
            <span>✉️ Email: karsten@elektro-heinrich.de</span>
          </a>
        </div>
        <div>
          <span>Bürozeiten Tägl. 8-21Uhr | Notdienst 24Std. erreichbar.</span>
        </div>
      </div>
    </div>
  );
}
