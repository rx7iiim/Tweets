import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full px-8">
      <div className="flex items-center w-full md:w-2/4 gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <Image src="/Vector.png" alt="logo" width={25} height={25} />
          <h1 className="whitespace-nowrap">Trackify</h1>
        </div>
        <div className="hidden md:flex items-center justify-between w-full box-border relative">
          <div className="absolute  px-2 py-4 flex items-center justify-between ">
            <Link
              href="#"
              className="whitespace-nowrap px-2 text-gray-500 text-sm hover:text-white"
            >
              Feature
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap px-2 text-gray-500 text-sm hover:text-white"
            >
              Prices
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap px-2 text-gray-500 text-sm hover:text-white"
            >
              Use Cases
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap px-2 text-gray-500 text-sm hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap px-2 text-gray-500 text-sm hover:text-white"
            >
              Support
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap px-2 text-gray-500 text-sm hover:text-white"
            >
              Charts
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button className=" cursor-pointer whitespace-nowrap text-sm md:text-base px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 hover:bg-gray-100 hover:text-gray-900">
          Log in
        </button>
        <button className="cursor-pointer whitespace-nowrap text-sm md:text-base bg-gray-700 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
}
