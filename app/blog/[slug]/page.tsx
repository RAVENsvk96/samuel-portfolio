import Prose from "@/components/blog/Prose";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

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
    <main className="px-6 py-16 sm:py-20 lg:py-24">
      <article>
        <header className="mx-auto max-w-5xl text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          >
          <span
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          >
            ←
          </span>
          Späť na blog
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            {post.category}
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            <span aria-hidden="true">•</span>
            <span>{post.readingTime} min. čítania</span>
          </div>
        </header>

        <div className="mx-auto mt-14 max-w-6xl sm:mt-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src={post.coverImage}
              alt={`Titulný obrázok článku ${post.title}`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1152px, 100vw"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Prose>
            <MDXRemote source={post.content} />
          </Prose>
        </div>
      </article>
    </main>
  );
}