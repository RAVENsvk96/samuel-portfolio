import ArticleCard from "@/components/blog/ArticleCard";
import type { BlogPost } from "@/types/blog";

type ArticlesGridProps = {
  posts: BlogPost[];
};

export default function ArticlesGrid({ posts }: ArticlesGridProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Blog
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Všetky články
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          Praktické články pre podnikateľov a firmy o tvorbe webu, cenách,
          redizajne, SEO a technickom spracovaní.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
