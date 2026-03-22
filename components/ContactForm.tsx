"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Kontakt
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mamy pytania? Piszcie!
          </h2>
          <p className="text-xl text-gray-600">
            Skontaktuj się z nami – odpowiemy najszybciej jak się da
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-green-100">
          {submitted && (
            <div className="mb-6 bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg">
              ✓ Dziękujemy! Wiadomość została wysłana. Odezwiemy się wkrótce!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Imię i nazwisko
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Jan Kowalski"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                placeholder="jan@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
              placeholder="+48 123 456 789"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Treść wiadomości
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors resize-none"
              placeholder="Napisz swoją wiadomość..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
}
