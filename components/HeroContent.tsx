"use client";
import { usePathname } from "next/navigation";
import React from "react";

// Translation map
const translations: Record<string, string> = {
  about: "Über uns",
  contact: "Kontakt",
  blog: "Blog",
  service: "Service",
};

// Define props for PageHeader
interface PageHeaderProps {
  pageTitle: string;
  path: {
    label: string;
    link: string;
  }[];
}

// PageHeader component
const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle, path }) => {
  return (
    <div
      className="relative w-full py-42 md:py-32 bg-[url('/images/breadcrumb.jpg')] text-white overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 font-montserrat">
          {pageTitle}
        </h2>
        <div className="flex items-center text-sm space-x-2 text-gray-300">
          {path.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.link} className="hover:underline transition-colors">
                {item.label}
              </a>
              {index < path.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroContent: React.FC = () => {
  const pathName = usePathname() || "/";

  // Split pathname and create breadcrumb
  const segments = pathName.split("/").filter(Boolean);

  const breadcrumb = [
    { label: translations["home"], link: "/" },
    ...segments.map((segment, index) => {
      const link = "/" + segments.slice(0, index + 1).join("/");

      // Use German translation if available, otherwise fallback
      const germanLabel =
        translations[segment.toLowerCase()] ||
        segment.charAt(0).toUpperCase() + segment.slice(1);

      return { label: germanLabel, link };
    }),
  ];

  return (
    <div className="bg-gray-100 min-h-[350px]">
      <PageHeader
        pageTitle={
          translations[
            segments[segments.length - 1]?.toLowerCase() || "home"
          ] || ""
        }
        path={breadcrumb}
      />
    </div>
  );
};

export default HeroContent;
