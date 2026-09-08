"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyProblem.module.css";

// Número de sección fijo, igual criterio que CaseStudyOrigin.
const SECTION_NUMBER = "02.";

// "02. El problema": transición narrativa entre el origen y los
// objetivos. Deliberadamente simple -sin icono, sin card, una sola
// columna de texto-, pero mismo patrón slug-driven que el resto de
// secciones del case study.
export default function CaseStudyProblem({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const problem = t.caseStudy[slug]?.problem;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!problem) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.problem.title}
        </h2>

        <div className={styles.text}>
          {problem.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
