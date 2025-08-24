import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in">
                <span className="block xl:inline">Transform your</span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 xl:inline animate-pulse">
                  business intelligence
                </span>
              </h1>
              <p className="mt-3 text-base text-purple-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up">
                Unlock powerful insights with our comprehensive dashboard suite.
                Monitor analytics, manage users, track e-commerce metrics, and
                configure settings all in one intuitive platform.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-slide-up">
                <div className="rounded-md shadow-lg hover:shadow-purple-500/25 transition-all duration-500">
                  <Link
                    href="/analytics"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Floating elements */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
          <div className="absolute top-20 right-20 w-20 h-20 bg-purple-500 rounded-full opacity-60 animate-float"></div>
          <div
            className="absolute top-40 right-40 w-16 h-16 bg-pink-500 rounded-full opacity-40 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-60 right-10 w-12 h-12 bg-indigo-400 rounded-full opacity-50 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-10 right-60 w-8 h-8 bg-purple-300 rounded-full opacity-70 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-20 right-32 w-14 h-14 bg-pink-300 rounded-full opacity-40 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-40 right-24 w-10 h-10 bg-indigo-300 rounded-full opacity-60 animate-float"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
