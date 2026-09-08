"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyTryDemo.module.css";

// Número de sección fijo, igual criterio que las secciones anteriores.
const SECTION_NUMBER = "12.";

// "12. Prueba <título>": mismo patrón slug-driven que el resto de
// secciones. Bloque de conversión final, más protagonista que las
// secciones editoriales anteriores. Los textos (CTA/aviso/labels) son
// compartidos -sirven igual para cualquier proyecto-; "intro" admite un
// override opcional por proyecto (t.caseStudy.<slug>.tryDemo.intro) con
// fallback al compartido, porque el texto de Elevate ("recorre la
// experiencia desde distintos roles") no encaja igual de bien para
// Flowly ("comprueba cómo cambia la experiencia según el rol"). Lo único
// propio de cada proyecto además de eso es el dato estructural (demoUrl,
// demoCredentials).
export default function CaseStudyTryDemo({ slug }) {
  const { t } = useLanguage();
  const project = getCaseStudy(slug);

  if (!project) return null;

  const tryDemo = t.caseStudy.tryDemo;
  const intro = t.caseStudy[slug]?.tryDemo?.intro ?? tryDemo.intro;

  // credential.role es un id estructural (Elevate: "Student"/"Teacher"/
  // "Admin", ya pensados para mostrarse literalmente; Flowly:
  // "PRESTACIONES"/"DIRECCION_MEDICA"/... que NO deben mostrarse tal
  // cual). En vez de duplicar sus traducciones aquí, se reutiliza el
  // mismo texto que ya existe en "04. Usuarios y roles"
  // (t.caseStudy.<slug>.roles, con id añadido a cada entrada): si hay
  // coincidencia se usa esa etiqueta traducida, si no (caso Elevate, sin
  // id en su array de roles) se cae al propio credential.role -mismo
  // resultado que antes, cero cambio de comportamiento-.
  const roleLabels = Object.fromEntries(
    (t.caseStudy[slug]?.roles ?? [])
      .filter((role) => role.id)
      .map((role) => [role.id, role.title])
  );

  // Sin credenciales preparadas todavía (caso de Flowly en este paso):
  // no se inventa nada, la sección simplemente no se renderiza.
  if (!project.demoCredentials) return null;

  return (
    <section className={styles.section} data-accent={project.accent}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          <span className={styles.number}>{SECTION_NUMBER}</span>{" "}
          {tryDemo.tryLabel} {project.title}
        </h2>

        <div className={styles.panel}>
          <div className={styles.intro}>
            <p className={styles.introText}>{intro}</p>
            <a
              href={project.demoUrl}
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tryDemo.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.credentials}>
            {project.demoCredentials.map((credential) => (
              <div key={credential.role} className={styles.credentialCard}>
                <span className={styles.credentialRole}>
                  {roleLabels[credential.role] ?? credential.role}
                </span>
                <div className={styles.credentialRow}>
                  <span className={styles.credentialLabel}>
                    {tryDemo.emailLabel}
                  </span>
                  <span className={styles.credentialValue}>
                    {credential.email ?? tryDemo.pending}
                  </span>
                </div>
                <div className={styles.credentialRow}>
                  <span className={styles.credentialLabel}>
                    {tryDemo.passwordLabel}
                  </span>
                  <span className={styles.credentialValue}>
                    {credential.password ?? tryDemo.pending}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.notice}>{tryDemo.notice}</p>
        </div>
      </div>
    </section>
  );
}
