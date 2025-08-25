"use client";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Your Next Meal
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Find trending restaurants, personalized picks, and hidden gems near
          you.
        </p>
      </section>

      {/* Trending Section */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"></div>
      </section>

      {/* Places You May Like Section */}
      <section className="px-6 py-10 ">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Places You May Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"></div>
      </section>

      {/* Nearby Section */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"></div>
      </section>
    </main>
  );
}
