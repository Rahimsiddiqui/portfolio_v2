"use client";

import { projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProjectsIndex() {
  const router = useRouter();
  const githubDomain = "https://github.com/rahimsiddiqui/";

  useGSAP(() => {
    gsap.fromTo(
      ".project-item",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-5 md:px-10 lg:px-20 max-w-520 mx-auto">
      <div className="flex flex-col mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
          Selected <span className="text-white/40">Works</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
          A deep dive into my recent development projects, ranging from immersive 3D web experiences to complex full-stack applications.
        </p>
      </div>

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
    </div>
  );
}
