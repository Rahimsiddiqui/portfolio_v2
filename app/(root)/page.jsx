// Sections
import Hero from "@/sections/Hero";
import Showcase from "@/sections/Showcase";
import FeatureCards from "@/sections/FeatureCards";

// Components
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <FeatureCards />
      </main>
    </>
  );
}
