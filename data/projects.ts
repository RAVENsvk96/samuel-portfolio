import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Autoservis",
    category: "Lokálny biznis",
    year: "2026",
    description:
      "Moderný prezentačný web pre lokálny autoservis so zameraním na dôveryhodnosť, SEO a jednoduché objednanie.",
    goal:
      "Zvýšiť dôveryhodnosť firmy a zjednodušiť zákazníkom kontaktovanie servisu.",
    result:
      "Responzívny web s kontaktným formulárom, Google Maps, SEO základmi a čistou štruktúrou obsahu.",
    image: "/images/projects/autoservis.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    liveUrl: "https://autoservis-demo-beryl.vercel.app",
  },
];