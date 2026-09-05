import Image from "next/image";
import {
  TbBook,
  TbBulb,
  TbDeviceLaptop,
  TbHammer,
  TbPalette,
  TbUsers,
} from "react-icons/tb";
import styles from "./Beyond.module.css";

const STEPS = [
  {
    number: "01",
    title: "Aprender",
    description:
      "El aprendizaje forma parte de mi forma de avanzar. Actualmente continúo ampliando mi formación con un Grado Superior en Desarrollo de Aplicaciones Web (DAW), con el objetivo de consolidar y perfeccionar los conocimientos adquiridos durante mi formación previa en desarrollo Full Stack.",
    icon: TbBook,
    accent: "blue",
    image: "/images/beyond/aprender.png",
    imageAlt: "Ilustración representando el aprendizaje continuo",
  },
  {
    number: "02",
    title: "Crear",
    description:
      "Me motiva transformar ideas en productos reales. Disfruto analizando problemas, pensando en soluciones y llevándolas a la práctica, cuidando tanto la lógica como la experiencia de usuario.",
    icon: TbBulb,
    accent: "orange",
    image: "/images/beyond/crear.png",
    imageAlt: "Ilustración representando la creación de productos digitales",
  },
  {
    number: "03",
    title: "Diseñar",
    description:
      "Mi formación en UX/UI me ha enseñado a ver el desarrollo desde la perspectiva de las personas. Me gusta crear interfaces intuitivas, accesibles y visualmente cuidadas, donde diseño y funcionalidad trabajan juntos.",
    icon: TbPalette,
    accent: "pink",
    image: "/images/beyond/disenar.png",
    imageAlt: "Ilustración representando el diseño de interfaces",
  },
  {
    number: "04",
    title: "Construir",
    description:
      "Aprendo especialmente haciendo. Cada proyecto es una oportunidad para enfrentarme a nuevos retos, mejorar mis habilidades y seguir evolucionando.",
    icon: TbHammer,
    accent: "yellow",
    image: "/images/beyond/construir.png",
    imageAlt: "Ilustración representando la construcción de proyectos",
  },
];

const STATUS_ITEMS = [
  {
    label: "Building",
    value: "Proyectos · Ideas · Nuevas soluciones",
    icon: TbDeviceLaptop,
    accent: "orange",
  },
  {
    label: "Learning",
    value: "DAW · UX/UI · Tecnologías web",
    icon: TbBook,
    accent: "blue",
  },
  {
    label: "Open to",
    value: "Proyectos · Colaboraciones · Oportunidades",
    icon: TbUsers,
    accent: "pink",
  },
];

const FORMATION_ITEMS = [
  { title: "Grado Superior en DAW", subtitle: "En curso" },
  { title: "Bootcamp Full Stack", subtitle: "Desarrollo web" },
  { title: "Formación UX/UI", subtitle: "Diseño de producto digital" },
];

export default function Beyond() {
  return (
    <section id="beyond" className={styles.beyond}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Beyond the Code</p>
          <h2 className={styles.heading}>
            El código es solo una parte del proceso.
          </h2>
        </div>

        <div className={styles.grid}>
          {STEPS.map(
            ({
              number,
              title,
              description,
              icon: Icon,
              accent,
              image,
              imageAlt,
            }) => (
              <div key={number} className={styles.card} data-accent={accent}>
                <div className={styles.cardTop}>
                  <span className={styles.number}>{number}</span>
                  <span className={styles.iconWrap}>
                    <Icon className={styles.icon} aria-hidden="true" />
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>

                <div className={styles.cardImage}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 900px) 80vw, 20rem"
                    className={styles.cardImageEl}
                  />
                </div>
              </div>
            ),
          )}
        </div>

        <div className={styles.statusGrid}>
          <div className={styles.statusIntro}>
            <p className={styles.statusEyebrow}>Ahora mismo</p>
            <h3 className={styles.statusTitle}>
              Construyendo, aprendiendo y abierta a nuevas conexiones.
            </h3>
            <p className={styles.statusText}>
              Sigo desarrollando mis habilidades, creando nuevos proyectos y
              formando parte de iniciativas donde pueda aportar, aprender y
              crecer.
            </p>
          </div>

          <ul className={styles.statusList}>
            {STATUS_ITEMS.map(({ label, value, icon: Icon, accent }) => (
              <li
                key={label}
                className={styles.statusItem}
                data-accent={accent}
              >
                <span className={styles.statusItemIconWrap}>
                  <Icon className={styles.statusItemIcon} aria-hidden="true" />
                </span>
                <span className={styles.statusItemText}>
                  <span className={styles.statusItemLabel}>{label}</span>
                  <span className={styles.statusItemValue}>{value}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.formation}>
            <p className={styles.formationTitle}>Formación</p>
            <ul className={styles.formationList}>
              {FORMATION_ITEMS.map((item) => (
                <li key={item.title} className={styles.formationItem}>
                  <span className={styles.formationItemTitle}>
                    {item.title}
                  </span>
                  <span className={styles.formationItemSubtitle}>
                    {item.subtitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
