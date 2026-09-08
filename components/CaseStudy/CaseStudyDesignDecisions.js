"use client";

import { TbAdjustments, TbComponents, TbDevices, TbFocus2, TbPalette } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyDesignDecisions.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "07.";

// Un icono por decisión, en el mismo orden que el array designDecisions
// del locale (mismo criterio que ICONS en CaseStudyObjectives.js/
// CaseStudyRoles.js): decisión de diseño de la sección, no contenido.
const ICONS = [TbFocus2, TbPalette, TbComponents, TbDevices, TbAdjustments];

// "07. UX/UI y decisiones de diseño": mismo patrón slug-driven que el
// resto de secciones. Fila de 5 principios muy compactos -icono, título,
// descripción-, sin cards ni fondos propios: se lee como una lista de
// principios técnicos, no como una cuadrícula de bloques.
export default function CaseStudyDesignDecisions({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const decisions = t.caseStudy[slug]?.designDecisions;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!decisions) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.designDecisions.title}
        </h2>

        <div className={styles.grid}>
          {decisions.map((decision, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={decision.title} className={styles.item}>
                <Icon className={styles.icon} aria-hidden="true" />
                <h3 className={styles.itemTitle}>{decision.title}</h3>
                <p className={styles.itemDescription}>
                  {decision.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
