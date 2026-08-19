import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Suites from "@/components/sections/Suites";
import Dining from "@/components/sections/Dining";
import Experiences from "@/components/sections/Experiences";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suites />
      <Dining />
      <Experiences />
      <WhyUs />
    </>
  );
}