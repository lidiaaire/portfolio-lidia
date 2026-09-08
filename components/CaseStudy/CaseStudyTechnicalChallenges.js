"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyTechnicalChallenges.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "09.";

// "09. Retos técnicos": mismo patrón slug-driven que el resto de
// secciones. Grid de 5 bloques compactos y directos -sin icono, número
// "01"-"05" calculado a partir del índice en vez de vivir en el locale-.
export default function CaseStudyTechnicalChallenges({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const challenges = t.caseStudy[slug]?.technicalChallenges;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!challenges) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.technicalChallenges.title}
        </h2>

        <div className={styles.grid}>
          {challenges.map((challenge, index) => (
            <div key={challenge.title} className={styles.item}>
              <span className={styles.itemNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.itemTitle}>{challenge.title}</h3>
              <p className={styles.itemDescription}>
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
