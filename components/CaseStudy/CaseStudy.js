"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyOrigin from "./CaseStudyOrigin";
import CaseStudyProblem from "./CaseStudyProblem";
import CaseStudyObjectives from "./CaseStudyObjectives";
import CaseStudyRoles from "./CaseStudyRoles";
import CaseStudySolution from "./CaseStudySolution";
import CaseStudyHighlights from "./CaseStudyHighlights";
import CaseStudyDesignDecisions from "./CaseStudyDesignDecisions";
import CaseStudyArchitecture from "./CaseStudyArchitecture";
import CaseStudyTechnicalChallenges from "./CaseStudyTechnicalChallenges";
import CaseStudyResult from "./CaseStudyResult";
import CaseStudyLearnings from "./CaseStudyLearnings";
import CaseStudyTryDemo from "./CaseStudyTryDemo";
import CaseStudyNextProject from "./CaseStudyNextProject";
import styles from "./CaseStudy.module.css";

// Shell reutilizable entre /projects/elevate y /projects/flowly: monta el
// nodo de página (nav de vuelta + secciones) y delega cada bloque a un
// componente propio -por ahora CaseStudyHero, CaseStudyOrigin,
// CaseStudyProblem, CaseStudyObjectives, CaseStudyRoles,
// CaseStudySolution, CaseStudyHighlights, CaseStudyDesignDecisions,
// CaseStudyArchitecture, CaseStudyTechnicalChallenges, CaseStudyResult,
// CaseStudyLearnings, CaseStudyTryDemo y CaseStudyNextProject (cierre)-.
// Las siguientes secciones del case study se irán añadiendo aquí del
// mismo modo, sin tocar esta cabecera de navegación.
export default function CaseStudy({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  return (
    <main className={styles.caseStudy}>
      <div className={`container ${styles.topBar}`}>
        <Link href="/#projects" className={styles.back}>
          <span aria-hidden="true">←</span> {t.caseStudy.backToProjects}
        </Link>
      </div>

      <CaseStudyHero slug={slug} />
      <CaseStudyOrigin slug={slug} />
      <CaseStudyProblem slug={slug} />
      <CaseStudyObjectives slug={slug} />
      <CaseStudyRoles slug={slug} />
      <CaseStudySolution slug={slug} />
      <CaseStudyHighlights slug={slug} />
      <CaseStudyDesignDecisions slug={slug} />
      <CaseStudyArchitecture slug={slug} />
      <CaseStudyTechnicalChallenges slug={slug} />
      <CaseStudyResult slug={slug} />
      <CaseStudyLearnings slug={slug} />
      <CaseStudyTryDemo slug={slug} />
      <CaseStudyNextProject slug={slug} />
    </main>
  );
}
