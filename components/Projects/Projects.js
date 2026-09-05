import Image from "next/image";
import styles from "./Projects.module.css";

// Ciclo corto de acentos para las pills de tecnología dentro de cada card
// (igual criterio que en About: color como detalle, no como constante).
const TECH_ACCENTS = ["blue", "pink", "orange", "yellow", "green"];

const PROJECTS = [
  {
    id: "elevate",
    number: "01",
    category: "Plataforma educativa",
    title: "Elevate",
    subtitle: "Your English Campus",
    description:
      "Plataforma educativa para gestionar el aprendizaje de inglés mediante cursos, lecciones interactivas, evaluaciones, progreso, certificados y experiencias personalizadas según el rol del usuario.",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    accent: "orange",
    href: "#",
    image: "/images/projects/elevate-dashboard.png",
    imageAlt: "Panel de Elevate mostrando el progreso de un alumno de inglés",
  },
  {
    id: "flowly",
    number: "02",
    category: "Gestión sanitaria",
    title: "Flowly",
    subtitle: "Gestión inteligente de autorizaciones sanitarias",
    description:
      "Aplicación B2B para la gestión y trazabilidad de autorizaciones médicas, con diferentes roles, flujos de trabajo y control de estados en tiempo real.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    accent: "blue",
    href: "#",
    image: "/images/projects/flowly-dashboard.png",
    imageAlt: "Panel de Flowly mostrando la gestión de solicitudes sanitarias",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.topBar} aria-hidden="true">
        <span className={styles.topBarBlock} data-color="blue" />
        <span className={styles.topBarBlock} data-color="yellow" />
        <span className={styles.topBarBlock} data-color="orange" />
        <span className={styles.topBarBlock} data-color="pink" />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Proyectos</p>
          <h2 className={styles.heading}>Actualmente trabajando en...</h2>
        </div>

        <div className={styles.intro}>
          <p>
            Productos digitales nacidos de problemas reales que he
            identificado durante mi experiencia profesional. Soluciones
            donde exploro cómo la tecnología puede ayudar a las empresas a
            optimizar procesos, mejorar la experiencia de sus usuarios y
            crear herramientas más eficientes para su día a día.
          </p>
          <p>
            Desde plataformas educativas hasta sistemas internos de
            gestión, cada producto parte de una necesidad concreta y busca
            transformarla en una solución funcional, combinando
            desarrollo, diseño y una visión orientada tanto a las personas
            como al negocio.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={styles.card}
              data-accent={project.accent}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>{project.number}</span>
                <span className={styles.category}>{project.category}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.content}>
                  <h3 className={styles.title}>
                    {project.title}
                    <span className={styles.titleDot} aria-hidden="true" />
                  </h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <p className={styles.description}>{project.description}</p>

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

                  <a href={project.href} className={styles.button}>
                    Ver proyecto
                    <span aria-hidden="true">↗</span>
                  </a>
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
          ))}
        </div>

        <div className={styles.closing}>
          <span className={styles.closingLine} />
          <p className={styles.closingText}>Más proyectos pronto...</p>
          <span className={styles.closingLine} />
        </div>
      </div>
    </section>
  );
}
