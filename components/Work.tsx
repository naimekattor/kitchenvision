import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import {
  MdOutlineDesignServices,
  MdOutlineEventNote,
  MdOutlineKitchen,
} from "react-icons/md";

const Work = () => {
  return (
    <section className="pt-16">
      <h3 className="font-[600] text-[18px] text-center text-[#333333]">
        Work Process
      </h3>
      <h1 className="font-[700] text-4xl md:text-5xl text-center">
        From Concept to Your Dream Kitchen
      </h1>

      <div className="grid md:grid-cols-3 gap-8 container mx-auto py-20">
        {/* Step 01 */}
        <ScrollAnimation
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative text-center shadow-lg bg-white rounded p-2 group overflow-hidden">
            {/* Background image (hidden by default, shown on hover) */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/images/work_img.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            <div className="relative z-10 p-8">
              <div className="text-8xl font-bold text-gray-100 mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
                Consultation & Planning
              </h3>
              <p className="text-[#54595F] group-hover:text-white mb-6">
                We start by understanding your needs, style, and budget to plan
                the perfect kitchen for your home.
              </p>
              <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto">
                <MdOutlineEventNote className="w-6 h-6 group-hover:text-white" />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Step 02 - Always show background */}
        <div className="relative text-center shadow-lg bg-white rounded p-2 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/work_img.jpg')`,
            }}
          />
          <div className="relative z-10 p-8 text-white">
            <div className="text-8xl font-bold text-white mb-4">02</div>
            <h3 className="text-2xl font-bold mb-4">
              3D Design & Visualization
            </h3>
            <p className="text-white/90 mb-6">
              See your kitchen come to life with detailed 3D layouts before we
              begin installation.
            </p>
            <div className="w-12 h-12 border-2 border-white/50 rounded-lg flex items-center justify-center mx-auto">
              <MdOutlineDesignServices className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Step 03 */}
        <ScrollAnimation
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative text-center shadow-lg bg-white rounded p-2 group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url('/images/work_img.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            <div className="relative z-10 p-8">
              <div className="text-8xl font-bold text-gray-100 mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
                Installation & Finishing
              </h3>
              <p className="text-muted-foreground mb-6 group-hover:text-white">
                Our experts install cabinets, countertops, and appliances with
                precision and care.
              </p>
              <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto">
                <MdOutlineKitchen className="w-6 h-6 group-hover:text-white" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Work;
