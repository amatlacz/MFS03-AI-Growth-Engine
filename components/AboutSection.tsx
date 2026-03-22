export default function AboutSection() {
  const services = [
    {
      icon: "💉",
      title: "Szczepienia",
      description: "Ochrona przed chorobami zakaźnymi"
    },
    {
      icon: "🔬",
      title: "Chirurgia",
      description: "Zabiegi z zastosowaniem nowoczesnych technik"
    },
    {
      icon: "🦷",
      title: "Stomatologia",
      description: "Zdrowe zęby to zdrowy pupil"
    },
    {
      icon: "🩺",
      title: "Diagnostyka",
      description: "Pełne badania i USG"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold text-sm tracking-widest uppercase mb-4">
            O nas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Klinika z sercem dla zwierząt
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Happy Paws to miejsce, gdzie Twój pupil otrzyma najlepszą opiekę weterynaryjną w przyjaznej i nowoczesnej atmosferze. Nasz zespół to doświadczeni specjaliści, którzy traktują każde zwierzę jak swoją rodzinę.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105 duration-300 border border-green-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">15+</div>
            <p className="text-gray-600 text-lg">Lat doświadczenia</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">5000+</div>
            <p className="text-gray-600 text-lg">Zadowolonych pacjentów</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">24/7</div>
            <p className="text-gray-600 text-lg">Pomoc w nagłych wypadkach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
