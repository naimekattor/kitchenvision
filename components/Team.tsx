"use client";
import React from "react";
import { Card } from "./ui/card";
import { ArrowRight, Share2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Team = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Our Expert Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Unleash The Potential
            <br />
            Of Your Space
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
            className="team-swiper"
          >
            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/images/team_img1.jpg"
                    alt="Robert Fox"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0 left-8 z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Founder
                      </p>
                      <h4 className="font-bold text-lg">Robert Fox</h4>
                    </div>

                    <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded flex items-center justify-center">
                      <Share2 className="w-8 h-8 bg-black text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/images/team_img2.jpg"
                    alt="Robert Fox"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0 left-8 z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Founder
                      </p>
                      <h4 className="font-bold text-lg">Robert Fox</h4>
                    </div>

                    <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded flex items-center justify-center">
                      <Share2 className="w-8 h-8 bg-black text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/images/team_img3.jpg"
                    alt="Robert Fox"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0 left-8 z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Founder
                      </p>
                      <h4 className="font-bold text-lg">Robert Fox</h4>
                    </div>

                    <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded flex items-center justify-center">
                      <Share2 className="w-8 h-8 bg-black text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="/images/team_img2.jpg"
                    alt="Robert Fox"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0 left-8 z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Founder
                      </p>
                      <h4 className="font-bold text-lg">Robert Fox</h4>
                    </div>

                    <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded flex items-center justify-center">
                      <Share2 className="w-8 h-8 bg-black text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>

          {/* Pagination Dots */}
          <div className="team-pagination flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
