export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🐾 Happy Paws</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesjonalna klinika weterynaryjna z sercem dla zwierząt. Twój pupil to nasz priorytet.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg mb-4">📍 Adres</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              ul. Zwierzyniecka 15<br />
              31-203 Kraków<br />
              <span className="text-green-400 font-semibold mt-2 block">+48 123 456 789</span>
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">⏰ Godziny otwarcia</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Pn-Pt: 9:00 – 19:00</p>
              <p>Sob: 10:00 – 16:00</p>
              <p>Ndz: Zamknięte</p>
              <p className="text-green-400 font-semibold mt-3">Pogotowie: 24/7</p>
            </div>
          </div>

          {/* Social media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">📱 Śledź nas</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mb-12">
          <div className="w-full h-64 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-gray-400">Happy Paws – ul. Zwierzyniecka 15, Kraków</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom footer */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Happy Paws. Wszystkie prawa zastrzeżone.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-green-400 transition-colors">Regulamin</a>
            <a href="#" className="hover:text-green-400 transition-colors">Mapa strony</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
