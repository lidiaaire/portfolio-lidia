"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyNextProject.module.css";

// Cierre/navegación final del case study: qué proyecto enlaza este se
// resuelve por dato (project.nextProject en data/caseStudies), nunca
// hardcodeado aquí ni en CaseStudy.js -así el mismo componente sirve para
// cualquier slug futuro sin tocar código, solo data/caseStudies-. Nombre,
// slug e imagen del proyecto enlazado se reutilizan de su propia entrada
// en CASE_STUDIES (mismo asset que ya usa su card en la landing, no se
// genera ninguno nuevo); el único texto propio de esta transición es el
// teaser (t.caseStudy.<targetSlug>.teaserDescription), y si todavía no
// existe el bloque simplemente no se renderiza -no se inventa-.
//
// project.direction ("next" por defecto, "previous" si se indica) solo
// cambia el eyebrow y la flecha -label + sentido de lectura-; la
// composición (texto | flecha | imagen) es siempre la misma, la imagen
// nunca se mueve a la izquierda. Elevate no define direction (sigue
// siendo "next" tal cual estaba); Flowly sí, porque el orden del
// portfolio es Elevate → Flowly y desde Flowly este enlace mira "hacia
// atrás".
//
// Preview compacta de proyecto, no una sección protagonista: una única
// card horizontal clicable (texto | flecha | imagen), pensada para
// leerse como "he terminado este proyecto, aquí tienes el anterior/
// siguiente".
export default function CaseStudyNextProject({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const linkedProject = getCaseStudy(project.nextProject);
  const linkedText = t.caseStudy[project.nextProject];
  const teaser = linkedText?.teaserDescription;

  if (!linkedProject || !teaser) return null;

  const isPrevious = project.direction === "previous";
  const eyebrowLabel = isPrevious
    ? t.caseStudy.previousProjectLabel
    : t.caseStudy.nextProjectLabel;
  const arrowChar = isPrevious ? "←" : "→";

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className="container">
        <Link href={`/projects/${linkedProject.id}`} className={styles.card}>
          <span className={styles.text}>
            <span className={styles.eyebrow}>{eyebrowLabel}</span>
            <span className={styles.title}>{linkedProject.title}</span>
            <span className={styles.description}>{teaser}</span>
          </span>

          <span className={styles.arrow} aria-hidden="true">
            {arrowChar}
          </span>

          <span className={styles.visual}>
            <Image
              src={linkedProject.image}
              alt={linkedText.imageAlt ?? linkedProject.title}
              fill
              sizes="(max-width: 700px) 100vw, 22rem"
              className={styles.image}
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
