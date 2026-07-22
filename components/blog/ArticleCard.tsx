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
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={post.coverImage}
            alt={`Titulný obrázok článku ${post.title}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
            {post.category}
          </p>

          <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
            {post.title}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min. čítania</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
