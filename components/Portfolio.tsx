"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
const Portfolio = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Aktuelle Projekte
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Verwandle deinen Raum.
              <br />
              Deine Traumküche
            </h2>
          </div>
          <div className="hidden md:flex space-x-2">
            <button
              aria-label="left"
              className="portfolio-prev w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="right"
              className="portfolio-next w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
            1280: {
              slidesPerView: 4.2,
            },
          }}
          navigation={{
            nextEl: ".portfolio-next",
            prevEl: ".portfolio-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="portfolio-swiper"
        >
          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img1.jpg"
                alt="Kitchen Portfolio 1"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img2.jpg"
                alt="Kitchen Portfolio 2"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img3.jpg"
                alt="Kitchen Portfolio 3"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img4.jpg"
                alt="Kitchen Portfolio 4"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img5.jpg"
                alt="Kitchen Portfolio 5"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img6.jpg"
                alt="Kitchen Portfolio 5"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img7.jpg"
                alt="Kitchen Portfolio 5"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img8.jpg"
                alt="Kitchen Portfolio 5"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img9.jpg"
                alt="Kitchen Portfolio 5"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img10.jpg"
                alt="Kitchen Portfolio 5"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative group cursor-pointer">
              <Image
                width={800}
                height={256}
                src="/images/portfolio/portfolio_img11.jpg"
                alt="Kitchen Portfolio 5"
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors rounded-lg"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
