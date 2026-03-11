export default function Home() {
  const setupSteps = [
    "Konto GitHub",
    "GitHub Desktop – repozytorium sklonowane",
    "Cursor – projekt otwarty",
    "Node.js + npm – zainstalowane",
    "Zależności projektu (npm install)",
    "Aplikacja uruchomiona lokalnie (npm run dev)",
  ];

  const upcomingTopics = [
    {
      title: "Spec-kit & Specification Driven Development",
      description:
        "Naucz się pisać precyzyjne specyfikacje, które AI zamieni w działający kod.",
    },
    {
      title: "Budowanie produktu z AI",
      description:
        "Iteracyjne tworzenie funkcji, komponentów i widoków – bez znajomości programowania.",
    },
    {
      title: "Deploy na Vercel",
      description:
        "Twoja aplikacja trafi w internet jednym pushem na GitHuba. Zobaczysz to na żywo.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
            MBA for Startups
          </span>
          <span className="text-sm text-gray-400">AI Growth Engine 2.0</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-8">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <h1 className="text-5xl font-bold tracking-tight mb-5 leading-tight">
          Środowisko działa.
          <br />
          <span className="text-green-500">Jesteś gotowy/a.</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
          Skoro widzisz tę stronę, Twój komputer jest poprawnie skonfigurowany.
          Na zajęciach możemy od razu zacząć budować.
        </p>
      </section>

      {/* Setup checklist */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6 text-center">
          Co udało Ci się zrobić
        </p>
        <ul className="space-y-3">
          {setupSteps.map((step) => (
            <li
              key={step}
              className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* What's next */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2 text-center">
          Co czeka Cię na zajęciach
        </p>
        <p className="text-center text-gray-400 mb-12 text-sm">
          Ta strona to tylko test środowiska. Oto co będziemy budować.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingTopics.map((topic) => (
            <div
              key={topic.title}
              className="border border-gray-100 rounded-2xl p-6 hover:border-green-100 hover:shadow-sm transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        MBA for Startups · AI Growth Engine 2.0 · Do zobaczenia na zajęciach
      </footer>
    </main>
  );
}
