"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          Lidia García<span className={styles.dot}>.</span>
        </a>

        <div className={styles.actions}>
          <div
            className={styles.langSwitch}
            role="group"
            aria-label={t.header.languageSelector}
          >
            <button
              type="button"
              className={`${styles.langButton} ${
                language === "es" ? styles.langActive : ""
              }`}
              aria-pressed={language === "es"}
              onClick={() => setLanguage("es")}
            >
              ES
            </button>
            <span className={styles.langDivider} aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={`${styles.langButton} ${
                language === "en" ? styles.langActive : ""
              }`}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>

          <a href="#contact" className={styles.ctaButton}>
            {t.header.talk}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
