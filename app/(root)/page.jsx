"use client";

import { useState } from "react";

// Sections
import Hero from "@/sections/landing-page/Hero";
import Showcase from "@/sections/landing-page/Showcase";
import FeatureCards from "@/sections/landing-page/FeatureCards";
import Experience from "@/sections/landing-page/Experience";
import TechStack from "@/sections/landing-page/TechStack";
import Testimonials from "@/sections/landing-page/Testimonials";
import Contact from "@/sections/landing-page/Contact";

// Components
import TerminalLoader from "@/components/TerminalLoader";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);

  return (
    <>
      {/* TerminalLoader remains mounted while fading; isLoading controls app content visibility */}
      {loaderVisible && (
        <TerminalLoader
          onStart={() => setIsLoading(false)}
          onComplete={() => setLoaderVisible(false)}
        />
      )}

      {/* Always mount Hero so 3D assets can load while the terminal is active */}
      <Hero isLoading={isLoading} />

      {!isLoading && (
        <>
          <Showcase isLoading={isLoading} />
          <FeatureCards />
          <Experience />
          <TechStack />
          <Testimonials />
          <Contact />
        </>
      )}
    </>
  );
}
