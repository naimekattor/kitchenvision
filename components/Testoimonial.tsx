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
      <h1 className="text-center">Kundenstimmen</h1>
      <h2 className="mb-[30px] text-[48px] font-bold text-center">
        Architektonische Exzellenz. Zufriedenheit, die bleibt.
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
                        src="/images/tesPerson1.jpg"
                        alt="team member"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          Felix Moser
                        </h3>
                        {/* <p className="text-sm text-gray-500">
                          Inhaber und Geschäftsführung
                        </p> */}
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
                      Sehr gute Adresse für tolle Küchen. Die Beratung top.
                      Nicht nur werden hervorragende Vorschläge gemacht, sondern
                      auch die eigenen Wünsche in die Planung einbezogen und
                      wenn nötig angepasst. Wir hatten immer das Gefühl „unsere“
                      Küche zu ... Mehr
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto md:p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/tesPerson2.jpg"
                        alt="team member"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          Rupert Moka
                        </h3>
                        {/* <p className="text-sm text-gray-500">role</p> */}
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
                      Alles Super, von Anfang bis Ende! Wir können dieses
                      Küchenstudio nur wärmstens empfehlen. Bei der Planung und
                      Beratung werden genau auf die Wünsche des Kunden ...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto md:p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/tesPerson3.jpg"
                        alt="team member"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          Karsten
                        </h3>
                        {/* <p className="text-sm text-gray-500">role</p> */}
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
                      Wir sind nach einigen Beratungen bei den üblichen
                      Verdächtigen durch einen .. glucklichen Zufall auf Conte
                      Küchen gestoßen und haben es nicht bereut!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto md:p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/tesPerson4.jpg"
                        alt="team member"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">
                          Gabriele Gruber
                        </h3>
                        {/* <p className="text-sm text-gray-500">role</p> */}
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
                      Dank Euch liebes Team, lieber Christian haben wir unseren
                      Traum einer perfekten Küche realisieren können. Von der
                      Planung bis zum Einbau war alles erstklassig...Mehr
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
