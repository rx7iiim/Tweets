import React from "react";

export default function Hero() {
  return (
    <div className="w-full md:w-2/5 flex flex-col justify-center items-center text-center px-4 space-y-3">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Stay Ahead With Real
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Time Price Alerts
        </h1>
      </div>
      <p className="text-sm md:text-base text-gray-500 max-w-xs md:max-w-sm leading-tight">
        Automatically monitor competitor prices and adjust your offers to stay
        competitive 24/7.
      </p>
      <div className="flex items-center justify-center gap-2 w-full max-w-xs">
        <button className="w-full bg-gray-100 text-black py-2 text-sm md:text-base cursor-pointer rounded-xl transition-all duration-200 hover:bg-gray-200 hover:shadow-sm">
          Start Tracking
        </button>
        <button className="w-full bg-gray-900 text-white py-2 text-sm md:text-base cursor-pointer rounded-xl transition-all duration-200 hover:bg-gray-800 hover:shadow-md">
          See live Charts
        </button>
      </div>
    </div>
  );
}
