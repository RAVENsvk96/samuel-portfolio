import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section
      id="projekty"
      className="relative overflow-hidden border-t border-white/10 bg-[#04142F] text-white"
    >
      <div className="pointer-events-none absolute -left-48 top-1/4 size-[32rem] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative">
        <SectionHeading
          badge="Ukážkové projekty"
          title="Ako môže vyzerať váš nový web"
          description="Autorské demo koncepty vytvorené pre rôzne typy podnikania. Nie sú to klientské realizácie – ukazujú môj prístup k štruktúre, dizajnu, použiteľnosti a technickému spracovaniu webu."
          centered
          tone="dark"
        />

        <div className="mt-14 space-y-6 lg:mt-16 lg:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
