export default function CoffeeHero() {
  return (
    <section className="min-h-screen bg-white md:bg-gradient-to-br md:from-orange-50 md:to-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Brew the Perfect Cup
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover premium coffee from around the world. Fresh, handpicked, and delivered to your door.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors">
                Order Now
              </button>
              <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Coffee image placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-8xl">☕</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
