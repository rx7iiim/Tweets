"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BarChart3, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">Dashify</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                <Link
                  href="/analytics"
                  className="text-purple-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center"
                >
                  Analytics
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="/users"
                  className="text-purple-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center"
                >
                  Users
                </Link>
                <Link
                  href="/ecommerce"
                  className="text-purple-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center"
                >
                  E-commerce
                </Link>
                <Link
                  href="/settings"
                  className="text-purple-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Link
                href="/login"
                className="text-purple-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-200 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/analytics"
              className="text-purple-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Analytics
            </Link>
            <Link
              href="/users"
              className="text-purple-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Users
            </Link>
            <Link
              href="/ecommerce"
              className="text-purple-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              E-commerce
            </Link>
            <Link
              href="/settings"
              className="text-purple-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Settings
            </Link>
            <div className="pt-4 pb-3 border-t border-purple-800/50">
              <Link
                href="/login"
                className="text-purple-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="mt-2 block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
