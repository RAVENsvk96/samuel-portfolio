const topics = ["Starter Kit Pro", "SEO", "Výkon", "Case studies"];

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/80 blur-[110px]" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Blog
        </p>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Praktické poznatky z vývoja moderných webových stránok.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
          Dokumentujem vývoj Starter Kit Pro a zdieľam skúsenosti so SEO,
          výkonom, architektúrou a tvorbou kvalitných firemných webov.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur-sm transition-colors duration-300 hover:border-blue-200 hover:text-blue-600"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}