"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { LinkIcon } from "lucide-react";
import gsap from "gsap";

const ProjectCard = ({ project, isMain = false, githubDomain, onClick }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Glow effect logic (similar to GlowCard but optimized)
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Glow angle
    const mouseX = x - rect.width / 2;
    const mouseY = y - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardRef.current.style.setProperty("--start", `${angle + 60}`);
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const truncate = (text) => {
    return text.length > 160 ? text.slice(0, 160) + "..." : text;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className={`
        project group relative overflow-hidden rounded-2xl border border-zinc-900 bg-[#080808] cursor-pointer flex flex-col ${isMain ? "xl:w-[65%] h-full justify-between pb-5 xl:pb-6" : "w-full pb-3"}
      `}
    >
      {/* Glow Overlay - Light that follows cursor */}
      <div
        className="glow absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.055), transparent 45%)`,
        }}
      />

      {/* TOP SECTION: Grouped Image + Tags */}
      <div className="flex flex-col w-full">
        <div
          className={`image-wrapper relative overflow-hidden w-full ${isMain ? "xl:h-105 md:h-87.5 h-80" : "xl:h-60 md:h-72 h-64"}`}
        >
          <div
            ref={imageRef}
            className="w-full h-full transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
          >
            <Image
              src={`/images/${project.allRounder}.png`}
              alt={project.title}
              fill
              priority={isMain}
              className="object-cover object-center inset-0"
              sizes={
                isMain
                  ? "(max-width: 768px) 100vw, 65vw"
                  : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 35vw"
              }
            />
          </div>

          {/* Action Buttons Overlay */}
          <div
            className="absolute top-4 right-4 flex gap-3 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  `https://${project.link ? project.link : project.allRounder}.vercel.app`,
                  "_blank",
                );
              }}
              className="flex items-center justify-center p-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
              aria-label="Visit Live Site"
            >
              <LinkIcon size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(`${githubDomain}${project.allRounder}`, "_blank");
              }}
              className="flex items-center justify-center p-1 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300"
              aria-label="View Source on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
                className="size-6"
              >
                <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tags stay at the bottom of the top section */}
        <div
          className={`flex flex-wrap gap-2 px-6 ${isMain ? "lg:px-8" : ""} pt-8`}
        >
          {project.technologies?.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10 text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM SECTION: Title + Description */}
      <div
        ref={contentRef}
        className={`text-content p-6 pt-2 ${isMain ? "xl:pb-8 lg:px-8" : "xl:pb-6"}`}
      >
        <h2
          className={`font-bold text-white text-2xl tracking-tight ${isMain ? "text-2xl md:text-3xl lg:text-4xl mt-5.25 mb-6.5" : "md:text-2xl mt-1 mb-4.5"}`}
        >
          {project.title.split("|")[0].trim()}
        </h2>

        <p
          className={`text-white/80 leading-relaxed ${isMain ? "text-lg md:text-xl" : "text-base"}`}
        >
          {isMain ? project.description : truncate(project.description)}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
