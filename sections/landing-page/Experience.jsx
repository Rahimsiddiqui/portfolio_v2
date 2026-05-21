"use client";

import GlowCard from "@/components/GlowCard";
import TitleHeader from "@/components/TitleHeader";
import { expCards } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.set(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });

    gsap.utils.toArray(".exp-text").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0 max-w-520 mx-auto"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, idx) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} idx={idx}>
                    <div>
                      <Image
                        width={50}
                        height={50}
                        src={card.imgPath}
                        alt={card.title}
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full"></div>
                    </div>
                  </div>
                  <div className="exp-text flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="timeline-logo">
                      <Image
                        width={50}
                        height={50}
                        src={card.logoPath}
                        alt={`${card.title} logo`}
                      />
                    </div>
                    <div>
                      <h1 className="font-semibold text-3xl">{card.title}</h1>
                      <p className="my-5 text-white/90">{card.date}</p>
                      <p className="text-white/70 italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white/90">
                        {card.responsibilities.map((res) => (
                          <li key={res} className="text-lg">
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
