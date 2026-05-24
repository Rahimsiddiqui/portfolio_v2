"use client";

import { useState, useEffect, useRef } from "react";
import ProjectHero from "@/sections/projects/ProjectHero";
import ProjectCards from "@/sections/projects/ProjectCards";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/constants";
import gsap from "gsap";

export default function Projects() {
  const animatedTitles = useRef(new Set());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Target cards that haven't been animated yet (tracked by title in Ref)
    const cards = gsap.utils.toArray(".project-item").filter((card) => {
      const title = card.querySelector("h3")?.textContent;
      return title && !animatedTitles.current.has(title);
    });

    if (cards.length === 0) return;

    // Set initial state for new cards
    gsap.set(cards, { opacity: 0, yPercent: 25 });

    const batch = ScrollTrigger.batch(cards, {
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power1.inOut",
          overwrite: true,
          onComplete: () => {
            // Persist the animated state in our Ref
            elements.forEach((el) => {
              const title = el.querySelector("h3")?.textContent;
              if (title) animatedTitles.current.add(title);
            });
          },
        }),
      start: "top 85%",
      once: true,
    });

    return () => {
      batch.forEach((t) => t.kill());
    };
  });

  return (
    <div className="min-h-screen bg-black">
      <ProjectHero />
      <ProjectCards projects={projects} />
    </div>
  );
}
