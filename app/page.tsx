import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      {/* Navigation header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">🐾 Happy Paws</div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">O nas</a>
            <a href="#team" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Zespół</a>
            <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Cennik</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Kontakt</a>
          </nav>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
            Umów wizytę
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="pt-16">
        <HeroSection />
      </div>

      {/* About */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Team */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Pricing */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Contact */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
