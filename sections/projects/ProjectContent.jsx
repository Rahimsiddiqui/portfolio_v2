"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Globe,
  Lightbulb,
  Target,
} from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { projects } from "@/constants";
import { useRouter } from "next/navigation";

const ProjectContent = ({ project }) => {
  const containerRef = useRef(null);
  const router = useRouter();

  const nextProject =
    projects[
      (projects.findIndex((p) => p.allRounder === project.allRounder) + 1) %
        projects.length
    ];

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const tl = gsap.timeline();

      // Title animation
      const splitTitle = new SplitText(".project-title", { type: "lines" });
      tl.from(splitTitle.lines, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Meta info animation
      tl.from(
        ".project-link",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4",
      );

      // Hero image animation
      tl.from(
        ".project-hero-image",
        {
          opacity: 0,
          scale: 1.05,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // Content blocks animation
      tl.from(
        ".content-block",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.8",
      );
    },
    { scope: containerRef },
  );

  return (
    <article
      ref={containerRef}
      className="bg-black min-h-screen pt-32 pb-20 overflow-x-hidden"
    >
      {/* Background Glows (consistent with BlogContent) */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-blue-700 blur-[150px] rounded-full w-96 h-96 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-purple-700 blur-[150px] rounded-full w-96 h-96 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto padding-x-lg">
        {/* Navigation */}
        <Link
          href="/#work"
          className="group flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors mb-12 w-fit"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Projects</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center justify-between gap-8 flex-wrap">
            <h1 className="project-title text-4xl md:text-5xl lg:text-7xl font-bold text-white/95 leading-[1.1] tracking-tight">
              {project.title.split("|")[0].trim()}
            </h1>

            <a
              href={`https://${project.link ? project.link : project.allRounder}.vercel.app`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex project-link items-center gap-2 text-white/90 hover:text-blue-400 transition-colors"
            >
              <Globe size={18} />
              <span className="text-base font-medium">Live Preview</span>
            </a>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="project-hero-image relative w-full aspect-video md:aspect-21/11 rounded-2xl overflow-hidden border bg-[#080808] border-white/10 mb-20 shadow-2xl shadow-zinc-900/80">
          <Image
            src={`/images/${project.allRounder}.png`}
            alt={project.title}
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* Structured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-16 lg:gap-24 xl:gap-26">
          {/* Main Narrative */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-20">
            <section className="content-block prose prose-invert prose-lg max-w-fit 2xl:max-w-prose prose-strong:text-white/95 [&>p]:mb-6 [&>p]:text-lg [&>p]:text-white/95 [&>p]:leading-relaxed [&>h2,h3,h4]:tracking-tight">
              <div className="flex items-center gap-3 mb-6 not-prose">
                <div className="p-2 pb-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">
                  The Vision
                </h2>
              </div>
              <p className="leading-relaxed mb-10">{project.description}</p>

              <div className="flex items-center gap-3 mt-16 mb-6 not-prose">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">
                  Problem & Solution
                </h2>
              </div>

              <div
                className="project-narrative-content prose prose-invert prose-lg max-w-prose [&>p]:text-lg [&>p]:text-white/95 [&>p]:leading-relaxed [&>h2,h3,h4]:tracking-wide [&>h2,h3,h4]:text-xl [&>h2,h3,h4]:font-bold [&>h2,h3,h4]:mb-3.5 lg:[&>h2,h3,h4]:mb-4.5 [&>p]:mb-8 xl:[&>p]:mb-9"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            </section>
          </div>

          {/* Sidebar Info */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="content-block bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-32">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                <Code size={20} className="text-blue-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div>
                  <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">
                    Role
                  </span>
                  <span className="text-white font-medium">Lead Developer</span>
                </div>
                <div>
                  <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">
                    Timeline
                  </span>
                  <span className="text-white font-medium">{project.year}</span>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/10 flex flex-col">
                <a
                  href={`https://github.com/rahimsiddiqui/${project.allRounder}`}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg shadow-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    className="size-7"
                  >
                    <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
                  </svg>
                  View Source
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-18 pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-white/40 text-sm block mb-2 uppercase tracking-widest">
                Next Up
              </span>
              <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {nextProject.title.split("|")[0].trim()}
              </h4>
            </div>
            <button
              onClick={() => router.push(`/projects/${nextProject.allRounder}`)}
              className="group flex items-center gap-4 cursor-pointer px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all"
            >
              <span className="font-bold">Explore Project</span>
              <ArrowLeft
                size={20}
                className="rotate-180 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ProjectContent;
