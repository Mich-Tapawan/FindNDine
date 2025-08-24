"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Find<span className="text-yellow-500">N’</span>Dine
          </h2>
          <p className="mt-2 text-gray-400 max-w-xs">
            Discover restaurants effortlessly with AI-powered recommendations
            and review summaries.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href="/search" className="hover:text-yellow-500 transition">
            Search
          </Link>
          <Link href="/about" className="hover:text-yellow-500 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
        </div>

        {/* Contact / Social */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-white">Contact</h3>
          <p>Email: support@findndine.com</p>
          <p>Phone: +63 912 345 6789</p>
          <div className="flex gap-3 mt-2">
            {/* Replace with icons if desired */}
            <Link href="#" className="hover:text-yellow-500 transition">
              FB
            </Link>
            <Link href="#" className="hover:text-yellow-500 transition">
              IG
            </Link>
            <Link href="#" className="hover:text-yellow-500 transition">
              TW
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FindN’Dine. All rights reserved.
      </div>
    </footer>
  );
}
