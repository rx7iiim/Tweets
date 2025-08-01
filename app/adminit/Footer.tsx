import Image from "next/image";

export default function TrustedCompanies() {
  return (
    <div className="flex flex-col items-center w-full py-3">
      {/* Title */}
      <p className="text-sm md:text-base text-gray-800 mb-6 text-center">
        Trusted by more than 1,000+ companies
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-0 py-0 bg-white">
          <Image src="/homey.svg" alt="Homey" width={130} height={130} />
        </div>

        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-0 py-0 bg-white">
          <Image src="/min.svg" alt="Mindfulness" width={130} height={130} />
        </div>

        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-0 py-0 bg-white">
          <Image src="/blo.svg" alt="Blossom" width={130} height={130} />
        </div>

        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-0 py-0 bg-white">
          <Image src="/pro.svg" alt="ProLine" width={130} height={130} />
        </div>

        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-0 py-0 bg-white">
          <Image src="/lun.svg" alt="Luminous" width={130} height={130} />
        </div>
      </div>
    </div>
  );
}
