"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveSection("");
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll state for navbar background
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ScrollTrigger for active section highlighting
    const sections = ["work", "experience", "skills", "testimonials"];
    const triggers = [];

    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) setActiveSection(id);
          },
        });
        triggers.push(trigger);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      triggers.forEach((t) => t.kill());
    };
  }, [pathname]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Link href="/" className="logo">
            Rahim Siddiqui
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-8">
              {navLinks.map(({ name, link }) => {
                const sectionId = link.startsWith("/#")
                  ? link.split("#")[1]
                  : "";
                const isActive = activeSection === sectionId;

                return (
                  <li key={name} className="group relative">
                    <a href={link} className="flex flex-col items-center">
                      <span
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {name}
                      </span>
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
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

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/" className="logo">
            Rahim Siddiqui
          </Link>

          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <button className="p-2 text-white/90 hover:text-white transition-colors relative z-[101]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-black border-white/10 text-white">
              <div className="mx-auto w-full max-w-sm">
                <VisuallyHidden.Root>
                  <DrawerHeader>
                    <DrawerTitle className="text-white text-center text-xl">
                      Navigation
                    </DrawerTitle>
                    <DrawerDescription className="text-white/60 text-center">
                      Jump to a section
                    </DrawerDescription>
                  </DrawerHeader>
                </VisuallyHidden.Root>
                <div className="p-4 pb-10 mt-12 mb-4">
                  <nav className="lg:hidden">
                    <ul className="flex flex-col space-y-5 items-center justify-center">
                      {navLinks.map(({ name, link }) => {
                        const sectionId = link.startsWith("/#")
                          ? link.split("#")[1]
                          : "";
                        const isActive = activeSection === sectionId;

                        return (
                          <li key={name} className="group relative">
                            <a
                              href={link}
                              onClick={() => setIsOpen(false)}
                              className="flex flex-col items-center"
                            >
                              <span
                                className={`text-lg transition-colors duration-300 ${
                                  isActive
                                    ? "text-white"
                                    : "text-white/80 group-hover:text-white"
                                }`}
                              >
                                {name}
                              </span>
                              {/* Underline span completely removed from mobile view */}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  <div className="pt-13">
                    <Link
                      href="/#contact"
                      onClick={() => setIsOpen(false)}
                      className="flex group w-fit mx-auto"
                    >
                      <div className="px-12 py-3 rounded-lg bg-white text-black group-hover:bg-neutral-200 transition-colors duration-300">
                        <span className="text-lg font-medium">Contact me</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
