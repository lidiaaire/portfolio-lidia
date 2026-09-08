"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyLearnings.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "11.";

// "11. Lo que aprendí": mismo patrón slug-driven que el resto de
// secciones. 3 bloques sobrios y editoriales -sin icono, sin número
// grande-, más cerca del lenguaje de "02. El problema" que de una
// cuadrícula de cards con icono.
export default function CaseStudyLearnings({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const learnings = t.caseStudy[slug]?.learnings;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!learnings) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.learnings.title}
        </h2>

        <div className={styles.grid}>
          {learnings.map((learning) => (
            <div key={learning.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{learning.title}</h3>
              <p className={styles.cardDescription}>
                {learning.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
