"use client";

import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { projects } from "@/constants";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Showcase = ({ isLoading }) => {
  const router = useRouter();
  const githubDomain = "https://github.com/rahimsiddiqui/";

  useGSAP(() => {
    if (isLoading) return;

    const cards = gsap.utils.toArray(".project");
    
    gsap.fromTo(
      cards,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".showcase-layout",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [isLoading]);

  return (
    <section id="work" className="app-showcase max-w-520 mx-auto px-5 md:px-10 lg:px-20">
      <div className="w-full">
        <div className="showcase-layout flex flex-col xl:flex-row gap-12 xl:gap-16">
          {/* Main Featured Project - 65% width */}
          {projects.slice(0, 1).map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              isMain={true}
              githubDomain={githubDomain}
              onClick={() => router.push(`/projects/${project.allRounder}`)}
            />
          ))}

          {/* Secondary Projects Grid - 35% width */}
          <div className="project-list-wrapper flex flex-col md:flex-row xl:flex-col gap-12 xl:gap-16 xl:w-[35%]">
            {projects.slice(1, 3).map((project, idx) => (
              <ProjectCard
                key={idx + 1}
                project={project}
                isMain={false}
                githubDomain={githubDomain}
                onClick={() => router.push(`/projects/${project.allRounder}`)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 flex justify-center">
          <Button
            className="md:w-80 md:h-16 w-full max-w-sm h-12 font-medium"
            id="/projects"
            text="View All Projects"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
