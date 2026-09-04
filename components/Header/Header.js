import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Tecnologías", href: "#technologies" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          Lidia García<span className={styles.dot}>.</span>
        </a>

        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${
                    index === 0 ? styles.active : ""
                  }`}
                  aria-current={index === 0 ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div
            className={styles.langSwitch}
            role="group"
            aria-label="Selector de idioma"
          >
            <button
              type="button"
              className={`${styles.langButton} ${styles.langActive}`}
              aria-pressed="true"
            >
              ES
            </button>
            <span className={styles.langDivider} aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={styles.langButton}
              aria-pressed="false"
            >
              EN
            </button>
          </div>

          <a href="#contact" className={styles.ctaButton}>
            Hablemos
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
