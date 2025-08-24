import Link from "next/link";

export default function CTASection() {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to transform your business?
        </h2>
        <p className="mt-4 text-lg text-purple-200 max-w-3xl mx-auto">
          Join thousands of companies that use our dashboard platform to make
          data-driven decisions and accelerate growth.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/register"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
