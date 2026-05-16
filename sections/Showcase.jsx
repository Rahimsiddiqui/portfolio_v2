"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".showcase-layout",
        start: "top 80%",
      },
    });

    const projects = gsap.utils.toArray(".project");

    tl.fromTo(
      projects[0],
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
      },
    )
      .fromTo(
        projects[1],
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
        },
        "-=0.3",
      )
      .fromTo(
        projects[2],
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
        },
        "-=0.3",
      );
  }, []);

  return (
    <section id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcase-layout">
          {/* LEFT */}
          <Link
            href="/projects/mojito"
            className="first-project-wrapper project"
          >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Mojito Image" />
            </div>
            <div className="text-content">
              <h2 className="mt-3.5 xl:mt-4.5 mb-7 xl:mb-8.5">
                Mojito | Masterpiece made from GSAP and Next.js
              </h2>
              <p className="text-white/90 md:text-xl">
                Mojito is a sleek web project showcasing a modern
                cocktail-themed interface with smooth GSAP animations and
                interactive UI elements built using Next.js. It focuses on clean
                design, fluid transitions, and an engaging user experience.
              </p>
            </div>
          </Link>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <Link href="/projects/macbook" className="project">
              <div className="image-wrapper">
                <img
                  src="/images/project2.png"
                  alt="Macbook M4 Landing Page Recreation"
                />
              </div>
              <div className="text-content">
                <h2 className="mt-6.5 mb-5">
                  Recreation of Macbook M4 Landing page
                </h2>
                <p className="text-white/80 xl:truncate">
                  MacBook M4 Landing Page is a sleek web recreation of Apple’s
                  design, built with Next.js and enhanced with GSAP animations.
                  It features smooth transitions, minimal UI, and a premium
                  interactive experience focused on modern motion and clean
                  visuals.
                </p>
              </div>
            </Link>
            <Link href="/projects/financial-atelier" className="project">
              <div className="image-wrapper">
                <img src="/images/project3.png" alt="Financial Atelier Image" />
              </div>
              <div className="text-content">
                <h2 className="mt-6.5 mb-5">
                  Finance Tracking and Budgeting Tool
                </h2>
                <p className="text-white/80 xl:truncate">
                  Financial Atelier is a modern finance dashboard web app built
                  with Next.js, featuring clean UI components powered by Lucide
                  React and smooth Framer Motion animations. It focuses on clear
                  data visualization and an intuitive experience for tracking
                  and managing finances efficiently.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
