"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
const Testoimonial = () => {
  return (
    <section>
      <h1 className="text-center">Clients Testimonial</h1>
      <h2 className="mb-[30px] text-[48px] font-bold text-center">
        Architectural excellence interior bliss
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto overflow-visible">
        <div className="relative z-0 bg-[url('/images/testimonial.jpg')] bg-cover bg-center min-h-[560px]">
          {/* <Image
            src={"/images/testimonial.jpg"}
            alt="testimonial image"
            width={850}
            height={534}
          /> */}
        </div>
        <div className="relative flex items-center px-4 ">
          <div className="relative z-20 md:-ml-28 -ml-6 w-full md:w-[65%] lg:w-[55%] max-w-[820px]">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
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
              className="team-swiper bg-transparent"
            >
              <SwiperSlide>
                <div className="flex bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto md:p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/team_img1.jpg"
                        alt="team member"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          name
                        </h3>
                        <p className="text-sm text-gray-500">role</p>
                      </div>
                      <div className="flex-shrink-0 text-6xl text-gray-200 opacity-50 font-serif">
                        <Quote size={80} />
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < 5
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed italic mt-2">
                      I recently attended their workshop, an transformative
                      experience. The content was engaging, the presenters were
                      knowledgeable and passionate I recen attended their
                      workshop, an transformative
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto md:p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/team_img1.jpg"
                        alt="team member"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          name
                        </h3>
                        <p className="text-sm text-gray-500">role</p>
                      </div>
                      <div className="flex-shrink-0 text-6xl text-gray-200 opacity-50 font-serif">
                        <Quote size={80} />
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < 5
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed italic mt-2">
                      I recently attended their workshop, an transformative
                      experience. The content was engaging, the presenters were
                      knowledgeable and passionate I recen attended their
                      workshop, an transformative
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto md:p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/team_img1.jpg"
                        alt="team member"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          name
                        </h3>
                        <p className="text-sm text-gray-500">role</p>
                      </div>
                      <div className="flex-shrink-0 text-6xl text-gray-200 opacity-50 font-serif">
                        <Quote size={80} />
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < 5
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed italic mt-2">
                      I recently attended their workshop, an transformative
                      experience. The content was engaging, the presenters were
                      knowledgeable and passionate I recen attended their
                      workshop, an transformative
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testoimonial;
