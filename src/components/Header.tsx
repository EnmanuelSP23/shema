"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-pink-200 text-primary sticky top-0 z-50 shadow-sm border-b border-pink-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            SHEMA
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-pink-300">
            <Link
              href="/"
              className="block py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
