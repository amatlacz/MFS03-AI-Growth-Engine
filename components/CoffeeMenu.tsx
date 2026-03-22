"use client";

import { useState } from "react";

const coffeeProducts = [
  {
    id: 1,
    name: "Espresso Classic",
    price: 24,
    image: "☕",
    rating: 4.8,
    description: "Strong and bold",
  },
  {
    id: 2,
    name: "Cappuccino Creamy",
    price: 28,
    image: "🤎",
    rating: 4.9,
    description: "Smooth and velvety",
  },
  {
    id: 3,
    name: "Latte Delight",
    price: 26,
    image: "☕",
    rating: 4.7,
    description: "Balanced and smooth",
  },
  {
    id: 4,
    name: "Mocha Premium",
    price: 30,
    image: "🍫",
    rating: 4.9,
    description: "Chocolate blended",
  },
  {
    id: 5,
    name: "Americano Sharp",
    price: 22,
    image: "☕",
    rating: 4.6,
    description: "Bold and punchy",
  },
  {
    id: 6,
    name: "Macchiato Rich",
    price: 27,
    image: "☕",
    rating: 4.8,
    description: "Rich and concentrated",
  },
];

export default function CoffeeMenu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Coffee" },
    { id: "espresso", name: "Espresso" },
    { id: "milk", name: "Milk Based" },
    { id: "specialty", name: "Specialty" },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4">
            Our Selection
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Premium Coffee Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked beans from the finest coffee regions around the world
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Coffee grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeProducts.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 duration-300"
            >
              {/* Product image */}
              <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center relative overflow-hidden group">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {coffee.image}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-50 transition-colors">
                  ♡
                </button>
              </div>

              {/* Product info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {coffee.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{coffee.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(coffee.rating)
                            ? "text-orange-400"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm font-semibold">
                    {coffee.rating}
                  </span>
                </div>

                {/* Price and button */}
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-orange-600">
                    ${coffee.price}
                  </div>
                  <button className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors font-bold text-xl">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
