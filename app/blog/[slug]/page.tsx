import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import Prose from "@/components/blog/Prose";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/blog";

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
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "sk_SK",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage,
          width: 1280,
          height: 640,
          alt: `Titulný obrázok článku ${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
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
    <div className="min-h-screen bg-[#03193E] text-white">
      <Navbar variant="blog" />

      <main className="px-6 py-12 sm:py-16 lg:py-20">
        <article>
          <header className="mx-auto max-w-5xl text-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-slate-400 transition-colors hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#03193E]"
            >
              <span
                className="transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              >
                ←
              </span>

              Späť na blog
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              {post.category}
            </p>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-slate-400">
              <time dateTime={post.publishedAt}>{publishedDate}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readingTime} min. čítania</span>
            </div>
          </header>

          <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
            <div className="relative aspect-[2/1] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#061B3A] shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
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

      <Footer />
    </div>
  );
}
