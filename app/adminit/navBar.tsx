import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between space-x-40 border-2 border-black/30 rounded-2xl pl-8 pr-0 py-2 mt-2  relative overflow-hidden w-auto">
        <div className="flex items-center  gap-2">
          <Image
            height={25}
            width={25}
            src="/Frame.png"
            alt="adminit logo "
          ></Image>
          <h1 className="text-black text-lg font-bold ">Admint</h1>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Link href="#" className="text-gray-600 text-mg hover:text-black">
            Generate
          </Link>
          <Link href="#" className="text-gray-600 text-mg hover:text-black">
            Resources
          </Link>
          <Link href="#" className="text-gray-600 text-mg hover:text-black">
            Templates
          </Link>
          <Link href="#" className="text-gray-600 text-mg hover:text-black">
            Pricing
          </Link>
        </div>
        <div className=" ml-0 flex items-center justify-end ">
          <button className="bg-transparent text-black pr-0">Log in</button>
        </div>
        <>
          <div>
            <button className="bg-gray-900 rounded-lg absolute right-0 h-full top-0 px-3 cursor-pointer ml-0">
              Get Free Trial
            </button>
          </div>
        </>
      </div>
    </>
  );
}
