import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CtaBanner = () => {
  return (
    <section className="">
      <div className="relative flex justify-center w-full p-4 font-sans">
        <div className="relative w-full container rounded overflow-hidden bg-[#333333] shadow-xl flex flex-col lg:flex-row items-center justify-between p-8 md:p-12">
          {/* Man's image - adjusted to fit within the container */}
          <div className="absolute bottom-0 left-0 h-full w-auto overflow-hidden">
            <Image
              width={400}
              height={500}
              src="/images/cta_image.png"
              alt="A man with blueprints"
              loading="lazy"
              className="h-full object-contain object-bottom w-auto"
            />
          </div>

          {/* Content - heading and button */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center lg:justify-end text-center lg:text-right space-y-8 md:space-y-0 md:space-x-8 z-10 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-lg md:max-w-xl lg:max-w-2xl text-center md:text-left">
              Ihre Traumküche
            </h2>
            <Link
              href="/contact"
              className="flex items-center space-x-2 px-8 py-4 bg-white text-[#333333] font-semibold rounded shadow-md transition-transform transform hover:scale-105"
            >
              <span>Jetzt zum Beratungstermin ! </span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
