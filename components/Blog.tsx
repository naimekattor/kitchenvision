"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Folder, Share2 } from "lucide-react";

const Blog = () => {
  const paginationRef = useRef(null);
  return (
    <section className="py-20">
      <div className="container mx-auto ">
        <div className="text-start mb-12">
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Latest Blog And News
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Crafting spaces that the reflect your style
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              el: ".team-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="team-swiper py-8"
          >
            <SwiperSlide>
              <div className="relative bg-white rounded overflow-visible py-16">
                <img
                  src={`/images/blog_img1.jpg`}
                  alt="Blog Image"
                  className="w-full h-80 object-cover rounded"
                />
                <div className="absolute bottom-6 left-4 right-4 bg-[#F8F8F8] px-4 py-3 rounded ">
                  <div className="flex items-center gap-2 mb-2">
                    <span>
                      <Folder size={16} />
                    </span>
                    <p>Urban Oasis</p>
                  </div>
                  <h3 className="text-sm text-gray-500 mb-1">
                    Redefining the concept of living
                  </h3>
                  <h4 className="font-bold text-lg">
                    There are many variations of...
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative bg-white rounded overflow-visible py-16">
                <img
                  src={`/images/blog_img2.jpg`}
                  alt="Blog Image"
                  className="w-full h-80 object-cover rounded"
                />
                <div className="absolute bottom-6 left-4 right-4 bg-[#F8F8F8] px-4 py-3 rounded ">
                  <div className="flex items-center gap-2 mb-2">
                    <span>
                      <Folder size={16} />
                    </span>
                    <p>Urban Oasis</p>
                  </div>
                  <h3 className="text-sm text-gray-500 mb-1">
                    Redefining the concept of living
                  </h3>
                  <h4 className="font-bold text-lg">
                    There are many variations of...
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative bg-white rounded overflow-visible py-16">
                <img
                  src={`/images/blog_img1.jpg`}
                  alt="Blog Image"
                  className="w-full h-80 object-cover rounded"
                />
                <div className="absolute bottom-6 left-4 right-4 bg-[#F8F8F8] px-4 py-3 rounded ">
                  <div className="flex items-center gap-2 mb-2">
                    <span>
                      <Folder size={16} />
                    </span>
                    <p>Urban Oasis</p>
                  </div>
                  <h3 className="text-sm text-gray-500 mb-1">
                    Redefining the concept of living
                  </h3>
                  <h4 className="font-bold text-lg">
                    There are many variations of...
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative bg-white rounded overflow-visible py-16">
                <img
                  src={`/images/blog_img3.jpg`}
                  alt="Blog Image"
                  className="w-full h-80 object-cover rounded"
                />
                <div className="absolute bottom-6 left-4 right-4 bg-[#F8F8F8] px-4 py-3 rounded ">
                  <div className="flex items-center gap-2 mb-2">
                    <span>
                      <Folder size={16} />
                    </span>
                    <p>Urban Oasis</p>
                  </div>
                  <h3 className="text-sm text-gray-500 mb-1">
                    Redefining the concept of living
                  </h3>
                  <h4 className="font-bold text-lg">
                    There are many variations of...
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Pagination Dots */}
          <div
            ref={paginationRef}
            className="team-pagination flex justify-center mt-8 space-x-2"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
