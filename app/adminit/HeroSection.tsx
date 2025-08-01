import Image from "next/image";
import React from "react";
import { ArrowRight, FileText, Mic, LayoutGrid, Video } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center justify-baseline space-x-1 overflow-hidden flex-nowrap">
      <div className="flex justify-between items-center w-full max-w-3xl mx-auto  mb-2 px-0">
        <Image
          src="/Icon Container l.svg"
          height={60}
          width={60}
          alt="icon"
        ></Image>
        <div className="border-2 rounded-xl border-black/30 text-gray-950 bg-transparent relative py-0.5 px-1 flex items-center justify-between">
          <Image
            width={15}
            height={15}
            src="/Header Icon Container.png"
            alt="icon"
            className="mr-2"
          ></Image>
          <h1 className="text-xs mr-6">4K+ brands used Admint today</h1>

          <button className="absolute top-0 right-0 border-l-2 border-black/30 h-full ml/2 p-1">
            <Image
              width={10}
              height={10}
              src="/Vectorrihgt.svg"
              alt="icon"
              className=""
            ></Image>
          </button>
        </div>
        <Image
          src="/Icon Container r.svg"
          height={60}
          width={60}
          alt="icon"
        ></Image>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mt-2 text-gray-950">
          Generate publish-ready
        </h1>
        <h1 className="text-5xl font-bold text-center mt-2 text-gray-950">
          video ads with Admint
        </h1>
        <div className="flex justify-between items-center w-full max-w-3xl mx-auto mt-2 mb-6 px-0">
          <Image
            src="/Icon Container lb.png"
            height={60}
            width={60}
            alt="icon"
          ></Image>
          <p className="text-gray-600 text-lg text-center mt-4">
            Creating world-class ads that convert, done just with the click of a
            button
          </p>
          <Image
            src="/Icon Container rb.png"
            height={60}
            width={60}
            alt="icon"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto">
        {/* Textarea and Button */}
        <div className="relative w-3/4 rounded-xl border border-black/30  text-sm focus:outline-none focus:ring-2 focus:ring-black/80 resize-none min-h-32">
          <textarea
            className=" w-full px-4 py-3 pr-40 border-tranparont  text-sm focus:outline-none focus:ring-2 focus:ring-transparent text-gray-950 "
            placeholder="Tell me few words about your ad idea..."
            rows={3}
          />
          <button className="absolute buttom-0  right-0 bg-black text-white text-sm font-medium rounded-lg px-4 py-2 flex items-center gap-1 hover:bg-gray-900 transition">
            Generate Video Ad <ArrowRight size={16} />
          </button>
        </div>

        {/* Buttons Row */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-mt transition">
            <FileText size={16} /> Video scripts
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition">
            <Mic size={16} /> AI Voice-over
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition">
            <LayoutGrid size={16} /> Visual Moodboard
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition">
            <Video size={16} /> AI videos
          </button>
        </div>
      </div>
    </div>
  );
}
