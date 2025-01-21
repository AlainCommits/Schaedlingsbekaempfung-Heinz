const services = [
    { title: "Stromausfall Notdienst", description: "Sofortige Hilfe bei Stromausfall, Tag und Nacht." },
    { title: "Elektroinstallation", description: "Sichere und fachgerechte Installation elektrischer Systeme." },
    { title: "Reparaturen", description: "Reparaturen von Schaltern, Steckdosen und Elektrogeräten." },
    { title: "Sicherungswechsel", description: "Austausch und Installation neuer Sicherungen." },
    { title: "Lampenmontage", description: "Professionelle Montage und Anschlüsse von Beleuchtungssystemen." },
  ];
  
  export function ServiceList() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </section>
    );
  }
  