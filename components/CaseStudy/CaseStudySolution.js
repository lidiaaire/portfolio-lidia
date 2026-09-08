"use client";

import Image from "next/image";
import { TbCircleCheck } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudySolution.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "05.";

// "05. La solución": mismo patrón slug-driven que el resto de secciones,
// pero con más protagonismo visual -captura grande a la izquierda, texto
// + lista de funcionalidades a la derecha-. La ruta del asset es dato
// estructural (data/caseStudies.solutionImage); el texto (intro, alt,
// nombres de las funcionalidades) vive en el locale.
export default function CaseStudySolution({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const solution = t.caseStudy[slug]?.solution;

  // Sin contenido propio o sin asset todavía (caso de Flowly en este
  // paso): no se inventa nada, la sección simplemente no se renderiza.
  if (!solution || !project.solutionImage) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.solution.title}
        </h2>

        <div className={styles.body}>
          <div className={styles.visual}>
            <Image
              src={project.solutionImage}
              alt={solution.imageAlt}
              width={project.solutionImageWidth ?? 1536}
              height={project.solutionImageHeight ?? 1024}
              sizes="(max-width: 1024px) 90vw, 55rem"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.intro}>{solution.intro}</p>

            <ul className={styles.features}>
              {solution.features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  <TbCircleCheck
                    className={styles.featureIcon}
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
