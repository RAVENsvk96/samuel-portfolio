export const BLOG_CATEGORIES = [
  "Development",
  "SEO",
  "Case Studies",
  "Business",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  tags: string[];
  coverImage: string;
  featured: boolean;
};

export type BlogPost = BlogPostMetadata & {
  slug: string;
  readingTime: number;
};

export type BlogPostWithContent = BlogPost & {
  content: string;
};