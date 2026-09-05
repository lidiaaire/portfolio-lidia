import styles from "./SectionDivider.module.css";

// Mismo orden de acentos que la franja del Hero y la línea superior de
// Projects: cian, naranja, rosa, amarillo.
const SEGMENTS = ["blue", "orange", "pink", "yellow"];

export default function SectionDivider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      {SEGMENTS.map((color) => (
        <span key={color} className={styles.block} data-color={color} />
      ))}
    </div>
  );
}
