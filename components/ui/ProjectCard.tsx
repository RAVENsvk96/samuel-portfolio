import Image from "next/image";

import Button from "@/components/ui/Button";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const imageOrder =
    index % 2 === 1
      ? "lg:order-2"
      : "lg:order-1";

  const contentOrder =
    index % 2 === 1
      ? "lg:order-1"
      : "lg:order-2";

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06] lg:rounded-[2rem]">
      <div className="grid lg:grid-cols-[1.06fr_0.94fr] lg:items-stretch">
        <div
          className={`p-4 pb-0 sm:p-6 sm:pb-0 lg:p-7 ${imageOrder}`}
        >
          <div className="aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#03193E] shadow-2xl shadow-black/20">
            <Image
              src={project.image}
              alt={`Ukážka demo projektu ${project.title}`}
              width={900}
              height={650}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </div>
        </div>

        <div
          className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 ${contentOrder}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
              Demo projekt · {project.category}
            </p>

            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400">
              {project.year}
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {project.description}
          </p>

          <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-white">Cieľ</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {project.goal}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Riešenie
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {project.result}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-white/20 sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Pozrieť demo projekt ${project.title} v novom okne`}
            >
              Pozrieť demo
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
