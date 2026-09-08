"use client";

import {
  TbChalkboardTeacher,
  TbSettings,
  TbShieldCog,
  TbUser,
} from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyRoles.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "04.";

// Un icono por rol, en el mismo orden que el array roles del locale
// -mismo criterio que ICONS en CaseStudyObjectives.js: decisión de
// diseño de la sección, no contenido-. 4 entradas (no 3): Elevate solo
// usa las 3 primeras (Student/Teacher/Admin), Flowly usa las 4 (su
// último rol, Admin, ya no cae en el índice 0 reciclado -icono distinto
// por rol, como pide el diseño-).
const ICONS = [TbUser, TbChalkboardTeacher, TbShieldCog, TbSettings];

// "04. Usuarios y roles": mismo patrón slug-driven que el resto de
// secciones. Grid de 3 cards con el mismo peso visual -mismo tamaño,
// mismo icono en acento, ninguna jerarquía entre roles-.
export default function CaseStudyRoles({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const roles = t.caseStudy[slug]?.roles;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!roles) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.roles.title}
        </h2>

        <div className={styles.grid}>
          {roles.map((role, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={role.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.cardTitle}>{role.title}</h3>
                <p className={styles.cardDescription}>{role.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
