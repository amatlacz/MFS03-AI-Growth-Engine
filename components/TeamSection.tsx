export default function TeamSection() {
  const team = [
    {
      name: "Dr Katarzyna Nowak",
      specialty: "Kardiologia zwierząt",
      image: "👩‍⚕️"
    },
    {
      name: "Dr Piotr Lewandowski",
      specialty: "Chirurgia i ortopedia",
      image: "👨‍⚕️"
    },
    {
      name: "Dr Anna Kowalska",
      specialty: "Stomatologia weterynaryjna",
      image: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Nasz zespół
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specjaliści z pasją
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Każdy członek naszego zespołu to doświadczony specjalista zaangażowany w zdrowotę Twoiego pupila
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 border border-green-100"
            >
              {/* Avatar */}
              <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <div className="text-8xl">{member.image}</div>
              </div>

              {/* Info */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.specialty}</p>
                <p className="text-gray-600 text-sm mb-6">
                  Specjalista z bogatym doświadczeniem w leczeniu zwierząt małych i dużych.
                </p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm">
                  Czytaj więcej
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
