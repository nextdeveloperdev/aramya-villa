import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Suites from "@/components/sections/Suites";
import Dining from "@/components/sections/Dining";
import Experiences from "@/components/sections/Experiences";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suites />
      <Dining />
      <Experiences />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}