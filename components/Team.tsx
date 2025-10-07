"use client";
import React from "react";
import { Card } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
const Team = () => {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Unser Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Spezialisten in jedem Bereich.
            <br />
            Gemeinsam für Ihre Traumküche.
          </h2>
        </div>

        <div className="relative ">
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
                  <Image
                    width={800}
                    height={376}
                    src="/images/team_img1.jpg"
                    alt="Daniele Conte"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0  z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Inhaber und Geschäftsführung
                      </p>
                      <h4 className="font-bold text-lg">Daniele Conte</h4>
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    width={800}
                    height={376}
                    src="/images/team_img2.jpg"
                    alt="Valentina Conte"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0  z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Buchhaltung und Verwaltung
                      </p>
                      <h4 className="font-bold text-lg">Valentina Conte</h4>
                    </div>

                    {/* <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded flex items-center justify-center">
                      <Share2 className="w-8 h-8 bg-black text-white" />
                    </div> */}
                  </div>
                </div>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    width={800}
                    height={376}
                    src="/images/team_img3.jpg"
                    alt="Filip"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0  z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Planung und Sachbearbeitung
                      </p>
                      <h4 className="font-bold text-lg">Filip</h4>
                    </div>

                    {/* <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded flex items-center justify-center">
                      <Share2 className="w-8 h-8 bg-black text-white" />
                    </div> */}
                  </div>
                </div>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    width={800}
                    height={376}
                    src="/images/team_img4.jpg"
                    alt="Enrico"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0  z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Montageleitung
                      </p>
                      <h4 className="font-bold text-lg">Enrico</h4>
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="p-0 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    width={800}
                    height={376}
                    src="/images/team_img5.jpg"
                    alt="Ismet"
                    className="w-full h-94 object-cover"
                  />
                  <div className="p-6 absolute bottom-0  z-10 bg-white w-full">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground mb-1">
                        Montage
                      </p>
                      <h4 className="font-bold text-lg">Ismet</h4>
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
