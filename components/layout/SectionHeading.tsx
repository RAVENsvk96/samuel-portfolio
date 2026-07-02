type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        {badge}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-slate-600 ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}