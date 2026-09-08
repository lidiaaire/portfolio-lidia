import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import { CASE_STUDY_SLUGS, getCaseStudy } from "@/data/caseStudies";

// Genera /projects/elevate y /projects/flowly a partir de un único
// template: evita duplicar page.js entre ambos proyectos (comparten
// arquitectura visual y componentes, solo cambian datos/textos/acento).
export function generateStaticParams() {
  return CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Lidia García Torregrosa`,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  if (!getCaseStudy(slug)) {
    notFound();
  }

  return <CaseStudy slug={slug} />;
}
