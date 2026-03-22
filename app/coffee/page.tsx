import CoffeeHero from "@/components/CoffeeHero";
import CoffeeMenu from "@/components/CoffeeMenu";
import CoffeeOrder from "@/components/CoffeeOrder";
import CoffeeFooter from "@/components/CoffeeFooter";

export const metadata = {
  title: "CoffeeShop - Premium Coffee Delivery",
  description: "Discover and order premium coffee from around the world",
};

export default function CoffeePage() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      {/* Navigation header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-orange-600">☕</span> CoffeeShop
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Coffee
            </a>
            <a href="#order" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Order
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About
            </a>
          </nav>
          <div className="flex gap-4 items-center">
            <button className="text-2xl hover:text-orange-600 transition-colors">
              🛒
            </button>
            <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-bold">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="pt-16">
        <CoffeeHero />
      </div>

      {/* Menu */}
      <div id="menu">
        <CoffeeMenu />
      </div>

      {/* Order */}
      <div id="order">
        <CoffeeOrder />
      </div>

      {/* Footer */}
      <CoffeeFooter />
    </main>
  );
}
