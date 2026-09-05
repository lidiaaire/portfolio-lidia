import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import styles from "./Footer.module.css";

// Mismo array de enlaces sociales que Contact (mismo lenguaje visual):
// href de marcador de posición a la espera de las URLs reales, sin
// lógica todavía.
const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", icon: TbBrandLinkedin, href: "#" },
  { id: "github", label: "GitHub", icon: TbBrandGithub, href: "#" },
  { id: "email", label: "Email", icon: TbMail, href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          Lidia García<span className={styles.dot}>.</span>
        </a>

        <ul className={styles.socialList}>
          {SOCIAL_LINKS.map(({ id, label, icon: Icon, href }) => (
            <li key={id}>
              <a href={href} className={styles.socialLink}>
                <span className={styles.socialIconWrap}>
                  <Icon className={styles.socialIcon} aria-hidden="true" />
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.copyright}>
          © 2026 Lidia García. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
