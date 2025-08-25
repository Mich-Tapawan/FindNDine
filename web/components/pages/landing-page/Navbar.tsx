"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between sticky top-0 z-50 px-4 py-1 xl:px-[4rem] xl:py-2 ease-in-out transition-colors duration-300
        ${scrolled ? "bg-white shadow-md mt-0" : "bg-transparent mt-5"} 
      `}
    >
      {/* Logo */}
      <div className="flex items-center">
        <h1
          className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300
            ${scrolled ? "text-gray-900" : "text-white"}
          `}
        >
          Find
          <span
            className={`transition-colors duration-300 ${
              scrolled ? "text-yellow-500" : "text-yellow-400"
            }`}
          >
            N’
          </span>
          Dine
        </h1>
      </div>

      {/* Desktop Nav Links */}
      <ul
        className={`hidden md:flex gap-10 text-md transition-colors duration-300 ${
          scrolled ? "text-gray-700" : "text-white"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Sign Up / Login */}
      <div className="hidden md:flex">
        <Link
          href="/signup"
          className={`px-4 py-1 font-semibold rounded transition-colors duration-300
            ${
              scrolled
                ? "bg-black text-white hover:opacity-80"
                : "bg-white text-black hover:opacity-80"
            }
          `}
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`focus:outline-none transition-colors duration-300 cursor-pointer ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Full-height Side Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-[40vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end mb-8 focus:outline-none text-gray-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Links */}
            <ul className="flex flex-col gap-6 text-lg text-gray-800">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" onClick={() => setMenuOpen(false)}>
                  Search
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 bg-black text-white rounded-lg text-center hover:opacity-80"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Optional backdrop */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
