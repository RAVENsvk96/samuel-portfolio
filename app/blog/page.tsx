import ArticlesGrid from "@/components/blog/ArticlesGrid";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import {
  getAllBlogPosts,
  getFeaturedBlogPost,
} from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Samuel Zelíska",
  description:
    "Praktické články o vývoji moderných webových stránok, SEO, výkone a skúsenostiach z reálnych projektov.",
};

export default function BlogPage() {
  const featuredPost = getFeaturedBlogPost();

  const posts = getAllBlogPosts().filter(
    (post) => post.slug !== featuredPost?.slug,
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
      <BlogHero />

      {featuredPost && (
        <div className="mt-20 sm:mt-24">
          <FeaturedArticle post={featuredPost} />
        </div>
      )}

      {posts.length > 0 && (
        <div className="mt-24 sm:mt-28">
          <ArticlesGrid posts={posts} />
        </div>
      )}
    </main>
  );
}