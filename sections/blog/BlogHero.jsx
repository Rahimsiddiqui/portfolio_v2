"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

const BlogHero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    const ctx = gsap.context(() => {
      const split = new SplitText(".blog-title", { type: "lines" });
      gsap.from(split.lines, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power1.inOut",
      });

      gsap.from(".blog-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center py-20 px-5 md:py-32 overflow-hidden mt-20 max-w-520 mx-auto"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute inset-0 bg-red-700 blur-[120px] rounded-full w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto z-10">
        <h1 className="blog-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 sm:mb-8 md:mb-10 leading-tight">
          Insights on Web Development <br /> & 3D Experiences
        </h1>
        <p className="blog-subtitle text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Exploring the intersection of modern frontend engineering, creative 3D
          web techniques, and high-performance animations.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
