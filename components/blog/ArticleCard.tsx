import type { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  post: BlogPost;
};

export default function ArticleCard({ post }: ArticleCardProps) {
  const publishedDate = new Intl.DateTimeFormat("sk-SK", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(post.publishedAt));

  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={post.coverImage}
            alt={`Titulný obrázok článku ${post.title}`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            {post.category}
          </p>

          <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
            {post.title}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            <span aria-hidden="true">•</span>
            <span>{post.readingTime} min. čítania</span>
          </div>

          <div className="mt-auto pt-8">
            <span className="inline-flex items-center font-semibold text-blue-600">
              Prečítať článok

              <span
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}