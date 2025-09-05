import React from "react";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

// Single step component
const WorkProcessStep: React.FC<StepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex flex-col md:flex-row items-baseline space-x-2 w-full border-[#54595F] pb-3 border-b-2">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex-1">
          {title}
        </h3>
        <span className="text-7xl font-extralight text-gray-200">{number}</span>
      </div>
      <p className="text-gray-500 text-sm md:text-base">{description}</p>
    </div>
  );
};

const WorkProcess: React.FC = () => {
  const processSteps = [
    {
      number: "01",
      title: "Blueprint Builders",
      description:
        "Wir gestalten und entwickeln präzise Raumpläne, die eine harmonische Verbindung von Architektur und Interior Design schaffen.",
    },
    {
      number: "02",
      title: "Artistic Architecture",
      description:
        "Ästhetik trifft auf Funktion: Unsere Architekturlösungen verbinden zeitloses Design mit modernen Materialien, um Räume mit Charakter und Wiedererkennungswert zu gestalten.",
    },
    {
      number: "03",
      title: "Interior Scape Design",
      description:
        "Wir kreieren individuelle Wohnlandschaften, die Persönlichkeit ausstrahlen – vom harmonischen Farbkonzept bis zur perfekten Materialkombination.",
    },
    {
      number: "04",
      title: "Conceptual Spaces",
      description:
        "Ob Küche, Wohnzimmer oder Büro – wir entwickeln Raumkonzepte, die Ihre Bedürfnisse in den Mittelpunkt stellen und den Alltag erleichtern.",
    },
    {
      number: "05",
      title: "Inspire Design Group",
      description:
        "Unser Team aus erfahrenen Designern inspiriert und begleitet Sie bei jedem Schritt – mit kreativen Ideen und praxisnahen Lösungen.",
    },
    {
      number: "06",
      title: "Modern Living Spaces",
      description:
        "Moderne Wohnräume, die Komfort, Technologie und Stil vereinen – wir bringen zeitgemäße Trends in Einklang mit Ihrer individuellen Vision.",
    },
  ];

  return (
    <div className="flex flex-col items-center container mx-auto  px-4 ">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-4xl">
        <p className="text-sm uppercase font-semibold text-gray-500 tracking-wide mb-2">
          Unser Prozess
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Design neu definiert
        </h1>
      </div>

      {/* Grid of Steps */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 md:gap-y-24">
        {processSteps.map((step) => (
          <WorkProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
