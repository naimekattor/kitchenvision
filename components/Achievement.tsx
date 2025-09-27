"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, BarChart3, Building2, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import CountUp from "react-countup";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

const reviews = [
  {
    img: "/images/brand1.png",
  },
  {
    img: "/images/brand2.png",
  },
  {
    img: "/images/brand3.png",
  },
  {
    img: "/images/brand4.png",
  },
  {
    img: "/images/brand5.png",
  },
  {
    img: "/images/brand6.png",
  },
  {
    img: "/images/brand8.png",
  },
  {
    img: "/images/brand9.png",
  },
  {
    img: "/images/brand10.png",
  },
  {
    img: "/images/brand11.png",
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div>
        <Image
          src={img}
          width={137}
          height={136}
          alt="brand logo"
          className=""
          loading="lazy"
        />
      </div>
    </figure>
  );
};

const Achievement = () => {
  return (
    <section className="pt-16 px-4 bg-gray-50">
      <div>
        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>

        {/* Background Section with overlay */}
        <div
          className="relative
            pt-0 pr-0 pb-[90px] pl-0 
            mt-0 mr-0 mb-0 ml-0
            bg-[url('/images/shape.png')] 
            bg-no-repeat 
            bg-[length:inherit] 
            bg-scroll 
            bg-[0_100%] 
            shadow-none"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#f7f7f7]/80"></div>

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center container mx-auto">
            <ScrollAnimation
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  Unsere Leistung
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Küchen & Wohnräume, die begeistern – mit Erfahrung und
                  Leidenschaft.
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Als erfahrenes Küchenstudio in Haag in Oberbayern planen und
                  realisieren wir seit vielen Jahren maßgeschneiderte
                  Einbauküchen und Wohnmöbel. Von der persönlichen Beratung über
                  die individuelle Küchenplanung bis hin zur präzisen Montage
                  begleiten wir unsere Kunden im Umkreis von bis zu 100 km und
                  auf Anfrage auch darüber hinaus. Unser Anspruch: Räume zu
                  schaffen, die nicht nur funktional sind, sondern Ihr Zuhause
                  einzigartig machen. Eine CONTE-Küche steht für Qualität im
                  gehobenen Segment – langlebig, präzise gefertigt und
                  durchdacht bis ins Detail. Und das zu einem Preis, der oft
                  deutlich günstiger ist, als man erwartet.
                </p>
                <Link href={"/about"}>
                  <Button className="h-12 w-[150px]">
                    Mehr erfahren <ArrowRight />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center bg-white px-4 py-5 rounded shadow-lg">
                <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp
                    end={1000}
                    enableScrollSpy
                    scrollSpyDelay={2000}
                    suffix="+"
                  />
                </div>
                <p className="text-muted-foreground">
                  Traumküchen geplant und umgesetzt
                </p>
              </div>

              <div className="text-center bg-white px-4 py-5 rounded shadow-lg">
                <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <CountUp
                    end={7}
                    enableScrollSpy
                    scrollSpyDelay={2000}
                    suffix=""
                  />
                </div>
                <p className="text-muted-foreground">
                  Team mit sieben Mitgliedern
                </p>
              </div>

              <ScrollAnimation
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="text-center bg-white px-4 py-5 rounded shadow-lg">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp
                      end={110}
                      enableScrollSpy
                      scrollSpyDelay={2000}
                      suffix="+"
                    />
                  </div>
                  <p className="text-muted-foreground">tolle Bewertungen</p>
                </div>
              </ScrollAnimation>
              {/* <ScrollAnimation
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="text-center bg-white p-4 rounded shadow-lg">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp
                      end={30}
                      enableScrollSpy
                      scrollSpyDelay={1000}
                      suffix="+"
                    />
                  </div>
                  <p className="text-muted-foreground">Wining Award</p>
                </div>
              </ScrollAnimation> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
