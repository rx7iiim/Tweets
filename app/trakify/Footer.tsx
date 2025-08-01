import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-40">
      <div className="flex justify-center items-center">
        <h1 className="text-mg mx-0 text-gray-400">Tracking data from </h1>
        <h1 className="text-mg mx-0 text-gray-100 text-bold">
          1000+ most popular
        </h1>
        <h1 className="text-mg mx-0 text-gray-400"> stores worldwide</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 place-items-center">
        {/* Shopify Logo */}
        <div className="flex items-center justify-center p-3 w-full h-full">
          <Image
            src="/Shopify_logo_2018 1.png"
            alt="Shopify logo"
            width={150} // Increased from 100
            height={150} // Increased from 100
            className="object-contain w-full h-auto max-h-[120px]"
          />
        </div>

        {/* Amazon Logo */}
        <div className="flex items-center justify-center p-3 w-full h-full">
          <Image
            src="/Amazon_logo 1.png"
            alt="Amazon logo"
            width={150} // Increased from 100
            height={135} // Increased from 90 (maintaining original 10:9 ratio)
            className="object-contain w-full h-auto max-h-[120px]"
          />
        </div>

        {/* eBay Logo */}
        <div className="flex items-center justify-center p-3 w-full h-full">
          <Image
            src="/EBay Logo.png"
            alt="eBay logo"
            width={150} // Increased from 100
            height={150} // Increased from 100
            className="object-contain w-full h-auto max-h-[120px]"
          />
        </div>

        {/* Etsy Logo */}
        <div className="flex items-center justify-center p-3 w-full h-full">
          <Image
            src="/Etsy_logo 1.png"
            alt="Etsy logo"
            width={150} // Increased from 100
            height={150} // Increased from 100
            className="object-contain w-full h-auto max-h-[120px]"
          />
        </div>

        {/* AliExpress Logo */}
        <div className="flex items-center justify-center p-3 w-full h-full">
          <Image
            src="/Aliexpress_logo 1.png"
            alt="AliExpress logo"
            width={150} // Increased from 100
            height={150} // Increased from 100
            className="object-contain w-full h-auto max-h-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
