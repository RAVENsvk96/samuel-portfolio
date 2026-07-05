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
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
      <div
        className={`flex flex-col gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
          index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            {String(index + 1).padStart(2, "0")} / {project.category}
          </p>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {project.description}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Cieľ
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {project.goal}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-950">
                Výsledok
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {project.result}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button href={project.liveUrl}>
              Pozrieť web
            </Button>
          </div>
        </div>

        <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 p-3">
          <Image
            src={project.image}
            alt={`Screenshot projektu ${project.title}`}
            width={900}
            height={650}
            className="h-full w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </article>
  );
}