import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
// app/page.tsx
export default function Home() {
  const featuredUIs = [
    {
      id: 1,
      title: "adminit",
      description: "A clean analytics UI ",
      url: "/adminit",
      image: "/GxPBU--WMAEHY6K.jpeg",
    },
    {
      id: 2,
      title: "trackify",
      description: "clean ui",
      url: "/trakify",
      image: "/GxJz9qjWMAAqSyh.jpeg",
    },
    {
      id: 3,
      title: "tweets",
      description: "what you just saw",
      url: "#",
      image: "/Screenshot 2025-08-06 045634.png",
    },
  ];
  function TwitterIcon() {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500">TweetsUI</h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#gallery"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-500 transition"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px]" />
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text content */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-300">
                  Twitter UI Inspirations
                </span>
                <br />
                Brought to Life
              </h1>

              <p className="text-lg text-purple-100 mb-8">
                Discover beautiful Twitter UI concepts recreated with modern web
                technologies. Each design is interactive and ready to explore.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#gallery"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  View Gallery
                </Link>

                <Link
                  href="https://x.com/Abderrahim14431"
                  className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <TwitterIcon />
                  Follow Updates
                </Link>
              </div>
            </div>

            {/* Image showcase */}
            <div className="md:w-1/2 relative">
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 bg-gray-900">
                <Image
                  src="/Screenshot 2025-08-06 045634.png"
                  alt="Twitter UI showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured UI Recreations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredUIs.map((ui) => (
              <div
                key={ui.id}
                className=" bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="relative h-48 bg-gray-100 rounded-t-xl overflow-hidden group">
                  <Image
                    src={ui.image}
                    alt={`${ui.title} UI screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2RjZGNkYyIgZHk9Ii4zZW0iPkxvYWRpbmcgVUkgUHJldmlldzwvdGV4dD48L3N2Zz4="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {ui.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{ui.description}</p>
                  <a
                    href={ui.url}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    View Design
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="inline-block border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              View All Designs
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About This Project
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              TweetsUI is a personal project where I recreate interesting
              Twitter UI concepts that I find on Twitter. Each design is built
              with modern web technologies and made available as an interactive
              page.
            </p>
            <p className="text-lg text-gray-700">
              The goal is to showcase different design approaches, experiment
              with new UI patterns, and provide inspiration for other designers
              and developers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Suggest a UI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Found an interesting Twitter UI concept you'd like me to recreate?
            Let me know!
          </p>
          <a
            href="mailto:contact@tweetsui.com"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition shadow-lg text-lg"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">TweetsUI</h2>
              <p>Recreating Twitter UI designs one tweet at a time.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://x.com/Abderrahim14431"
                className="hover:text-white transition"
              >
                Twitter
              </a>
              <a
                href="https://github.com/rx7iiim"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} TweetsUI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
