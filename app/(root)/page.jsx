"use client";

import { useState } from "react";

// Sections
import Hero from "@/sections/Hero";
import Showcase from "@/sections/Showcase";
import FeatureCards from "@/sections/FeatureCards";
import Experience from "@/sections/Experience";
import TechStack from "@/sections/TechStack";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

// Components
import Navbar from "@/components/Navbar";
import TerminalLoader from "@/components/TerminalLoader";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <TerminalLoader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero isLoading={isLoading} />
            <Showcase isLoading={isLoading} />
            <FeatureCards />
            <Experience />
            <TechStack />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
