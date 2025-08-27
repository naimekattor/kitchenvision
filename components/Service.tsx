import React from "react";
import ScrollAnimation from "./ScrollAnimation";
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Icon Components - Typed as React Functional Components (React.FC)
const BedIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M3.75 16.5h16.5M3.75 12h16.5M3.75 7.5h16.5M20.25 12a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v4.5A2.25 2.25 0 006 18.75h12A2.25 2.25 0 0020.25 16.5v-4.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 7.5V6A2.25 2.25 0 019.75 3.75h4.5A2.25 2.25 0 0116.5 6v1.5"
    />
  </svg>
);

const BlueprintIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m-16.5 0v11.25A2.25 2.25 0 006 16.5h2.25m0 0h1.5m-1.5 0l-3.75 3.75M6 16.5l3.75-3.75m0 0l3.75 3.75m-3.75-3.75V3.75m9 12.75h1.5m-1.5 0a2.25 2.25 0 01-2.25-2.25V3.75m0 11.25a2.25 2.25 0 002.25 2.25h1.5m-1.5 0l3.75 3.75m-3.75-3.75l-3.75-3.75m3.75 3.75V3.75"
    />
  </svg>
);

const WindowIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM3 12h18M12 3v18"
    />
  </svg>
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-8">
    <div className="bg-gray-800 rounded-md w-16 h-16 flex items-center justify-center relative bottom-15">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 mb-6">{description}</p>
    <a href="#" className="font-semibold text-gray-900 flex items-center">
      Read More
      <span className="ml-2">→</span>
    </a>
  </div>
);
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
              Latest Service
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Creating Spaces The That <br /> A Inspire
            </h1>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <ScrollAnimation
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ServiceCard
                    icon={<BedIcon />}
                    title="Architecture Plus"
                    description="This category focuses on the design and man"
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ServiceCard
                    icon={<BlueprintIcon />}
                    title="Urban Oasis"
                    description="This category focuses on the design and man"
                  />
                </ScrollAnimation>
                <ScrollAnimation
                  initial={{ opacity: 0, y: 90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ServiceCard
                    icon={<WindowIcon />}
                    title="Blueprint Builders"
                    description="This category focuses on the design and man"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="hidden relative lg:block w-full h-full">
            <img
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
