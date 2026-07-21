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
    <section className="mt-20">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Odporúčaný článok
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Začni tu
        </h2>
      </div>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden bg-slate-100">
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              {post.category}
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              <Link
                href={`/blog/${post.slug}`}
                className="transition-colors hover:text-blue-600"
              >
                {post.title}
              </Link>
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
              <time dateTime={post.publishedAt}>{publishedDate}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min. čítania</span>
            </div>

            <div className="mt-8">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Prečítať článok
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
