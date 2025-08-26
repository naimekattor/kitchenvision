import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Testoimonial from "@/components/Testoimonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Work />
      <Achievement />
      <Portfolio />
      <Testoimonial />
      <Team />
      <Faq />
      <Blog />
    </div>
  );
}
