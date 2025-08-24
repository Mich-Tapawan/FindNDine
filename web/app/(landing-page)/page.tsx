"use client";

import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Testimonials from "@/components/landing-page/Testimonials";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b -mt-17 xl:-mt-20 from-white to-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-screen flex items-center xl:px-[5rem]"
        style={{ backgroundImage: "url('/landing-page/lounge.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-3xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }} // Use number array easing
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 xl:w-[80%]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            Discover Your Next Favorite Restaurant Today
          </motion.h1>

          <motion.p
            className="text-lg md:text-lg text-gray-200 mb-6 xl:w-[80%]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
          >
            FindN’Dine helps you discover the best restaurants nearby with
            AI-powered recommendations. It also summarizes reviews into clear
            pros and cons so you can decide faster and smarter.
          </motion.p>

          <motion.div
            className="flex mb-5 gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.4 }}
          >
            <Button
              variant="default"
              className="bg-yellow-500 text-white px-7 py-5 cursor-pointer hover:bg-yellow-600"
            >
              Explore
            </Button>
            <Button
              variant="outline"
              className="border-white text-white px-7 py-5 cursor-pointer hover:bg-white hover:text-black"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
