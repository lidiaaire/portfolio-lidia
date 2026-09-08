"use client";

import { TbBuildingSkyscraper, TbLayoutGrid, TbTrophy, TbUsers } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyObjectives.module.css";

// Número de sección fijo, igual criterio que CaseStudyOrigin/CaseStudyProblem.
const SECTION_NUMBER = "03.";

// Un icono por objetivo, en el mismo orden que el array objectives del
// locale (igual criterio que SKILLS en About.js): es una decisión de
// diseño de la sección, no contenido, así que vive aquí y no en
// data/caseStudies ni en los locales. react-icons/tb ya es una
// dependencia del proyecto (usada en About/Contact/Footer).
const ICONS = [TbLayoutGrid, TbTrophy, TbUsers, TbBuildingSkyscraper];

// "03. Objetivos": mismo patrón slug-driven que el resto de secciones.
// Grid de 4 cards compactas y discretas, sin variación de estilo entre
// ellas -todas comparten el mismo acento del case study-.
export default function CaseStudyObjectives({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const objectives = t.caseStudy[slug]?.objectives;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!objectives) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.objectives.title}
        </h2>

        <div className={styles.grid}>
          {objectives.map((objective, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={objective.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.cardTitle}>{objective.title}</h3>
                <p className={styles.cardDescription}>
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
