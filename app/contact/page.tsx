import { ArrowRight, LinkIcon, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full container mx-auto rounded pb-12 overflow-hidden   font-sans">
        {/* Map Section */}
        <div className="relative w-full lg:w-1/2 md:min-h-[300px] min-h-[400px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.925161647196!2d90.378288!3d23.87664955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1756287000717!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col w-full lg:w-1/2 p-8 md:p-16 lg:p-24 space-y-12">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Contact Info
            </h2>
            <p className="text-gray-600 max-w-md">
              Cloud computing is a model for delivering on-demand computing
              resources over the internet. It can benefit your
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-x-16">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  Phone
                </span>
                <span className="text-gray-500">012 345 678 9101</span>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  Email
                </span>
                <span className="text-gray-500">info@example.com</span>
              </div>
            </div>
            {/* Location */}
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  Location
                </span>
                <span className="text-gray-500">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
              </div>
            </div>
            {/* Website */}
            <div className="flex items-start space-x-4">
              <LinkIcon className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  Website
                </span>
                <a
                  href={`http://www.example.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:underline"
                >
                  www.example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100  flex items-center justify-start pb-8 font-sans bg-[url('/images/contact_bg.jpg')] bg-cover bg-center container mx-auto">
        <div className="md:max-w-xl w-full float-left bg-white p-4 rounded">
          {/* Header */}
          <div className="flex flex-col mb-8 text-center sm:text-left">
            <p className="text-sm uppercase font-semibold text-gray-500 tracking-wide mb-2">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Get In Touch
            </h1>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="col-span-1 md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-2 flex items-center justify-center space-x-2 px-8 py-4 bg-[#333333] text-white font-semibold rounded shadow-md transition-transform transform hover:scale-105 hover:bg-gray-900 w-[200px]"
            >
              <span>Submit Now</span>
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
