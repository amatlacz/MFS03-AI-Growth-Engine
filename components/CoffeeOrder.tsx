"use client";

import { useState } from "react";

export default function CoffeeOrder() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");

  const sizes = [
    { id: "small", name: "Small", volume: "8oz" },
    { id: "medium", name: "Medium", volume: "12oz" },
    { id: "large", name: "Large", volume: "16oz" },
  ];

  const price = 26;
  const total = price * quantity;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Product image */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl flex items-center justify-center mb-8 shadow-xl">
              <div className="text-9xl">☕</div>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <span className="text-4xl">☕</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Order details */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold text-gray-900">
                  Cappuccino Creamy
                </h1>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-xl">
                  ♡
                </button>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                A smooth and velvety cappuccino made with the finest espresso
                and silky steamed milk foam.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 font-bold">
                  4.9 (328 reviews)
                </span>
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <label className="text-gray-900 font-bold text-lg mb-4 block">
                Size
              </label>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`py-4 px-4 rounded-xl font-bold transition-all ${
                      selectedSize === size.id
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <div>{size.name}</div>
                    <div className="text-sm opacity-75">{size.volume}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-8">
              <label className="text-gray-900 font-bold text-lg mb-4 block">
                Quantity
              </label>
              <div className="flex items-center gap-6 bg-gray-100 rounded-xl p-4 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-gray-900 w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-bold">Subtotal:</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${price.toFixed(2)} × {quantity}
                </span>
              </div>
              <div className="border-t border-orange-200 pt-4 flex justify-between items-center">
                <span className="text-gray-900 font-bold text-lg">Total:</span>
                <span className="text-4xl font-bold text-orange-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Add to cart button */}
            <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-colors text-lg shadow-lg hover:shadow-xl mb-4">
              Add to Cart
            </button>

            {/* Continue shopping */}
            <button className="w-full border-2 border-orange-600 text-orange-600 font-bold py-4 rounded-xl hover:bg-orange-50 transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
