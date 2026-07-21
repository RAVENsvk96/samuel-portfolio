import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import { getFeaturedBlogPost } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Samuel Zelíska",
  description:
    "Praktické články o vývoji moderných webových stránok, SEO, výkone a skúsenostiach z reálnych projektov.",
};

export default function BlogPage() {
  const featuredPost = getFeaturedBlogPost();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <BlogHero />

      {featuredPost && <FeaturedArticle post={featuredPost} />}
    </main>
  );
}
