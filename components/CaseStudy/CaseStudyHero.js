"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyHero.module.css";

// Hero reutilizable entre /projects/elevate y /projects/flowly: mismo
// componente, mismo layout de dos columnas. Lo único que cambia entre
// proyectos es lo que ya vive fuera de este archivo -datos estructurales
// (data/caseStudies: acento, stack, asset, URLs) y textos (locales,
// bajo caseStudy.<id> y projects.<id>)-, nunca la estructura en sí.
//
// claim/role/status son opcionales a propósito: si un proyecto todavía
// no los tiene definidos en su locale, el bloque correspondiente
// simplemente no se renderiza, en vez de romper o mostrar contenido
// inventado.
export default function CaseStudyHero({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const caseText = t.caseStudy[slug] ?? {};
  const description = t.projects[slug]?.description;

  const metadata = [
    { label: t.caseStudy.roleLabel, value: caseText.role },
    {
      label: t.caseStudy.stackLabel,
      value: project.primaryStack?.join(" · "),
    },
    { label: t.caseStudy.statusLabel, value: caseText.status },
  ].filter((item) => item.value);

  return (
    <section className={styles.hero} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t.caseStudy.eyebrow}</p>
          <h1 className={styles.title}>{project.title}</h1>
          {caseText.claim && <p className={styles.claim}>{caseText.claim}</p>}
          {description && (
            <p className={styles.description}>{description}</p>
          )}

          {metadata.length > 0 && (
            <dl className={styles.metadata}>
              {metadata.map((item) => (
                <div key={item.label} className={styles.metadataItem}>
                  <dt className={styles.metadataLabel}>{item.label}</dt>
                  <dd className={styles.metadataValue}>{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className={styles.actions}>
            <a
              href={project.demoUrl}
              className={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.caseStudy.viewDemo}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={project.githubUrl}
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.caseStudy.viewGithub}
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualFrame}>
            <Image
              src={project.image}
              alt={caseText.imageAlt ?? project.title}
              fill
              sizes="(max-width: 1024px) 80vw, 42.5rem"
              priority
              className={styles.visualImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
