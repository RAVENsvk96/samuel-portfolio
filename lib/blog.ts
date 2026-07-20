import "server-only";

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { z } from "zod";

import {
  BLOG_CATEGORIES,
  type BlogPost,
  type BlogPostWithContent,
} from "@/types/blog";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

const blogPostMetadataSchema = z.object({
  title: z.string().trim().min(1, "Názov článku je povinný."),
  description: z
    .string()
    .trim()
    .min(1, "Popis článku je povinný.")
    .max(180, "Popis článku môže mať maximálne 180 znakov."),
  publishedAt: z.iso.date(),
  updatedAt: z.iso.date().optional(),
  category: z.enum(BLOG_CATEGORIES),
  tags: z.array(z.string().trim().min(1)).min(1),
  coverImage: z.string().trim().startsWith("/"),
  featured: z.boolean().default(false),
});

function ensureBlogDirectoryExists(): void {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    fs.mkdirSync(BLOG_DIRECTORY, { recursive: true });
  }
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, "");
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;

  const normalizedContent = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_[\](){}-]/g, " ");

  const wordCount = normalizedContent
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function readBlogFile(filename: string): BlogPostWithContent {
  const slug = getSlugFromFilename(filename);
  const filePath = path.join(BLOG_DIRECTORY, filename);

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const result = blogPostMetadataSchema.safeParse(data);

  if (!result.success) {
    const formattedErrors = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("\n");

    throw new Error(
      `Neplatný frontmatter v článku "${filename}":\n${formattedErrors}`,
    );
  }

  const metadata = result.data;

  if (
    metadata.updatedAt &&
    new Date(metadata.updatedAt) < new Date(metadata.publishedAt)
  ) {
    throw new Error(
      `Článok "${filename}" má updatedAt skorší než publishedAt.`,
    );
  }

  return {
    slug,
    ...metadata,
    readingTime: calculateReadingTime(content),
    content,
  };
}

function removeBlogPostContent(post: BlogPostWithContent): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    category: post.category,
    tags: post.tags,
    coverImage: post.coverImage,
    featured: post.featured,
    readingTime: post.readingTime,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  ensureBlogDirectoryExists();

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(readBlogFile)
    .map(removeBlogPostContent)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    );
}

export function getBlogPostBySlug(
  slug: string,
): BlogPostWithContent | undefined {
  ensureBlogDirectoryExists();

  const safeSlug = path.basename(slug);
  const filename = `${safeSlug}.mdx`;
  const filePath = path.join(BLOG_DIRECTORY, filename);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  return readBlogFile(filename);
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.featured);
}

export function getBlogPostSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug);
}