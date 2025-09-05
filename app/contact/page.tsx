"use client";
import axios from "axios";
import { ArrowRight, LinkIcon, Mail, MapPin } from "lucide-react";
import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { toast } from "react-toastify";

const page = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post(
        "https://6abca5bada2e.ngrok-free.app/calendy/email-send/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            // "ngrok-skip-browser-warning": "false",
          },
        }
      );
      console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        form.reset(); // reset form inputs
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || err.message, {
          position: "top-right",
        });
      } else {
        console.error(" Unknown Error:", err);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full container mx-auto rounded pb-12 overflow-hidden   font-sans">
        {/* Map Section */}
        <div className="relative w-full lg:w-1/2 min-h-[300px]">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.925161647196!2d90.378288!3d23.87664955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1756287000717!5m2!1sen!2sbd"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col w-full lg:w-1/2 p-8 md:p-16 lg:p-24 space-y-12">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Kontakt
            </h2>
            <p className="text-gray-600 max-w-md">
              Gerne nehmen wir uns Zeit für Ihr Anliegen – vereinbaren Sie jetzt Ihren individuellen Beratungstermin und entdecken Sie, wie Ihr Wohntraum Wirklichkeit wird.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-x-16">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <FaSquareWhatsapp className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/88012345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:underline"
                >
                  012 345 678 9101
                </a>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-gray-500 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  Email
                </span>
                <span className="text-gray-500">info@contekuechen.de</span>
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
                  Hauptstraße 36, 83527 Haag in Oberbayern

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
                  href={`https://www.contekuechen.de/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:underline"
                >
                  https://www.contekuechen.de/
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
              Kontaktiere uns
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Zur Traumküche
            </h1>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <textarea
              placeholder="Message"
              rows={6}
              name="message"
              className="col-span-1 md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-2 flex items-center justify-center space-x-2 px-8 py-4 bg-[#333333] text-white font-semibold rounded shadow-md transition-transform transform hover:scale-105 hover:bg-gray-900 w-[200px]"
            >
              <span>Anfrage senden</span>
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
