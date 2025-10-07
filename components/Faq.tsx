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
        aria-label="toggle"
        className={`w-full text-left py-4 px-6 flex justify-between items-center transition-colors duration-300 ${
          isOpen ? "text-white" : "text-gray-800"
        }`}
        onClick={onToggle}
      >
        <span className="text-lg font-semibold flex items-center">
          {/* <span>{id}.</span> */}
          {question}
        </span>

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
      question:
        "Warum sollte ich meine Küche bei CONTE Küche & Raum planen lassen?",
      answer:
        "Unser Küchenstudio bietet individuelle Küchenplanung, die perfekt auf Ihre Räume, Ihren Stil und Ihr Budget abgestimmt ist. Mit langjähriger Erfahrung und persönlicher Beratung begleiten wir Sie vom ersten Entwurf bis zur fertigen Traumküche.",
    },
    {
      id: 2,
      question: "Ist die Erstberatung zur Küchenplanung kostenlos?",
      answer:
        "Ja – die Erstberatung in unserem Küchenstudio oder direkt bei Ihnen zu Hause ist unverbindlich und kostenlos. So können Sie sich in Ruhe ein Bild von unseren Leistungen machen.",
    },
    {
      id: 3,
      question: " Kann ich online einen Termin im Küchenstudio buchen?",
      answer:
        "Ja – über unser Online-Buchungstool können Sie jederzeit bequem einen Beratungstermin für Ihre Küchenplanung oder Wohnraumgestaltung wählen.",
    },
    {
      id: 4,
      question:
        "Wie lange dauert es von der Planung bis zur fertigen Einbauküche?",
      answer:
        "Die Dauer hängt von der individuellen Planung ab. Nach Auftragserteilung beträgt die Lieferzeit Ihrer neuen Küche in der Regel 6–10 Wochen.",
    },
    {
      id: 5,
      question: "Planen Sie auch Küchen mit kleinerem Budget?",
      answer:
        "Selbstverständlich. Unser Küchenstudio bietet sowohl hochwertige „Standardküchen“ als auch maßgeschneiderte Premiumlösungen. Gemeinsam finden wir die optimale Lösung für Ihr Budget.",
    },
    {
      id: 6,
      question:
        "Übernehmen Sie auch den Abbau und die Entsorgung meiner alten Küche?",
      answer:
        "Ja – wir kümmern uns auf Wunsch um den kompletten Abbau und die fachgerechte Entsorgung Ihrer alten Küche, damit Sie sich um nichts kümmern müssen.",
    },
    {
      id: 7,
      question:
        "Bieten Sie eine komplette Küchenmontage mit allen Anschlüssen an?",
      answer:
        "Ja, bei uns erhalten Sie Ihre Küche schlüsselfertig: Lieferung, Montage, Elektro- und Wasseranschlüsse – alles aus einer Hand.",
    },
    {
      id: 8,
      question: "Mit welchen Marken und Herstellern arbeiten Sie?",
      answer:
        "Wir führen Küchenmöbel und Elektrogeräte namhafter Hersteller. Dadurch haben Sie eine große Auswahl an hochwertigen Materialien, modernen Designs und energieeffizienten Geräten.",
    },
    {
      id: 9,
      question:
        " Kann ich bei Ihnen auch Möbel für andere Räume planen lassen?",
      answer:
        "Ja – neben Küchen bieten wir auch maßgeschneiderte Lösungen für Wohnräume, Garderoben, Hauswirtschaftsräume, Ankleidezimmer und vieles mehr.",
    },
    {
      id: 10,
      question:
        "Habe ich während der Küchenplanung einen festen Ansprechpartner?",
      answer:
        "Ja – Sie haben immer einen persönlichen Ansprechpartner, der Ihr Küchenprojekt von der Planung bis zur Fertigstellung betreut.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="flex flex-col lg:flex-row items-start justify-center container mx-auto  font-sans">
        {/* Left side: Hero text and project stats */}

        <div className="w-full lg:w-1/2 flex flex-col items-start text-left mb-12 lg:mb-0 lg:pr-16">
          <div className="text-sm uppercase font-semibold text-gray-500 tracking-wide mb-2">
            FAQ
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold  leading-tight tracking-tight mb-4">
            Wertiges Interior. <br /> Wertiger Lifestyle.
          </h3>
          <p className="text-lg text-gray-500 max-w-xl mb-8">
            In unseren FAQs beantworten wir die häufigsten Fragen rund um
            Planung, Design und Service. Damit Sie schnell und unkompliziert
            alle Informationen finden, die Ihr Zuhause und Ihr Leben noch
            wertiger machen.
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
                  1k+ Hunderte Projekte. Unzählige Erfolgsgeschichten.
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Jedes Projekt ist einzigartig – und doch verbindet sie alle
                unser Anspruch an Qualität, Design und Perfektion. Von modernen
                Küchen bis zu ganzheitlichen Raumkonzepten: Unsere Referenzen
                zeigen, wie aus Ideen inspirierende Wohnräume werden.
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
    </section>
  );
};

export default Faq;
