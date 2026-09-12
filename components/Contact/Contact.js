"use client";

import { useState } from "react";
import Image from "next/image";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";

// Campos del formulario como array + .map(), igual que el resto del
// portfolio (STEPS, PROJECTS, etc.). La etiqueta (label) vive en
// t.contact.form.<id>; aquí solo quedan id/name/type (estructura, no
// traducible).
const FORM_FIELDS = [
  { id: "name", name: "name", type: "text" },
  { id: "email", name: "email", type: "email" },
  { id: "message", name: "message", type: "textarea" },
];

// Enlaces reales. LinkedIn queda pendiente: no se ha encontrado la URL
// exacta en el proyecto, así que se deja como marcador de posición hasta
// que se proporcione.
const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: TbBrandLinkedin,
    href: "https://www.linkedin.com/in/lidiagarc%C3%ADatorregrosa/",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    icon: TbBrandGithub,
    href: "https://github.com/lidiaaire",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    icon: TbMail,
    href: "mailto:lidia.devworks@gmail.com",
  },
];

const INITIAL_FORM_VALUES = { name: "", email: "", message: "", website: "" };

export default function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;

  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");
  const isSending = status === "sending";

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormValues(INITIAL_FORM_VALUES);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>{contact.eyebrow}</p>
            <h2 className={styles.heading}>{contact.heading}</h2>
            <p className={styles.text}>{contact.description}</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Honeypot anti-spam: oculto visualmente, un visitante real
                  nunca lo rellena. Si llega con contenido, el servidor lo
                  descarta como bot sin avisar. */}
              <input
                type="text"
                name="website"
                value={formValues.website}
                onChange={handleChange}
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {FORM_FIELDS.map((field) => (
                <div key={field.id} className={styles.field}>
                  <label htmlFor={field.id} className={styles.label}>
                    {contact.form[field.id]}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      className={styles.textarea}
                      rows={5}
                      value={formValues[field.name]}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      className={styles.input}
                      value={formValues[field.name]}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSending}
              >
                {isSending ? contact.form.sending : contact.form.submit}
              </button>

              {status === "success" && (
                <p className={styles.feedbackSuccess} role="status">
                  {contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p className={styles.feedbackError} role="alert">
                  {contact.form.error}
                </p>
              )}
            </form>

            <ul className={styles.socialList}>
              {SOCIAL_LINKS.map(({ id, label, icon: Icon, href, external }) => (
                <li key={id}>
                  <a
                    href={href}
                    className={styles.socialLink}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
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
