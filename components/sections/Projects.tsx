import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projekty" className="bg-slate-50">
      <SectionHeading
        badge="Ukážkové projekty"
        title="Ako môže vyzerať váš nový web"
        description="Tieto ukážkové projekty som vytvoril pre rôzne typy lokálnych firiem. Predstavujú môj prístup k dizajnu, použiteľnosti, výkonu a technickému spracovaniu webových stránok."
        centered
      />

      <div className="mt-14 space-y-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}