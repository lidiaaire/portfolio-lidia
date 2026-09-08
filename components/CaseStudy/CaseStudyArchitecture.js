"use client";

import { TbArrowNarrowRight, TbShieldLock } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyArchitecture.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "08.";

// "08. Arquitectura técnica": mismo patrón slug-driven que el resto de
// secciones. Cada layer del flujo cruza su label traducible
// (t.caseStudy.architecture.<id>Label) con su tecnología, dato técnico
// que vive en data/caseStudies -no en el locale-. Diagrama sencillo, no
// infografía: 4 bloques + flechas, y una banda de autenticación debajo,
// visualmente secundaria (no un quinto bloque igual a los anteriores).
export default function CaseStudyArchitecture({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const architecture = project.architecture;
  const architectureText = t.caseStudy[slug]?.architecture;

  // Sin dato técnico o sin texto propio todavía (caso de Flowly en este
  // paso): no se inventan capas ni tecnologías, la sección simplemente
  // no se renderiza.
  if (!architecture || !architectureText) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.architecture.title}
        </h2>

        <div className={styles.flow}>
          {architecture.layers.map((layer, index) => (
            <div key={layer.id} className={styles.layerGroup}>
              <div className={styles.layer}>
                <span className={styles.layerLabel}>
                  {t.caseStudy.architecture[`${layer.id}Label`]}
                </span>
                <span className={styles.layerTech}>{layer.tech}</span>
              </div>

              {index < architecture.layers.length - 1 && (
                <TbArrowNarrowRight
                  className={styles.connector}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Capacidad transversal, no un quinto bloque del flujo: banda
            compacta debajo, con menos peso visual (icono + texto en
            línea, sin la misma caja que .layer). */}
        <div className={styles.auth}>
          <TbShieldLock className={styles.authIcon} aria-hidden="true" />
          <span className={styles.authLabel}>
            {t.caseStudy.architecture.authLabel}
          </span>
          <span className={styles.authTech}>{architectureText.authTech}</span>
        </div>
      </div>
    </section>
  );
}
