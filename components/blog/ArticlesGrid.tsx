import type { BlogPost } from "@/types/blog";
import ArticleCard from "@/components/blog/ArticleCard";

type ArticlesGridProps = {
  posts: BlogPost[];
};

export default function ArticlesGrid({ posts }: ArticlesGridProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Blog
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Všetky články
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Praktické články o vývoji webov, SEO, výkone a budovaní Starter Kit
          Pro.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
