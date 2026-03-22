export default function PricingSection() {
  const services = [
    { name: "Badanie ogólne", price: "80 zł" },
    { name: "Szczepienie (podstawowe)", price: "120 zł" },
    { name: "Czyszczenie zębów", price: "350 zł" },
    { name: "USG", price: "250 zł" },
    { name: "Rentgen", price: "200 zł" },
    { name: "Zabiegi chirurgiczne (od)", price: "500 zł" },
    { name: "Konsultacja telefoniczna", price: "50 zł" },
    { name: "Wizyta domowa", price: "400 zł" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Cennik
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Przejrzyste i uczciwe ceny
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wszystkie nasze usługi są wyceniane przejrzyście. Nie ma ukrytych opłat.
          </p>
        </div>

        {/* Pricing table */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden border border-green-100">
          <div className="divide-y divide-green-100">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-8 py-5 hover:bg-white transition-colors"
              >
                <span className="text-gray-700 font-medium text-lg">{service.name}</span>
                <span className="text-green-600 font-bold text-xl">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-blue-900">
            <span className="font-semibold">ℹ️ Uwaga:</span> Ceny mogą się różnić w zależności od skomplikowania zabiegu. Zawsze podamy dokładną wycenę przed leczeniem. Oferujemy również pakiety abonamentowe dla regularnych pacjentów – zapytaj nas!
          </p>
        </div>
      </div>
    </section>
  );
}
