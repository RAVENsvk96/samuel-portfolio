import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projekty" className="bg-slate-50">
      <SectionHeading
        badge="Vybrané práce"
        title="Projekty, na ktorých som pracoval"
        description="Ukážky webov vytvorených so zameraním na dôveru, prehľadnosť a praktický výsledok pre klienta."
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