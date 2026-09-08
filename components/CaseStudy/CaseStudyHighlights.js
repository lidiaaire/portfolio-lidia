"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyHighlights.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "06.";

// "06. Funcionalidades destacadas": mismo patrón slug-driven que el resto
// de secciones. Cada item cruza su texto (locale, por id) con su imagen
// (data/caseStudies.elevate.featureHighlightImages, por el mismo id):
// mientras esa imagen sea null -las 4 capturas de esta sección todavía
// no son definitivas-, la zona reservada se resuelve con un placeholder
// neutro (mismo aspect ratio, sin simular ninguna interfaz) en vez de
// dejar el hueco vacío o reutilizar un asset de otra sección. Sustituir
// un screenshot más adelante es solo cambiar su ruta en
// featureHighlightImages -este componente no cambia-.
export default function CaseStudyHighlights({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const highlights = t.caseStudy[slug]?.featureHighlights;

  // Sin contenido propio todavía (caso de Flowly en este paso): no se
  // inventa nada, la sección simplemente no se renderiza.
  if (!highlights) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {t.caseStudy.featureHighlights.title}
        </h2>

        <div className={styles.grid}>
          {highlights.map((item) => {
            const image = project.featureHighlightImages?.[item.id] ?? null;
            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.visual}>
                  {image ? (
                    <Image
                      src={image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 45vw, 22.5rem"
                      className={styles.image}
                    />
                  ) : (
                    // Placeholder neutro: mismo espacio, mismo ratio,
                    // sin icono ni texto que simule un contenido que
                    // todavía no existe.
                    <div
                      className={styles.placeholder}
                      role="img"
                      aria-label={item.title}
                    />
                  )}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
