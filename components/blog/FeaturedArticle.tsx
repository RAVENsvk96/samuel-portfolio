import type { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

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
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Odporúčaný článok
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          Začni tu
        </h2>
      </div>

      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
        <Link
          href={`/blog/${post.slug}`}
          className="grid focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="relative min-h-72 overflow-hidden bg-slate-100 sm:min-h-96 lg:min-h-[34rem]">
            <Image
              src={post.coverImage}
              alt={`Titulný obrázok článku ${post.title}`}
              fill
              priority
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {post.category}
            </p>

            <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600 sm:text-4xl">
              {post.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
              <time dateTime={post.publishedAt}>{publishedDate}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readingTime} min. čítania</span>
            </div>

            <div className="mt-10 inline-flex items-center font-semibold text-blue-600">
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