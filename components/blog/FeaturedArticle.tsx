import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/types/blog";

type FeaturedArticleProps = {
  post: BlogPost;
};

export default function FeaturedArticle({
  post,
}: FeaturedArticleProps) {
  const publishedDate = new Intl.DateTimeFormat("sk-SK", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(post.publishedAt));

  return (
    <section>
      <div className="mb-8 sm:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Odporúčaný článok
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Začni tu
        </h2>
      </div>

      <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]">
        <Link
          href={`/blog/${post.slug}`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset"
        >
          <div className="relative aspect-[2/1] overflow-hidden border-b border-white/10 bg-[#061B3A]">
            <Image
              src={post.coverImage}
              alt={`Titulný obrázok článku ${post.title}`}
              fill
              priority
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              sizes="(min-width: 1280px) 1152px, 100vw"
            />
          </div>

          <div className="grid gap-7 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                {post.category}
              </p>

              <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-4xl">
                {post.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {post.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                <time dateTime={post.publishedAt}>{publishedDate}</time>
                <span aria-hidden="true">•</span>
                <span>{post.readingTime} min. čítania</span>
              </div>
            </div>

            <div className="inline-flex items-center font-semibold text-blue-300">
              Prečítať článok

              <span
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </div>
        </Link>
      </article>
    </section>
  );
}
