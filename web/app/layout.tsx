import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing-page/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FindN'Dine | Discover Restaurants Effortlessly",
  description:
    "FindN'Dine helps you discover the best dining experiences with personalized recommendations powered by AI.",
  keywords: [
    "restaurants",
    "food finder",
    "dining",
    "AI recommendations",
    "FindN'Dine",
  ],
  authors: [{ name: "FindN'Dine Team" }],
  openGraph: {
    title: "FindN'Dine",
    description:
      "Discover restaurants and dining spots tailored to your taste.",
    url: "https://findndine.com",
    siteName: "FindN'Dine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FindN'Dine Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FindN'Dine",
    description:
      "Discover restaurants effortlessly with FindN'Dine’s AI-powered search.",
    images: ["/og-image.png"],
    creator: "@findndine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
