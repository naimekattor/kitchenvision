import React from "react";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
} from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="w-full bg-white md:block hidden">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Left: Address */}
        <div className="flex items-center gap-3 py-2 text-[#333333] text-[16px] font-montserrat  px-6">
          <FaMapMarkerAlt />
          <span>Hauptstraße 36, 83527 Haag in Oberbayern</span>
        </div>

        {/* Right: Email + Socials */}
        <div className="flex items-center relative gap-10 before:content-[''] before:block before:w-full before:h-full before:bg-[#333333] before:absolute before:left-0 before:top-0 before:inset-0 before:[clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%)] before:overflow-hidden py-2 px-20">
          {/* Email */}
          <span className="text-white text-[16px] font-montserrat relative z-10">
            info@contekuechen.de
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-white text-[16px] relative z-10">
            <a href="https://www.facebook.com/contekuechen" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            {/* <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a> */}
            <a href="https://www.instagram.com/contekuechen" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            {/* <a href="#" className="hover:text-gray-300">
              <FaPinterestP />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
