"use client";
import { usePathname } from "next/navigation";
import React from "react";

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
      className="relative w-full py-24 md:py-32 bg-[url('/images/breadcrumb.jpg')] text-white overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 font-montserrat">
          {pageTitle}
        </h1>
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
    { label: "Home", link: "/" },
    ...segments.map((segment, index) => {
      // Build URL progressively (/about, /about/team, etc.)
      const link = "/" + segments.slice(0, index + 1).join("/");
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize
        link,
      };
    }),
  ];

  return (
    <div className="bg-gray-100 min-h-[350px]">
      <PageHeader
        pageTitle={segments[segments.length - 1]?.toUpperCase() || "Home"}
        path={breadcrumb}
      />
    </div>
  );
};

export default HeroContent;
