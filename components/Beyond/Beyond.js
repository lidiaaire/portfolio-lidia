"use client";

import Image from "next/image";
import {
  TbBook,
  TbBulb,
  TbCode,
  TbDeviceLaptop,
  TbHammer,
  TbPalette,
  TbSchool,
  TbUsers,
} from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Beyond.module.css";

// Título y descripción viven en los locales (beyond.cards.<id>); aquí
// solo quedan los datos que no se traducen: icono, color e imagen (con
// su ruta). Sin número: ya no se muestra en la card.
const STEPS = [
  {
    id: "learn",
    icon: TbBook,
    accent: "blue",
    image: "/images/beyond/aprender.png",
    imageAlt: "Ilustración representando el aprendizaje continuo",
  },
  {
    id: "create",
    icon: TbBulb,
    accent: "orange",
    image: "/images/beyond/crear.png",
    imageAlt: "Ilustración representando la creación de productos digitales",
  },
  {
    id: "design",
    icon: TbPalette,
    accent: "pink",
    image: "/images/beyond/disenar.png",
    imageAlt: "Ilustración representando el diseño de interfaces",
  },
  {
    id: "build",
    icon: TbHammer,
    accent: "yellow",
    image: "/images/beyond/construir.png",
    imageAlt: "Ilustración representando la construcción de proyectos",
  },
];

// label/value viven en beyond.status.items.<id>; icono y color se
// quedan aquí.
const STATUS_ITEMS = [
  { id: "building", icon: TbDeviceLaptop, accent: "orange" },
  { id: "learning", icon: TbBook, accent: "blue" },
  { id: "openTo", icon: TbUsers, accent: "pink" },
];

// title/subtitle viven en beyond.formation.items.<id>; icono y color se
// quedan aquí, mismo criterio que STATUS_ITEMS.
const FORMATION_ITEMS = [
  { id: "daw", icon: TbSchool, accent: "blue" },
  { id: "bootcamp", icon: TbCode, accent: "orange" },
  { id: "uxui", icon: TbPalette, accent: "pink" },
];

export default function Beyond() {
  const { t } = useLanguage();
  const beyond = t.beyond;

  return (
    <section id="beyond" className={styles.beyond}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{beyond.eyebrow}</p>
          <h2 className={styles.heading}>{beyond.heading}</h2>
        </div>

        <div className={styles.grid}>
          {STEPS.map(({ id, icon: Icon, accent, image, imageAlt }) => {
            const card = beyond.cards[id];
            return (
              <div key={id} className={styles.card} data-accent={accent}>
                <div className={styles.cardImage}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 900px) 80vw, 20rem"
                    className={styles.cardImageEl}
                  />
                  <div className={styles.cardGradient} aria-hidden="true" />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.iconWrap}>
                      <Icon className={styles.icon} aria-hidden="true" />
                    </span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>

                  <p className={styles.cardDescription}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.statusGrid}>
          <div className={styles.statusIntro}>
            <p className={styles.statusEyebrow}>{beyond.status.eyebrow}</p>
            <h3 className={styles.statusTitle}>{beyond.status.title}</h3>
            <p className={styles.statusText}>{beyond.status.text}</p>
          </div>

          <ul className={styles.statusList}>
            {STATUS_ITEMS.map(({ id, icon: Icon, accent }) => {
              const item = beyond.status.items[id];
              return (
                <li key={id} className={styles.statusItem} data-accent={accent}>
                  <span className={styles.statusItemIconWrap}>
                    <Icon
                      className={styles.statusItemIcon}
                      aria-hidden="true"
                    />
                  </span>
                  <span className={styles.statusItemText}>
                    <span className={styles.statusItemLabel}>
                      {item.label}
                    </span>
                    <span className={styles.statusItemValue}>
                      {item.value}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          <div className={styles.formation}>
            <p className={styles.formationTitle}>{beyond.formation.title}</p>
            <ul className={styles.formationList}>
              {FORMATION_ITEMS.map(({ id, icon: Icon, accent }) => {
                const item = beyond.formation.items[id];
                return (
                  <li
                    key={id}
                    className={styles.formationItem}
                    data-accent={accent}
                  >
                    <span className={styles.formationItemIconWrap}>
                      <Icon
                        className={styles.formationItemIcon}
                        aria-hidden="true"
                      />
                    </span>
                    <span className={styles.formationItemText}>
                      <span className={styles.formationItemTitle}>
                        {item.title}
                      </span>
                      <span className={styles.formationItemSubtitle}>
                        {item.subtitle}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
