"use client";

import Button from "@/components/Button";
import Counter from "@/components/Counter";
import HeroExperience from "@/components/Models/hero/HeroExperience";
import { words } from "@/constants/index";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const canvasRef = useRef(null);

  // Orchestration refs
  const titleFinishedRef = useRef(false);
  const modelLoadedRef = useRef(false);
  const titleSplitRef = useRef(null);
  const titleTlRef = useRef(null);
  const revealTlRef = useRef(null);

  useEffect(() => {
    let titleTl = gsap.timeline();

    // Create SplitText for title lines once
    try {
      titleSplitRef.current = SplitText.create(".hero-text h1", {
        type: "lines",
      });
    } catch (e) {
      titleSplitRef.current = null;
    }

    const titleLines = titleSplitRef.current
      ? titleSplitRef.current.lines
      : document.querySelectorAll(".hero-text h1");

    titleTl.from(titleLines, {
      opacity: 0,
      yPercent: 35,
      duration: 0.7,
      stagger: 0.1,
      onComplete: () => {
        titleFinishedRef.current = true;
        // If model already loaded, start reveal sequence
        if (modelLoadedRef.current && revealTlRef.current) {
          revealTlRef.current.play();
        }
      },
    });

    titleTlRef.current = titleTl;

    // Prepare reveal timeline but keep paused. This sequence will NOT remount anything.
    const revealTl = gsap.timeline({ paused: true });

    // Fade in canvas
    if (canvasRef.current) {
      revealTl.to(
        canvasRef.current,
        { opacity: 1, duration: 0.9, ease: "power2.out" },
        0,
      );
    }

    titleTl.from(
      ".hero-desc",
      { opacity: 0, yPercent: 20, duration: 0.6, ease: "power2.out" },
      "-=0.2",
    );

    titleTl.from(
      ".hero-cta",
      { opacity: 0, yPercent: 20, duration: 0.6, ease: "power2.out" },
      "-=0.4",
    );

    // Hide skeleton overlay by fading its opacity then setting display none
    revealTl.to(
      ".hero-3d-skeleton",
      {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          const el = document.querySelector(".hero-3d-skeleton");
          if (el) el.style.display = "none";
        },
      },
      0.1,
    );

    revealTlRef.current = revealTl;

    return () => {
      try {
        titleTl.kill();
        revealTl.kill();
        titleSplitRef.current && titleSplitRef.current.revert();
      } catch (e) {}
    };
  }, []);

  // Called by HeroExperience when model finishes loading
  function handleModelLoaded() {
    modelLoadedRef.current = true;
    // If title animation already finished, play reveal immediately
    if (titleFinishedRef.current && revealTlRef.current) {
      revealTlRef.current.play();
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden max-w-520 mx-auto">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background Image" />
      </div>
      <div className="hero-layout">
        {/* HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map(({ text, imgPath }, idx) => (
                      <span
                        key={idx + 1}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={imgPath}
                          alt={text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="hero-desc text-white/90 md:text-xl relative z-10 pointer-events-none mt-2 mb-3 lg:mb-4">
              Hi, I&apos;m Rahim—a passionate Web Developer based in Karachi
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 hero-cta font-medium"
              id="counter"
              text="See my Work"
            />
          </div>
        </header>

        {/* 3D MODEL/EXPERIENCE */}
        <figure>
          <div
            ref={canvasRef}
            className="hero-3d-layout cursor-pointer"
            style={{ opacity: 0 }}
          >
            <HeroExperience
              onLoaded={() => handleModelLoaded()}
              disableParticles={false}
              useDemandFrameloop={false}
            />
          </div>

          {/* Skeleton overlay — shares the exact same layout boundaries as the canvas */}
          <div className="hero-3d-layout pointer-events-none hero-3d-skeleton flex items-center justify-center">
            <div className="w-5/8 md:w-6/8 xl:w-4/8 h-3/8 md:h-4/8 bg-zinc-700/50 animate-pulse rounded-lg mt-30" />
          </div>
        </figure>
      </div>

      {/* COUNTER */}
      <Counter />
    </section>
  );
};

export default Hero;
