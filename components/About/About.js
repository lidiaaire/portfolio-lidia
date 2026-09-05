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
const SKILLS = [
  {
    title: "Resolución de problemas",
    description: "Analizo, planifico y encuentro soluciones eficientes.",
    icon: TbBulb,
    color: "blue",
  },
  {
    title: "Desarrollo Full Stack",
    description: "Construyo aplicaciones completas de principio a fin.",
    icon: TbCode,
    color: "pink",
  },
  {
    title: "Diseño responsive",
    description: "Experiencias adaptadas a todos los dispositivos.",
    icon: TbDevices,
    color: "yellow",
  },
  {
    title: "Pensamiento UX/UI",
    description: "Creo interfaces intuitivas y centradas en el usuario.",
    icon: TbUser,
    color: "orange",
  },
  {
    title: "Desarrollo de APIs",
    description: "Diseño e integro APIs robustas y escalables.",
    icon: TbServer,
    color: "blue",
  },
  {
    title: "Diseño y modelado de datos",
    description: "Estructuro la información de forma eficiente.",
    icon: TbDatabase,
    color: "orange",
  },
  {
    title: "Depuración y resolución de errores",
    description: "Analizo, identifico y soluciono problemas de forma ágil.",
    icon: TbBug,
    color: "green",
  },
  {
    title: "Pensamiento de producto",
    description: "Me enfoco en construir soluciones con un propósito real.",
    icon: TbTrendingUp,
    color: "yellow",
  },
  {
    title: "AI Workflow",
    description:
      "Uso estratégico de herramientas de IA para investigación, análisis y optimización de procesos.",
    icon: TbSparkles,
    color: "purple",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Sobre mí</p>

        <h2 className={styles.heading}>
          <span className={styles.headingLine}>
            Mi camino hacia el desarrollo web
          </span>
          <span className={styles.headingLine}>no empezó con el código.</span>
          <span className={styles.headingLine}>
            Empezó resolviendo problemas reales.
          </span>
        </h2>

        <div className={styles.body}>
          <p>
            Durante años he trabajado en entornos empresariales y en el sector
            sanitario, donde he aprendido a entender procesos, detectar
            necesidades y buscar soluciones. Con el tiempo descubrí que la
            tecnología me daba la posibilidad de hacer algo que siempre me había
            atraído:{" "}
            <strong>
              convertir ideas en herramientas que realmente puedan ser útiles.
            </strong>
          </p>

          <p>
            Actualmente desarrollo aplicaciones web completas, trabajando tanto
            en frontend como en backend. Disfruto especialmente de todo el
            proceso: partir de una idea, pensar cómo debería funcionar,
            construirla, enfrentarme a los problemas que aparecen por el camino
            y seguir mejorándola hasta conseguir un producto sólido.
          </p>

          <p>
            <strong>
              Para mí, desarrollar no consiste únicamente en escribir código.
            </strong>{" "}
            También implica entender el problema, pensar en quien utilizará el
            producto y cuidar tanto su funcionamiento como su experiencia. De
            ahí nace una de las ideas que mejor define mi forma de trabajar:{" "}
            <strong>Beyond the Code.</strong>
          </p>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={`container ${styles.techSection}`}>
        <div className={styles.techHeader}>
          <h3 className={styles.techTitle}>Tecnologías y herramientas</h3>
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
          <h3 className={styles.techTitle}>Skills</h3>
        </div>

        <div className={styles.skillsGrid}>
          {SKILLS.map(({ title, description, icon: Icon, color }) => (
            <div key={title} className={styles.skillCard} data-accent={color}>
              <Icon className={styles.skillIcon} data-accent={color} />
              <div className={styles.skillText}>
                <h4 className={styles.skillTitle}>{title}</h4>
                <p className={styles.skillDescription}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
