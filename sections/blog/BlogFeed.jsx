"use client";

import GlowCard from "@/components/GlowCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogFeed = ({ posts }) => {
  const router = useRouter();

  return (
    <section className="padding-x-lg py-20 max-w-520 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white/90">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <GlowCard
            key={post.link}
            card={{ review: "" }}
            className="cursor-pointer pt-1! pb-14! group min-[450px]:px-7! blog-card"
            onClick={() => router.push(`/blog/${post.link}`)}
          >
            <div className="flex flex-col h-full">
              <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden border border-black-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute top-2 left-3 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold border border-white/10">
                  {post.tags?.[0] || post.category}
                </div>
              </div>
              <div className="flex flex-col grow">
                <span className="text-xs text-white/50 mt-1">{post.date}</span>
                <h3 className="text-lg font-bold mt-4 mb-5.5 text-white tracking-tight">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
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

      {posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40 text-lg">
            No articles found in this category.
          </p>
        </div>
      )}
    </section>
  );
};

export default BlogFeed;
