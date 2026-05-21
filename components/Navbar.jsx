"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // NON-HOME ROUTES
    if (pathname !== "/") {
      setActiveSection("");
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    const sections = ["work", "experience", "skills", "testimonials"];

    const triggers = sections
      .map((id) => {
        const element = document.getElementById(id);

        if (!element) return null;

        return ScrollTrigger.create({
          trigger: element,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(id);
            }
          },
        });
      })
      .filter(Boolean);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      triggers.forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link href="/" className="logo">
          Rahim Siddiqui
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => {
              const sectionId = link.startsWith("/#") ? link.split("#")[1] : "";
              const isActive = activeSection === sectionId;

              return (
                <li key={name} className="group">
                  <a href={link} className={isActive ? "active" : ""}>
                    <span
                      className={`transition-colors duration-300 ${isActive ? "text-white" : "text-white/80"}`}
                    >
                      {name}
                    </span>
                    <span
                      className={`underline ${isActive ? "w-full" : "w-0"}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
