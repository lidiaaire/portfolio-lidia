import Image from "next/image";
import styles from "./Hero.module.css";

const PHRASES = [
  { id: "developer", text: "WEB ", accent: "DEVELOPER.", color: "orange" },
  { id: "solver", text: "PROBLEM ", accent: "SOLVER.", color: "pink" },
  { id: "builder", text: "IDEA ", accent: "BUILDER.", color: "yellow" },
  { id: "code", text: "BEYOND THE ", accent: "CODE.", color: "blue" },
];

// Generosamente más filas y repeticiones de las necesarias en cualquier
// pantalla real: el exceso queda oculto por el overflow:hidden del Hero,
// así la pared cubre siempre toda la superficie sin depender de medir el
// viewport en tiempo de ejecución.
const WALL_ROWS = 26;
const REPEATS_PER_ROW = 10;

// El color es un detalle ocasional, no una constante: solo ~1 de cada 6
// apariciones se acentúa con su color de identidad (muy apagado vía CSS);
// el resto se queda en gris carbón, igual que el resto de la pared.
const ACCENT_FREQUENCY = 6;

function buildWallRow(rowIndex) {
  return Array.from({ length: REPEATS_PER_ROW }, (_, i) => {
    const phrase = PHRASES[(rowIndex + i) % PHRASES.length];
    const accented = (rowIndex * 7 + i * 5) % ACCENT_FREQUENCY === 0;
    return { ...phrase, key: `${rowIndex}-${i}`, accented };
  });
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.wall} aria-hidden="true">
        {Array.from({ length: WALL_ROWS }, (_, rowIndex) => (
          <p key={rowIndex} className={styles.wallRow}>
            {buildWallRow(rowIndex).map((phrase) => (
              <span key={phrase.key} className={styles.wallPhrase}>
                {phrase.text}
                <span
                  className={styles.wallAccent}
                  data-color={phrase.accented ? phrase.color : undefined}
                >
                  {phrase.accent}
                </span>
              </span>
            ))}
          </p>
        ))}
      </div>

      <div className={styles.stack}>
        <div className={styles.centerBlock}>
          <div className={styles.headingWrap}>
            <h1 className={styles.heading}>
              {PHRASES.map((phrase) => (
                <span key={phrase.id} className={styles.headingLine}>
                  {phrase.text}
                  <span
                    className={styles.headingAccent}
                    data-color={phrase.color}
                  >
                    {phrase.accent}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className={styles.figure}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/hero-memoji.png"
                alt="Ilustración de Lidia García asomando detrás de un portátil"
                fill
                sizes="(max-width: 700px) 92vw, (max-width: 1200px) 70vw, 60vw"
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
