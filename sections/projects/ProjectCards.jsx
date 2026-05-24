"use client";

import ProjectCard from "@/components/ProjectCard";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCards = ({ projects }) => {
  const router = useRouter();
  const githubDomain = "https://github.com/rahimsiddiqui/";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".project-item");
    if (cards.length === 0) return;

    gsap.set(cards, { opacity: 0, y: 40 });

    ScrollTrigger.batch(cards, {
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: true,
        }),
      start: "top 85%",
      once: true,
    });
  }, []);

  return (
    <section className="pb-20 px-5 md:px-10 lg:px-20 max-w-520 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <ProjectCard
              project={project}
              isMain={false}
              githubDomain={githubDomain}
              onClick={() => router.push(`/projects/${project.allRounder}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
