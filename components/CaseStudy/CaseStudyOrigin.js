"use client";

import { TbBulb } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyOrigin.module.css";

// Número de sección fijo: es parte de la narrativa del case study (no del
// contenido de un proyecto concreto), así que vive aquí como constante en
// vez de en data/caseStudies o en los locales.
const SECTION_NUMBER = "01.";

// "01. De dónde nace la idea": misma lógica que CaseStudyHero -componente
// genérico, slug-driven, sin mencionar ningún proyecto-. Reutilizable en
// cuanto Flowly defina su propio caseStudy.flowly.origin en los locales;
// por ahora solo Elevate lo tiene, así que es el único que renderiza algo.
export default function CaseStudyOrigin({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const origin = t.caseStudy[slug]?.origin;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!origin) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <TbBulb className={styles.icon} aria-hidden="true" />
          <h2 className={styles.title}>
            <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
            {t.caseStudy.origin.title}
          </h2>
        </div>

        <div className={styles.body}>
          <div className={styles.text}>
            {origin.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <blockquote className={styles.highlight}>
            <p>{origin.quote}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
