"use client";

import TechIcon from "@/components/Models/technologies/TechIcon";
import TitleHeader from "@/components/TitleHeader";
import { mainTechStackIcons, miscTechStackIcons } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.from(".tech-card", {
      yPercent: 25,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
      },
    });
  }, []);

  return (
    <section
      id="skills"
      className="flex-center section-padding max-w-520 mx-auto"
    >
      <div className="w-full h-full md:px-10 px-4">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {mainTechStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} applyScale />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="misc-tech-grid">
          {miscTechStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} applyScale={false} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
