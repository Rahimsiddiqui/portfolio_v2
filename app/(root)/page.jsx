"use client";

import { useState } from "react";
// Sections
import Hero from "@/sections/Hero";
import Showcase from "@/sections/Showcase";
import FeatureCards from "@/sections/FeatureCards";

// Components
import Navbar from "@/components/Navbar";
import TerminalLoader from "@/components/TerminalLoader";

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
          </main>
        </>
      )}
    </>
  );
}
