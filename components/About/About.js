"use client";

import { Fragment } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
  SiRender,
} from "react-icons/si";
import {
  TbApi,
  TbBug,
  TbBulb,
  TbCloud,
  TbCode,
  TbDatabase,
  TbDevices,
  TbServer,
  TbSparkles,
  TbTrendingUp,
  TbUser,
} from "react-icons/tb";
import styles from "./About.module.css";

// Ciclo de 6 acentos de la identidad visual (azul, rosa, naranja, amarillo,
// verde, morado) repetido 3 veces sobre las 18 tecnologías, para que el
// conjunto se sienta multicolor sin que ningún color domine ni se repita
// siempre sobre la misma tecnología.
const ACCENTS = ["blue", "pink", "orange", "yellow", "green", "purple"];

// SiCss = logo de CSS3 (react-icons no incluye el "3" en el nombre).
// TbApi y TbCode son iconos conceptuales: react-icons no trae un logo de
// marca para "REST APIs" (no es un producto con logo) ni para "VS Code"
// (ausente en la versión de Simple Icons empaquetada aquí). TbCloud cubre
// "MongoDB Atlas" por el mismo motivo: no existe un logo específico de
// Atlas distinto del de MongoDB.
const TECHNOLOGIES = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MongoDB Atlas", icon: TbCloud },
  { name: "REST APIs", icon: TbApi },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "VS Code", icon: TbCode },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
].map((tech, index) => ({ ...tech, accent: ACCENTS[index % ACCENTS.length] }));

// 3 filas explícitas (6 / 5 / 7) derivadas del mismo array plano de arriba,
// en vez de tres arrays separados: si el día de mañana cambia el listado,
// solo hay una fuente de verdad.
const ROW_SIZES = [6, 5, 7];

const TECHNOLOGY_ROWS = ROW_SIZES.reduce((rows, size) => {
  const start = rows.flat().length;
  rows.push(TECHNOLOGIES.slice(start, start + size));
  return rows;
}, []);

// 9 skills en cuadrícula 3×3. El orden del array ES el orden de lectura
// del grid (fila por fila), así que basta con un único .map() sobre él.
// Título y descripción viven en los locales (about.skills.<id>); aquí
// solo quedan los datos de diseño (icono, color) que no se traducen.
const SKILLS = [
  { id: "problemSolving", icon: TbBulb, color: "blue" },
  { id: "fullStack", icon: TbCode, color: "pink" },
  { id: "responsiveDesign", icon: TbDevices, color: "yellow" },
  { id: "uxui", icon: TbUser, color: "orange" },
  { id: "apiDevelopment", icon: TbServer, color: "blue" },
  { id: "dataModeling", icon: TbDatabase, color: "orange" },
  { id: "debugging", icon: TbBug, color: "green" },
  { id: "productThinking", icon: TbTrendingUp, color: "yellow" },
  { id: "aiWorkflow", icon: TbSparkles, color: "purple" },
];

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>{about.eyebrow}</p>

        <h2 className={styles.heading}>
          {about.heading.map((line) => (
            <span key={line} className={styles.headingLine}>
              {line}
            </span>
          ))}
        </h2>

        <div className={styles.body}>
          {about.body.map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((segment, segIndex) =>
                segment.bold ? (
                  <strong key={segIndex}>{segment.text}</strong>
                ) : (
                  <Fragment key={segIndex}>{segment.text}</Fragment>
                )
              )}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={`container ${styles.techSection}`}>
        <div className={styles.techHeader}>
          <h3 className={styles.techTitle}>{about.techTitle}</h3>
        </div>

        <div className={styles.techGrid}>
          {TECHNOLOGY_ROWS.map((row, index) => (
            <ul key={index} className={styles.techRow}>
              {row.map(({ name, icon: Icon, accent }) => (
                <li key={name} className={styles.techPill} data-accent={accent}>
                  <Icon className={styles.techIcon} data-accent={accent} />
                  <span className={styles.techName}>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={`container ${styles.skillsSection}`}>
        <div className={styles.techHeader}>
          <h3 className={styles.techTitle}>{about.skillsTitle}</h3>
        </div>

        <div className={styles.skillsGrid}>
          {SKILLS.map(({ id, icon: Icon, color }) => {
            const skill = about.skills[id];
            return (
              <div key={id} className={styles.skillCard} data-accent={color}>
                <Icon className={styles.skillIcon} data-accent={color} />
                <div className={styles.skillText}>
                  <h4 className={styles.skillTitle}>{skill.title}</h4>
                  <p className={styles.skillDescription}>
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
