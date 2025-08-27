import AboutSection from "@/components/About";
import Achievement from "@/components/Achievement";
import CtaBanner from "@/components/CtaBanner";
import Testoimonial from "@/components/Testoimonial";
import WorkProcess from "@/components/WorkProcess";
import React from "react";

const page = () => {
  return (
    <div className="space-y-12">
      <AboutSection />
      <WorkProcess />
      <Achievement />
      <Testoimonial />
    </div>
  );
};

export default page;
