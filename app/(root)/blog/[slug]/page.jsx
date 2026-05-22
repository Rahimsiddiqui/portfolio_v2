import { blogPosts } from "@/constants";
import { notFound } from "next/navigation";
import BlogContent from "@/sections/blog/BlogContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.link === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Rahim Siddiqui Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.link,
  }));
}

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.link === slug);

  if (!post) {
    notFound();
  }

  return <BlogContent post={post} />;
};

export default BlogPostPage;
