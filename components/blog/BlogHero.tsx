const topics = ["Starter Kit Pro", "SEO", "Výkon", "Case studies"];

export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#061B3A] px-6 py-16 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(96,165,250,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-1/2 top-0 -z-10 size-80 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[110px] sm:size-96" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Blog
        </p>

        <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl">
          Praktické poznatky z vývoja moderných webových stránok.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl">
          Dokumentujem vývoj Starter Kit Pro a zdieľam skúsenosti so SEO,
          výkonom, architektúrou a tvorbou kvalitných firemných webov.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors duration-300 hover:border-blue-400/35 hover:text-white"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
