"use client";

import GlowCard from "@/components/GlowCard";
import { blogPosts } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogFeatured = () => {
  const router = useRouter();
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <section className="padding-x-lg py-10 max-w-520 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white/90">
        Featured Insights
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {featuredPosts.map((post) => (
          <GlowCard
            key={post.link}
            card={{ review: "" }}
            className="cursor-pointer pt-1! pb-14! group blog-card"
            onClick={() => router.push(`/blog/${post.link}`)}
          >
            <div className="flex flex-col h-full">
              <div className="relative w-full h-35 sm:h-60 md:h-75 mb-6 rounded-lg overflow-hidden border border-black-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold border border-white/10">
                  {post.tags?.[0] || post.category}
                </div>
              </div>
              <div className="flex flex-col grow">
                <p className="text-white/50 text-sm">{post.date}</p>
                <h3 className="text-xl md:text-2xl font-bold mb-7.5 mt-6 text-white hover:text-white/80 transition-colors tracking-tight">
                  {post.title}
                </h3>
                <p className="text-white/70 line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
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
  );
};

export default BlogFeatured;
