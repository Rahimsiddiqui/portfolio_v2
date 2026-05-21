"use client";

import { blogCategories } from "@/constants";

const BlogCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-10 px-5 max-w-520 mx-auto">
      {blogCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 border ${
            activeCategory === category
              ? "bg-white text-black border-white"
              : "bg-black-100 text-white/70 border-black-50 hover:border-white/30"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogCategories;
