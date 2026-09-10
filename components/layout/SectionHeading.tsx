type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
  tone?: "light" | "dark";
};

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.3em] ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {badge}
      </p>

      <h2
        className={`mt-5 text-4xl font-bold tracking-tight md:text-5xl ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-6 text-lg leading-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
