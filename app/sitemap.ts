import type { MetadataRoute } from "next";

import { getAllBlogPosts } from "@/lib/blog";

const siteUrl = "https://www.samuelzeliska.sk";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
