"use client";

import { useEffect, useState, useRef } from "react";
import { blogPosts } from "@/constants";
import BlogHero from "@/sections/blog/BlogHero";
import BlogFeatured from "@/sections/blog/BlogFeatured";
import BlogCategories from "@/sections/blog/BlogCategories";
import BlogFeed from "@/sections/blog/BlogFeed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const animatedTitles = useRef(new Set());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Target cards that haven't been animated yet (tracked by title in Ref)
    const cards = gsap.utils.toArray(".blog-card").filter((card) => {
      const title = card.querySelector("h3")?.textContent;
      return title && !animatedTitles.current.has(title);
    });

    if (cards.length === 0) return;

    // Set initial state for cards that are about to be animated
    // Set initial state for new cards
    gsap.set(cards, { opacity: 0, yPercent: 25 });

    const batch = ScrollTrigger.batch(cards, {
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power1.inOut",
          overwrite: true,
          onComplete: () => {
            // Persist the animated state in our Ref
            elements.forEach((el) => {
              const title = el.querySelector("h3")?.textContent;
              if (title) animatedTitles.current.add(title);
            });
          },
        }),
      start: "top 85%",
      once: true,
    });

    return () => {
      batch.forEach((t) => t.kill());
    };
  }, [activeCategory]);

  const filteredPosts = blogPosts.filter((post) => {
    if (activeCategory === "All") return true;
    return post.category === activeCategory;
  });

  return (
    <div className="bg-black min-h-screen">
      <BlogHero />
      <BlogFeatured />
      <BlogCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <BlogFeed posts={filteredPosts} />
    </div>
  );
};

export default Blog;
