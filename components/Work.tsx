import { Layers, Paintbrush, Plus } from "lucide-react";
import React from "react";

const Work = () => {
  return (
    <section className="pt-16">
      <h3 className="font-[600] text-[18px] text-center text-[#333333]">
        Work Process
      </h3>
      <h1 className="font-[700] text-[48px] text-center">
        Your space the a most <br />
        elevate without life
      </h1>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto py-20">
        {/* Step 01 */}
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
              The Design Studio
            </h3>
            <p className="text-[#54595F] group-hover:text-white mb-6">
              There are many variations of passages variations of deign the main
              thing is the best service they provide
            </p>
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto">
              <Plus className="w-6 h-6 group-hover:text-white" />
            </div>
          </div>
        </div>

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
            <h3 className="text-2xl font-bold mb-4">Arrival Of The Fittest</h3>
            <p className="text-white/90 mb-6">
              There are many variations of passages variations of deign the main
              thing is the best service they provide
            </p>
            <div className="w-12 h-12 border-2 border-white/50 rounded-lg flex items-center justify-center mx-auto">
              <Paintbrush className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Step 03 */}
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
              Delivering Excellence
            </h3>
            <p className="text-muted-foreground mb-6 group-hover:text-white">
              There are many variations of passages variations of deign the main
              thing is the best service they provide
            </p>
            <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center mx-auto">
              <Layers className="w-6 h-6 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
