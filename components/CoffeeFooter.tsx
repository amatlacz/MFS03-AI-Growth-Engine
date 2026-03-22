export default function CoffeeFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main footer */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">☕ CoffeeShop</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing premium coffee from around the world directly to your cup.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Browse Coffee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Recipes
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get 10% off your first order
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom footer */}
        <div className="grid md:grid-cols-3 gap-8 text-gray-400 text-sm">
          <div>
            <p>🏪 Store Hours</p>
            <p className="mt-2">Mon-Fri: 7:00 AM - 9:00 PM</p>
            <p>Sat-Sun: 8:00 AM - 10:00 PM</p>
          </div>

          <div className="text-center">
            <p className="mb-4">Follow Us</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                𝕏
              </a>
            </div>
          </div>

          <div className="text-right">
            <p className="mb-2">&copy; 2024 CoffeeShop. All rights reserved.</p>
            <div className="flex justify-end gap-6">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
