"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import ScrollAnimation from "./ScrollAnimation";

const Hero = () => {
  return (
    <div className=" bg-white min-h-screen font-sans relative">
      <div className=" absolute bg-secondary top-0 left-0 h-[500px] w-full "></div>
      <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto py-16">
        <ScrollAnimation>
          <div className=" flex flex-col items-center text-left mb-12 lg:mb-0 z-10 relative ">
            {/* Decorative star-like icons */}
            <div className="flex space-x-2 mb-4 absolute md:left-0 -left-10 md:bottom-[250px] bottom-[220px] rotate-45">
              {/* <svg
                className="w-16 h-16 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12.585l-4.12 2.167.78-4.56-3.32-3.235 4.58-.665L10 2.298l2.08 4.195 4.58.665-3.32 3.235.78 4.56L10 12.585z" />
              </svg>
              <svg
                className="w-8 h-8 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12.585l-4.12 2.167.78-4.56-3.32-3.235 4.58-.665L10 2.298l2.08 4.195 4.58.665-3.32 3.235.78 4.56L10 12.585z" />
              </svg> */}
              <Image
                alt="star icon"
                width={64}
                height={64}
                className="w-full h-full relative rotate-[-38deg]"
                src="/images/star.png"
              />
            </div>

            {/* Main heading */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight mb-4 text-center md:w-3/4 w-full ">
              Mehr als Standard: Küchen für Menschen mit besonderen Ansprüchen.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-500 max-w-md mb-8 text-center lg:text-left">
              Bei uns bekommen Sie keine Küche von der Stange. Wir hören genau zu, gehen auf Ihre Wünsche ein und entwickeln Lösungen, die perfekt zu Ihrem Leben passen – funktional, ästhetisch und einzigartig. Ob raffinierte Details, innovative Technik oder besondere Materialien: Wir machen Ihre Traumküche möglich.
            </p>

            <div className="relative md:block hidden">
              <Image
                src={"/images/hero_img1.jpg"}
                alt="hero image"
                width={300}
                height={323}
                className="rounded-lg shadow-lg w-[300px] h-[323px] z-10"
              />
              <div className="absolute -top-3 -right-4 w-[300px] h-[350px] border-[#A6A182] border-2  -z-10"></div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          {/* Container for the right side (Images and client testimonials) */}
          <div className=" relative flex flex-col items-center lg:items-end">
            {/* Main image with rounded corners and subtle shadow */}
            <div className="relative">
              {/* Border element - positioned behind */}
              <div className="absolute top-0 left-0 w-[calc(100%-20px)] h-[calc(100%+20px)] border-[#A6A182] border-2 z-20"></div>

              {/* Image container - positioned in front */}
              <div className="relative z-10 ml-4 mt-4 rounded overflow-hidden shadow-2xl">
                <Image
                  width={750}
                  height={450}
                  src="/images/hero.jpg"
                  alt="Living Room"
                  className="w-[640px] md:h-[750px] h-[450px] object-cover"
                />
              </div>
            </div>

            {/* Floating client testimonial box */}
            <div className="absolute right-0 bottom-0 mr-16 mb-4 md:mr-8 md:mb-8 lg:mr-16 lg:mb-16 bg-white rounded animate-bounce shadow-lg p-4 flex items-center justify-between space-x-4 min-w-[200px] z-10">
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="/images/tesPerson1.jpg"
                  alt="Profile 1"
                />
                <Image
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="/images/tesPerson1.jpg"
                  alt="Profile 2"
                />
                <Image
                  width={32}
                  height={32}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="/images/tesPerson1.jpg"
                  alt="Profile 3"
                />
              </div>
              <div className="flex-1 text-right">
                <div className="text-xl font-bold text-gray-900">
                  <CountUp
                    end={80}
                    enableScrollSpy
                    scrollSpyDelay={1000}
                    suffix="+"
                  />
                </div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Container for the left side content (Text and icons) */}
    </div>
  );
};

export default Hero;
