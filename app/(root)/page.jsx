"use client";



// Sections
import Hero from "@/sections/landing-page/Hero";
import Showcase from "@/sections/landing-page/Showcase";
import FeatureCards from "@/sections/landing-page/FeatureCards";
import Experience from "@/sections/landing-page/Experience";
import TechStack from "@/sections/landing-page/TechStack";
import Testimonials from "@/sections/landing-page/Testimonials";
import Contact from "@/sections/landing-page/Contact";

// Components


export default function LandingPage() {
  return (
    <>
      <Hero />
      <Showcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
}
