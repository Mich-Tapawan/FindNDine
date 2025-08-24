"use client";

import { motion, Variants } from "framer-motion";

const features = [
  {
    title: "Personalized Recommendations Just for You",
    description:
      "Your tastes guide our suggestions for an unforgettable dining experience.",
    imageUrl: "/landing-page/food_platter.jpg",
    imageAlt: "Personalized recommendations",
  },
  {
    title: "Stay Updated with Trending Restaurants",
    description: "Explore the latest hotspots that everyone is talking about.",
    imageUrl: "/landing-page/restaurant.jpg",
    imageAlt: "Trending restaurants",
  },
  {
    title: "AI-Generated Summaries for Quick Insights",
    description:
      "Get concise overviews highlighting each venue’s strengths and weaknesses.",
    imageUrl: "/landing-page/food_review.png",
    imageAlt: "AI-generated summaries",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as any,
    },
  },
};

export default function Features() {
  return (
    <section className="py-16 xl:py-30">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p className="text-md text-gray-600 uppercase mb-2">Discover</p>
        <h2 className="text-3xl font-bold mb-4">
          How Our AI Recommends Your <br />
          Next Meal
        </h2>
        <p className="text-gray-600 mb-12">
          Our AI analyzes your unique preferences and dining history to suggest
          the perfect restaurants.
          <br /> By leveraging geolocation, it ensures you find the best options
          nearby.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
              variants={cardVariants}
            >
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                <img
                  src={feature.imageUrl} // <-- make sure each feature has an imageUrl field
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 border border-black rounded cursor-pointer hover:bg-gray-100">
            Explore
          </button>
          <button className="px-6 py-2 text-gray-700 rounded cursor-pointer hover:underline">
            Learn More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
