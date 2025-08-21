import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Find<span className="text-yellow-500">N’</span>Dine
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover the best dining spots curated just for you.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} FindN’Dine
      </footer>
    </main>
  );
}
