"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Projects.module.css";

// Ciclo corto de acentos para las pills de tecnología dentro de cada card
// (igual criterio que en About: color como detalle, no como constante).
const TECH_ACCENTS = ["blue", "pink", "orange", "yellow", "green"];

// Nombre propio, tecnologías, URLs y datos técnicos del proyecto se
// quedan aquí (no se traducen). category/subtitle/description viven en
// los locales (projects.<id>), claveados por el mismo id.
const PROJECTS = [
  {
    id: "elevate",
    number: "01",
    title: "Elevate",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    accent: "orange",
    href: "/projects/elevate",
    image: "/images/projects/elevate-dashboard.png",
    imageAlt: "Panel de Elevate mostrando el progreso de un alumno de inglés",
  },
  {
    id: "flowly",
    number: "02",
    title: "Flowly",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    // Verde lima real del producto (--color-accent-lime en globals.css),
    // no azul/cyan -mismo criterio que data/caseStudies.js: el color de
    // identidad se lee de este dato, nunca hardcodeado en el CSS-.
    accent: "lime",
    href: "/projects/flowly",
    // Captura real del dashboard (Playwright, misma sesión que el resto
    // de assets nuevos), no el placeholder cyan anterior. Recorte propio
    // cuadrado 1536×1536 -flowly-hero.png es 3:2, no cuadrado- pensado
    // para esta caja (aspect-ratio 1/1, object-fit:contain): logo, KPIs,
    // bandeja y ambos gráficos, nada cortado a medias.
    image: "/images/case-studies/flowly/flowly-home-preview.png",
    imageAlt: "Panel de Flowly mostrando la gestión de solicitudes sanitarias",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects;

  return (
    <section id="projects" className={styles.projects}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{projects.eyebrow}</p>
          <h2 className={styles.heading}>{projects.heading}</h2>
        </div>

        <div className={styles.intro}>
          {projects.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => {
            const projectText = projects[project.id];
            return (
              <article
                key={project.id}
                className={styles.card}
                data-accent={project.accent}
              >
                <div className={styles.cardTop}>
                  <span className={styles.number}>{project.number}</span>
                  <span className={styles.category}>
                    {projectText.category}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.content}>
                    <h3 className={styles.title}>
                      {project.title}
                      <span className={styles.titleDot} aria-hidden="true" />
                    </h3>
                    <p className={styles.subtitle}>{projectText.subtitle}</p>
                    <p className={styles.description}>
                      {projectText.description}
                    </p>

                    <ul className={styles.techList}>
                      {project.technologies.map((tech, index) => (
                        <li key={tech} className={styles.techPill}>
                          <span
                            className={styles.techDot}
                            data-accent={
                              TECH_ACCENTS[index % TECH_ACCENTS.length]
                            }
                            aria-hidden="true"
                          />
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <Link href={project.href} className={styles.button}>
                      {projects.viewProject}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>

                  {/* Bloque visual cuadrado: la propia imagen ya es la
                      "ventana de producto" (con su fondo y glow incluidos),
                      no un mockup de dispositivo. 1:1 real -> ratio, contain
                      y cuadrado del contenedor coinciden exactamente, así
                      que nunca se recorta ni se deforma. */}
                  <div className={styles.visual}>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 900px) 80vw, 32.5rem"
                      className={styles.visualImage}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
