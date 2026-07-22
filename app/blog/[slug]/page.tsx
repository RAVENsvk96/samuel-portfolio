import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Prose from "@/components/blog/Prose";
import { MDXRemote } from "next-mdx-remote/rsc";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Článok sa nenašiel | Samuel Zelíska",
    };
  }

  return {
    title: `${post.title} | Samuel Zelíska`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Intl.DateTimeFormat("sk-SK", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(post.publishedAt));

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <article>
        <header>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {post.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min. čítania</span>
          </div>
        </header>

       <Prose>
        <MDXRemote source={post.content} />
       </Prose>
      </article>
    </main>
  );
}
