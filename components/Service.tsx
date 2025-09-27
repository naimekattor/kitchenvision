"use client";
import React, { useEffect, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { FaKitchenSet } from "react-icons/fa6";
import { BiCabinet } from "react-icons/bi";
import { MdOutlineCountertops } from "react-icons/md";
import Image from "next/image";
import { PopupModal } from "react-calendly";
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const root = document.getElementById("__next") ?? document.body;
    setRootElement(root);
  }, []);
  return (
    <div className="bg-white p-8">
      <div className="bg-gray-800 rounded-md w-16 h-16 flex items-center justify-center relative bottom-15">
        <span className="text-[30px] text-white">{icon}</span>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      <button
        aria-label="book"
        className="font-semibold text-gray-900 flex items-center"
        onClick={() => setShowModal(true)}
      >
        Termin Buchen
        <span className="ml-2">→</span>
      </button>
      {showModal && rootElement && (
        <PopupModal
          url="https://calendly.com/contekuechen"
          onModalClose={() => setShowModal(false)}
          open={showModal}
          rootElement={rootElement}
        />
      )}
    </div>
  );
};
const Service = () => {
  return (
    <div className="bg-[#f8f9fa] font-sans overflow-hidden">
      <div
        className="container mx-auto "
        style={{
          backgroundImage: "url('/images/service_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          {/* Left Content Section */}
          <div className="text-center lg:text-left py-20">
            <p className="text-sm font-semibold tracking-widest text-gray-700 uppercase mb-4">
              Unser Service
            </p>
            <h4 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Lebensräume gestalten, <br /> die inspirieren.
            </h4>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <ScrollAnimation
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ServiceCard
                    icon={<FaKitchenSet />}
                    title="Individuelle Küchenplanung"
                    description="Hier entstehen Küchen, die genau auf Ihre Wünsche zugeschnitten sind – von der ersten Idee bis zur perfekten Umsetzung."
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ServiceCard
                    icon={<BiCabinet />}
                    title="Wohnideen & Möbel"
                    description="Wir planen nicht nur Küchen, sondern auch maßgeschneiderte Wohnmöbel, die Ihr Zuhause harmonisch ergänzen."
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  initial={{ opacity: 0, y: 90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ServiceCard
                    icon={<MdOutlineCountertops />}
                    title="Präzision & Montage"
                    description="Unsere erfahrenen Monteure und Schreiner sorgen für eine millimetergenaue Umsetzung – für Qualität, die man spürt."
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="hidden relative lg:block w-full h-full">
            <Image
              width={1000}
              height={800}
              src="/images/service_img1.jpg"
              alt="Modern kitchen interior"
              className="w-full h-full object-cover rounded-lg absolute -right-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
