"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, Globe, Github } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
  </svg>
);

const ProjectContent = ({ project }) => {
  const showcaseRef = useRef(null);
  const githubDomain = "https://github.com/rahimsiddiqui/";

  const handleMouseMove = useCallback((e) => {
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    showcaseRef.current.style.setProperty("--mouse-x", `${x}px`);
    showcaseRef.current.style.setProperty("--mouse-y", `${y}px`);
    
    const mouseX = x - rect.width / 2;
    const mouseY = y - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    showcaseRef.current.style.setProperty("--start", `${angle + 60}`);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-5 md:px-10 lg:px-20 max-w-520 mx-auto">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-white/40 hover:text-white transition-colors mb-12 group text-sm uppercase tracking-widest font-bold"
        >
          <MoveLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              {project.title.split("|")[0].trim()}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="flex gap-4">
             <a 
              href={`${githubDomain}${project.allRounder}`}
              target="_blank"
              className="flex items-center justify-center size-14 border border-black-50 bg-black-100 rounded-2xl hover:bg-black-50 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a 
              href={`https://${project.link ? project.link : project.allRounder}.vercel.app`}
              target="_blank"
              className="flex items-center justify-center px-8 h-14 bg-white text-black rounded-2xl font-bold hover:bg-black-50 hover:text-white transition-all group"
            >
              Live Demo
              <Globe size={18} className="ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div 
          ref={showcaseRef}
          onMouseMove={handleMouseMove}
          className="card card-border rounded-3xl overflow-hidden mb-20 md:mb-32 aspect-video relative group transition-colors duration-1000"
        >
          <div className="glow absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_40%)]" />
          <Image 
            src={`/images/${project.allRounder}.png`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-102"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 border-t border-black-50 pt-16 md:pt-24">
          <div className="lg:col-span-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-10 font-black">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((tech) => (
                <div 
                  key={tech} 
                  className="px-8 py-4 bg-black-100 border border-black-50 rounded-2xl text-white/80 text-lg font-medium hover:border-white/20 transition-all cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-10 font-black">
                About the project
              </h3>
              <p className="text-white/60 leading-relaxed text-lg italic">
                {project.title.split("|")[1] ? project.title.split("|")[1].trim() : "A specialized exploration into modern web architecture."}
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-black-50/50">
               <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-4 font-black">
                Availability
              </span>
              <p className="text-white font-medium text-lg">Completed & Deployed</p>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-20 border-t border-black-50 flex justify-between items-center group">
          <Link href="/projects" className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-3 font-black">Explore more</span>
            <div className="text-white/40 hover:text-white transition-colors text-3xl md:text-4xl font-bold tracking-tighter">
              All Projects
            </div>
          </Link>
          <div className="size-20 rounded-full border border-black-50 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
             <MoveLeft size={32} className="rotate-180 group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
