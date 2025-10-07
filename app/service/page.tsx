"use client";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const page = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/email-send/`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);

      if (res.data.success) {
        toast.success(
          "Herzlichen Dank für Ihre Nachricht. Wir melden uns innerhalb der nächsten 1–2 Tage bei Ihnen.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
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
    <div className=" flex items-center justify-center pb-8 font-sans container mx-auto">
      <div className="md:max-w-xl w-full float-left bg-white p-4 rounded">
        {/* Header */}
        <div className="flex flex-col mb-8 text-center sm:text-left">
          {/* <p className="text-sm uppercase font-semibold text-gray-500 tracking-wide mb-2">
              Kontaktiere uns
            </p> */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  leading-tight">
            Buche einen Termin
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
            placeholder="E-mail"
            required
            name="email"
            className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />
          <input
            type="tel"
            placeholder="Telefon"
            name="phone"
            className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />
          <input
            type="text"
            placeholder="Betreff"
            name="subject"
            className="col-span-1 md:col-span-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />
          <textarea
            placeholder="Ihre Nachricht"
            rows={6}
            name="message"
            className="col-span-1 md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          />
          <button
            aria-label="submit"
            type="submit"
            className="col-span-1 md:col-span-2 flex items-center justify-center space-x-2 px-8 py-4 bg-[#333333] text-white font-semibold rounded shadow-md transition-transform transform hover:scale-105 hover:bg-gray-900 min-w-[200px]"
          >
            <span className=" whitespace-nowrap">Terminanfrage senden</span>
            <ArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
