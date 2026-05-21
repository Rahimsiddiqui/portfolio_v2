"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

import Button from "@/components/Button";
import Counter from "@/components/Counter";
import HeroExperience from "@/components/Models/hero/HeroExperience";
import { words } from "@/constants/index";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const sectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const canvasRef = useRef(null);
  const skeletonRef = useRef(null);

  const titleSplitRef = useRef(null);
  const introTlRef = useRef(null);
  const revealTlRef = useRef(null);

  const titleFinishedRef = useRef(false);
  const modelLoadedRef = useRef(false);

  const tryReveal = () => {
    if (
      titleFinishedRef.current &&
      modelLoadedRef.current &&
      revealTlRef.current
    ) {
      revealTlRef.current.play();
    }
  };

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Hidden before the very first paint
      gsap.set(heroContentRef.current, { autoAlpha: 1 });
      gsap.set(canvasRef.current, {
        opacity: 0,
        visibility: "visible",
      });
      gsap.set(skeletonRef.current, { autoAlpha: 1, display: "flex" });

      let titleLines = [];

      try {
        titleSplitRef.current = SplitText.create(
          sectionRef.current.querySelectorAll(".hero-title-line"),
          {
            type: "lines",
            linesClass: "hero-line-split",
          },
        );
        titleLines = titleSplitRef.current.lines || [];
      } catch {
        titleLines = sectionRef.current.querySelectorAll(".hero-title-line");
      }

      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          titleFinishedRef.current = true;
          tryReveal();
        },
      });

      introTl.from(titleLines, {
        opacity: 0,
        yPercent: 120,
        duration: 0.75,
        stagger: 0.08,
      });

      introTl.from(
        ".hero-desc",
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        "-=0.25",
      );

      introTl.from(
        ".hero-cta",
        {
          opacity: 0,
          y: 18,
          duration: 0.55,
        },
        "-=0.35",
      );

      introTlRef.current = introTl;

      const revealTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.out" },
      });

      revealTl.to(canvasRef.current, {
        opacity: 1,
        duration: 0.9,
        onStart: () => {
          canvasRef.current?.classList.remove("invisible");
        },
      });

      revealTl.to(
        skeletonRef.current,
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (skeletonRef.current) skeletonRef.current.style.display = "none";
          },
        },
        0.1,
      );

      revealTlRef.current = revealTl;
    }, sectionRef);

    return () => {
      ctx.revert();
      if (titleSplitRef.current) {
        try {
          titleSplitRef.current.revert();
        } catch {}
      }
      if (introTlRef.current) introTlRef.current.kill();
      if (revealTlRef.current) revealTlRef.current.kill();
    };
  }, []);

  const handleModelLoaded = () => {
    modelLoadedRef.current = true;
    tryReveal();
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden max-w-520 mx-auto"
    >
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background Image" />
      </div>

      <div
        ref={heroContentRef}
        className="hero-layout"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text overflow-hidden">
              <h1 className="hero-title-line">
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

              <h1 className="hero-title-line">into Real Projects</h1>
              <h1 className="hero-title-line">that Deliver Results</h1>
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

        <figure>
          <div ref={canvasRef} className="hero-3d-layout cursor-pointer">
            <HeroExperience
              onLoaded={handleModelLoaded}
              disableParticles={false}
              useDemandFrameloop={false}
            />
          </div>

          <div
            ref={skeletonRef}
            className="hero-3d-layout pointer-events-none hero-3d-skeleton flex items-center justify-center"
          >
            <div className="w-5/8 md:w-6/8 xl:w-5/8 h-3/8 md:h-5/8 bg-zinc-700/50 animate-pulse rounded-lg mt-30" />
          </div>
        </figure>
      </div>

      <Counter />
    </section>
  );
};

export default Hero;
