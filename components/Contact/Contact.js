import Image from "next/image";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import styles from "./Contact.module.css";

// Campos del formulario como array + .map(), igual que el resto del
// portfolio (STEPS, PROJECTS, etc.).
const FORM_FIELDS = [
  { id: "name", name: "name", label: "Nombre", type: "text" },
  { id: "email", name: "email", label: "Email", type: "email" },
  { id: "message", name: "message", label: "Mensaje", type: "textarea" },
];

// Zona preparada para enlaces: sin lógica todavía, solo estructura y
// href de marcador de posición a la espera de las URLs reales.
const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", icon: TbBrandLinkedin, href: "#" },
  { id: "github", label: "GitHub", icon: TbBrandGithub, href: "#" },
  { id: "email", label: "Email", icon: TbMail, href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Contact me</p>
            <h2 className={styles.heading}>
              ¿Te interesa conectar conmigo?
            </h2>
            <p className={styles.text}>
              Envíame un mensaje a través del formulario de contacto y
              hablamos.
            </p>

            {/* Sin lógica de envío ni validaciones todavía: solo la
                estructura del formulario. */}
            <form className={styles.form}>
              {FORM_FIELDS.map((field) => (
                <div key={field.id} className={styles.field}>
                  <label htmlFor={field.id} className={styles.label}>
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      className={styles.textarea}
                      rows={5}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      className={styles.input}
                    />
                  )}
                </div>
              ))}

              <button type="submit" className={styles.submitButton}>
                Enviar
              </button>
            </form>

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
          </div>

          {/* La imagen ya incluye su propio marco geométrico de color:
              se muestra tal cual, sin fondo, borde ni recorte añadidos
              por CSS. */}
          <div className={styles.visual}>
            <div className={styles.memojiFrame}>
              <Image
                src="/images/hero-memoji-contact.png"
                alt="Ilustración de Lidia García saludando"
                fill
                sizes="(max-width: 900px) 80vw, 40vw"
                className={styles.memojiImage}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
