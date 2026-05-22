"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar, ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { blogPosts } from "@/constants";
import GlowCard from "@/components/GlowCard";
import { useRouter } from "next/navigation";

const BlogContent = ({ post }) => {
  const containerRef = useRef(null);
  const router = useRouter();

  const otherPosts = blogPosts
    .filter((p) => p.link !== post.link)
    .slice(0, 3);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const tl = gsap.timeline();

      // Title animation
      const splitTitle = new SplitText(".post-title", { type: "lines" });
      tl.from(splitTitle.lines, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Meta items animation
      tl.from(
        ".post-meta-item",
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
        ".post-hero-image",
        {
          opacity: 0,
          scale: 1.05,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // Content animation
      tl.from(
        ".post-content > *",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.8",
      );

      // Other posts animation
      tl.from(
        ".other-posts-section",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <article ref={containerRef} className="bg-black min-h-screen pt-32 pb-20">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-blue-700 blur-[150px] rounded-full w-96 h-96 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-purple-700 blur-[150px] rounded-full w-96 h-96 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto padding-x-lg">
        {/* Back Link */}
        <Link
          href="/blog"
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 w-fit"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Blog</span>
        </Link>

        {/* Header */}
        <header className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="post-meta-item flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-white/80">
              <Tag size={14} className="text-blue-400" />
              {post.tags?.[0] || post.category}
            </div>
            <div className="post-meta-item flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-white/80">
              <Calendar size={14} className="text-purple-400" />
              {post.date}
            </div>
            <div className="post-meta-item flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-white/80">
              <Clock size={14} className="text-green-400" />5 min read
            </div>
          </div>

          <h1 className="post-title text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
            {post.title}
          </h1>

          <p className="post-meta-item text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        <div className="post-hero-image relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden border border-white/10 mb-20">
          <Image
            src={post.image}
            alt={post.title}
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div
            className="post-content prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-p:text-white/70 prose-p:leading-relaxed
              prose-strong:text-white prose-code:text-blue-300
              prose-img:rounded-2xl prose-img:border prose-img:border-white/10
              [&>h3]:text-2xl [&>h3]:font-semibold xl:[&>h3]:text-[1.65rem] [&>h3]:mt-12 xl:[&>h3]:mt-14 [&>h3]:mb-6 xl:[&>h3]:mb-7.5 [&>p]:mb-8 [&>p]:leading-relaxed xl:[&>p]:text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tag Divider */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-4">
            <span className="text-white/60 text-sm uppercase tracking-widest font-semibold w-full mb-2">
              Topics
            </span>
            {(post.tags || ["Design", "Development", "Performance", "UX"]).map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Other Articles Section */}
          <section className="other-posts-section mt-28 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white/90">
              Other Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((otherPost) => (
                <GlowCard
                  key={otherPost.link}
                  card={{ review: "" }}
                  className="cursor-pointer pt-1! pb-14! group min-[450px]:px-7! blog-card"
                  onClick={() => router.push(`/blog/${otherPost.link}`)}
                >
                  <div className="flex flex-col h-full">
                    <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden border border-black-50">
                      <Image
                        src={otherPost.image}
                        alt={otherPost.title}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-3 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold border border-white/10">
                        {otherPost.tags?.[0] || otherPost.category}
                      </div>
                    </div>
                    <div className="flex flex-col grow">
                      <span className="text-xs text-white/50 mt-1">
                        {otherPost.date}
                      </span>
                      <h3 className="text-lg font-bold mt-4 mb-5.5 text-white tracking-tight">
                        {otherPost.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {otherPost.excerpt}
                      </p>
                      <div className="mt-auto">
                        <span className="text-white font-medium flex items-center gap-2 group cursor-pointer w-fit">
                          Read More
                          <span className="group-hover:translate-x-1.5 transition-transform">
                            <ArrowRight size={16} />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default BlogContent;
