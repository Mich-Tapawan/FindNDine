import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Food Blogger",
    review:
      "FindN'Dine transformed my dining experiences completely! I’ve discovered amazing restaurants I never knew existed.",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Restaurant Owner",
    review:
      "The AI recommendations are spot on! I can’t imagine dining without it now.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Tech Enthusiast",
    review:
      "I love how it summarizes reviews into pros and cons. Choosing where to eat has never been easier!",
    rating: 5,
  },
  {
    name: "Carlos Ramirez",
    role: "Travel Blogger",
    review:
      "Whether I’m exploring a new city or my hometown, FindN'Dine always finds hidden gems for me.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold">Customer Testimonials</h2>
        <p className="text-gray-600 mt-2">
          Discover how our users love FindN'Dine!
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-8 xl:mb-[10rem]">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            {/* Rating */}
            <div className="flex mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 mb-6">"{t.review}"</p>

            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 mt-16 flex flex-col md:flex-row items-center gap-8  xl:mb-[5rem]"
      >
        {/* Text Content */}
        <div className="flex-1 text-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Dining Revolution
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Experience the future of dining with personalized recommendations
            tailored just for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 transition">
              Sign Up
            </button>
            <button className="px-6 py-3 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="/landing-page/cta.png"
            alt="Dining Experience"
            className="w-full max-h-[20rem] rounded-lg shadow-lg"
          />
        </div>
      </motion.section>
    </section>
  );
}
