"use client";

import GlowCard from "@/components/GlowCard";
import TitleHeader from "@/components/TitleHeader";
import { testimonials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Testimonials = () => {
  useGSAP(() => {
    gsap.from(".review-card", {
      yPercent: 35,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="flex-center section-padding max-w-520 mx-auto"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me"
          sub="⭐ Client Feedback Highlights"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ mentions, imgPath, name, review }) => (
            <GlowCard key={mentions} card={{ review, mentions }}>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={imgPath}
                    alt={name}
                    className="rounded-full bg-zinc-900"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-bold text-white/80">{name}</p>
                  <p className="text-white/65">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
