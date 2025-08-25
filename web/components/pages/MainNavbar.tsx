"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Compass, User } from "lucide-react";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/account", label: "Account", icon: User },
];

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between sticky top-0 z-50 px-4 py-2 xl:px-[4rem] bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
          Find
          <span className="text-yellow-500">N’</span>
          Dine
        </h1>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-700">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-2 transition-colors ${
                  isActive ? "text-yellow-500" : "hover:text-black"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none text-gray-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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

        {/* Slide-in Side Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-[60vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
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
                className="h-7 w-7"
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
              {navItems.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backdrop */}
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
