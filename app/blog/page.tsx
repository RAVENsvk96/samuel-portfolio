import type { Metadata } from "next";

import ArticlesGrid from "@/components/blog/ArticlesGrid";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import {
  getAllBlogPosts,
  getFeaturedBlogPost,
} from "@/lib/blog";

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
    <div className="min-h-screen bg-[#03193E] text-white">
      <Navbar variant="blog" />

      <main className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
        <BlogHero />

        {featuredPost && (
          <div className="mt-16 sm:mt-20">
            <FeaturedArticle post={featuredPost} />
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-20 sm:mt-24">
            <ArticlesGrid posts={posts} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
