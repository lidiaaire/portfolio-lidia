"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyResult.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "10.";

// "10. Resultado": mismo patrón slug-driven que el resto de secciones.
// Cada métrica cruza su label traducible
// (t.caseStudy.<slug>.result.metricLabels) por id con su valor. El valor
// es number/string language-neutral (p. ej. los 5 de Elevate) vive
// directamente en data/caseStudies.<slug>.metrics; cuando en cambio es
// texto descriptivo que sí hay que traducir (p. ej. "Multiestado" en
// Flowly), metric.value se omite en los datos y se resuelve por id desde
// t.caseStudy.<slug>.result.metricValues -mismo criterio que
// metricLabels, opcional y sin romper el caso ya existente de Elevate-.
export default function CaseStudyResult({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const result = t.caseStudy[slug]?.result;
  const metricLabels = result?.metricLabels;
  const metricValues = result?.metricValues;

  // Sin dato estructural o sin texto propio todavía (caso de Flowly en
  // este paso): no se inventa nada, la sección simplemente no se
  // renderiza.
  if (!project.metrics || !metricLabels) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.result.title}
        </h2>

        <div className={styles.grid}>
          {project.metrics.map((metric) => (
            <div key={metric.id} className={styles.item}>
              <span className={styles.value}>
                {metric.value ?? metricValues?.[metric.id]}
              </span>
              <span className={styles.label}>{metricLabels[metric.id]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
