"use client";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Define the props for a single FAQ item for TypeScript
interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

// A single collapsible FAQ item component
const FaqItem: React.FC<FaqItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`border-b border-gray-200 transition-colors duration-300 ${
        isOpen ? "bg-[#333333] text-white" : "bg-white"
      }`}
    >
      <button
        className={`w-full text-left py-4 px-6 flex justify-between items-center transition-colors duration-300 ${
          isOpen ? "text-white" : "text-gray-800"
        }`}
        onClick={onToggle}
      >
        <span className="text-lg font-semibold flex items-center">
          <span>{id}.</span>
          {question}
        </span>
        {/* <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
            isOpen ? "rotate-180 text-gray-400" : "text-gray-800"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg> */}
        <ChevronsRight
          className={`w-6 h-6 transition-transform duration-300 transform ${
            isOpen ? "rotate-90 text-white" : "text-gray-800"
          }`}
        />
      </button>
      {/* The answer section, conditionally rendered with a smooth transition */}
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <p className="text-base text-gray-300">{answer}</p>
      </div>
    </div>
  );
};
const Faq = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What Experience the art of interior?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: 2,
      question: "What Let your interior tell your story?",
      answer: "This is the answer for the second question.",
    },
    {
      id: 3,
      question: "What Experience the art of interior?",
      answer: "This is the answer for the third question.",
    },
    {
      id: 4,
      question: "Who Create a sanctuary in your own?",
      answer: "This is the answer for the fourth question.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center p-8 lg:p-16 bg-gray-100 font-sans">
      {/* Left side: Hero text and project stats */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-12 lg:mb-0 lg:pr-16">
        <div className="text-sm uppercase font-semibold text-gray-500 tracking-wide mb-2">
          FAQ
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight mb-4">
          Elevate Your Interior <br /> The Elevate Lifestyle
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mb-8">
          Aliquam eros justo, posuere lobortis laoreet ullamcorper the posuer
          viverra Aliquam eros, posuere lobortis Aliquam eros justo, posuere
          laoreet ullamcorper the a posuer viverra Aliquam
        </p>

        {/* Project completed box */}
        <div className="flex items-center space-x-4 border-1 border-[#A6A182]  p-6 rounded shadow-lg">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center p-4 ">
                <Image
                  src={"/images/faq_icon.png"}
                  width={60}
                  height={60}
                  alt="icon"
                />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                2k+ Project Completed
              </span>
            </div>

            <span className="text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the a printing and typesetting
              industry.
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Accordion of FAQ items */}
      <div className="w-full lg:w-1/2 rounded space-y-4 overflow-hidden shadow-2xl">
        {faqData.map((item) => (
          <FaqItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
