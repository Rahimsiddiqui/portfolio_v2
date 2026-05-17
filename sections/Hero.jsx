"use client";

import Button from "@/components/Button";
import Counter from "@/components/Counter";
import HeroExperience from "@/components/HeroModels/HeroExperience";
import { words } from "@/constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = ({ isLoading }) => {
  useGSAP(
    () => {
      if (isLoading) return;

      const htl = gsap.timeline();

      const titleSplit = SplitText.create(".hero-text h1", {
        type: "lines",
      });

      const miscSplit = SplitText.create(".animate", {
        type: "lines",
      });

      htl
        .from(titleSplit.lines, {
          opacity: 0,
          yPercent: 35,
          duration: 0.7,
          stagger: 0.1,
        })
        .from(
          miscSplit.lines,
          {
            opacity: 0,
            yPercent: 35,
            duration: 1,
            stagger: 0.2,
          },
          "-=0.3",
        );
    },
    [isLoading],
  );

  return (
    <section id="hero" className="relative overflow-hidden">
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
            <p className="text-white/90 animate md:text-xl relative z-10 pointer-events-none mt-2 mb-3 lg:mb-4">
              Hi, I&apos;m Rahim—a passionate Web Developer based in Karachi
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 animate font-medium"
              id="counter"
              text="See my Work"
            />
          </div>
        </header>

        {/* 3D MODEL/EXPERIENCE */}
        <figure>
          <div className="hero-3d-layout cursor-pointer">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* COUNTER */}
      <Counter isLoading={isLoading} />
    </section>
  );
};

export default Hero;
