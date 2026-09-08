// Datos técnicos de las páginas de caso de estudio (/projects/[slug]).
// Nombre propio, acento de color y tecnologías se quedan aquí (no se
// traducen), igual criterio que el array PROJECTS de components/Projects.
// El contenido textual (category/subtitle/description) vive en los
// locales, bajo la clave compartida projects.<id> -evita duplicar el
// mismo texto en dos sitios-.
// image/demoUrl/githubUrl son datos estructurales (ruta de asset y
// enlaces), no texto: el alt de la imagen SÍ es texto y vive en
// locales/caseStudy.<id>.imageAlt. demoUrl/githubUrl quedan como "#"
// (mismo placeholder que ya usan Contact/Footer/Projects) hasta que
// existan URLs definitivas -no se inventan-.
const CASE_STUDIES = {
  elevate: {
    id: "elevate",
    title: "Elevate",
    accent: "orange",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    // Subconjunto destacado para la metadata compacta del Hero (distinto
    // de la lista completa "technologies" que usa la card de la landing).
    primaryStack: ["Next.js", "Node.js", "MongoDB"],
    image: "/images/projects/elevate-dashboard.png",
    // Captura específica de "05. La solución" (distinta del showcase del
    // Hero): un dashboard real de la plataforma, sin glow ni retoque
    // horneados en el propio PNG -el CSS no debe añadir ninguno fuerte-.
    solutionImage: "/images/case-studies/elevate/elevate-screenshot.png",
    // Un slot de imagen por funcionalidad destacada (sección "06."),
    // claveado por id (mismo id que caseStudy.elevate.featureHighlights en
    // los locales, así el componente cruza título/descripción con imagen
    // sin depender del orden). Todavía no existe una captura específica
    // para cada bloque -null a propósito, no se reutiliza ningún asset ya
    // usado en otra sección-: CaseStudyHighlights debe seguir
    // renderizando el bloque con un placeholder neutro mientras esto siga
    // así, nunca inventar una imagen.
    featureHighlightImages: {
      dashboard: null,
      courses: null,
      assessments: null,
      admin: null,
    },
    // Arquitectura técnica de "08.": estructura del proyecto, no copy
    // narrativo, así que vive aquí en vez de en los locales -mismo
    // criterio que technologies/primaryStack-. Cada layer se cruza con su
    // label traducible (caseStudy.architecture.<id>Label) por id, igual
    // que featureHighlightImages con featureHighlights. La capa de
    // autenticación no lleva tecnología aquí: "JWT + roles y permisos"
    // mezcla un nombre propio con texto descriptivo, así que se traduce
    // en el locale (caseStudy.elevate.architecture.authTech).
    architecture: {
      layers: [
        { id: "frontend", tech: "Next.js / React" },
        { id: "api", tech: "REST" },
        { id: "backend", tech: "Node.js / Express" },
        { id: "database", tech: "MongoDB" },
      ],
    },
    // Métricas de "10. Resultado": el valor numérico es dato estructural
    // (mismo en cualquier idioma), así que vive aquí -mismo criterio que
    // architecture-. El label de cada métrica SÍ es texto y se cruza por
    // id desde caseStudy.elevate.result.metricLabels en los locales.
    metrics: [
      { id: "roles", value: 3 },
      { id: "courses", value: 4 },
      { id: "demoUsers", value: 16 },
      { id: "achievements", value: 10 },
      { id: "backendTests", value: 213 },
    ],
    // Credenciales de demo de "12. Prueba Elevate": el nombre del rol es
    // dato estructural (mismo criterio que en CaseStudyRoles: "Student"/
    // "Teacher"/"Admin" no se traducen). email/password siguen en null a
    // propósito -no se inventan credenciales-: CaseStudyTryDemo debe
    // mostrar un placeholder neutro (texto "pendiente", nunca un valor
    // falso) mientras sigan así. demoUrl (ya definido arriba, todavía
    // "#") es el mismo enlace que reutiliza el CTA de esta sección.
    demoCredentials: [
      { role: "Student", email: null, password: null },
      { role: "Teacher", email: null, password: null },
      { role: "Admin", email: null, password: null },
    ],
    demoUrl: "#",
    githubUrl: "#",
    // Cierre/navegación final del case study: qué slug viene "después"
    // de este, resuelto por dato en vez de hardcodeado en CaseStudy.js.
    // CaseStudyNextProject reutiliza title/id de CASE_STUDIES[nextProject]
    // -no duplica el nombre propio de Flowly aquí-. flowly no define
    // nextProject todavía: no se inventa a qué proyecto seguiría el suyo.
    nextProject: "flowly",
  },
  flowly: {
    id: "flowly",
    title: "Flowly",
    accent: "blue",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    primaryStack: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/flowly-dashboard.png",
    // "05. La solución": todavía no existe una captura dedicada a esta
    // sección (a diferencia de Elevate, que tiene elevate-screenshot.png).
    // Se reutiliza el mismo asset que ya usa el Hero/la landing -provisional
    // a propósito, no se genera ni se inventa uno nuevo-. Dimensiones
    // reales del PNG (1254×1254, cuadrado, distinto del 1536×1024 de
    // Elevate): CaseStudySolution las necesita para no forzar la imagen a
    // la proporción de Elevate.
    solutionImage: "/images/projects/flowly-dashboard.png",
    solutionImageWidth: 1254,
    solutionImageHeight: 1254,
    // "06. Funcionalidades destacadas": mismo patrón que
    // elevate.featureHighlightImages -null a propósito, mismo criterio
    // (Flowly tendrá su propio sprint de mejora visual más adelante; no
    // se reutiliza flowly-dashboard.png cuatro veces ni se inventa nada)-.
    featureHighlightImages: {
      dashboard: null,
      requests: null,
      workflow: null,
      history: null,
    },
    // Arquitectura técnica de "08.": mismo shape que
    // elevate.architecture.layers (dato técnico, no narrativo). Solo el
    // stack real ya conocido del proyecto -sin cloud/colas/microservicios/
    // WebSockets/Docker/Redis/integraciones externas inventadas-.
    architecture: {
      layers: [
        { id: "frontend", tech: "React" },
        { id: "api", tech: "REST" },
        { id: "backend", tech: "Node.js / Express" },
        { id: "database", tech: "MongoDB" },
      ],
    },
    // Métricas de "10. Resultado": a diferencia de elevate.metrics (5
    // valores numéricos, language-neutral en cualquier idioma), 3 de
    // los 4 resultados de Flowly son texto descriptivo ("Multiestado" /
    // "Completo" / "Por rol") -eso SÍ hay que traducirlo, así que "value"
    // se omite aquí a propósito para esos 3 y se resuelve en el locale
    // (caseStudy.flowly.result.metricValues, por id, mismo criterio que
    // metricLabels). Solo "roles" es un número real y se queda aquí,
    // igual que en Elevate.
    metrics: [
      { id: "roles" }, // value: 4 (traducible por id, ver metricValues)
      { id: "workflow" },
      { id: "history" },
      { id: "access" },
    ],
    // Credenciales de demo de "12. Prueba Flowly": mismo criterio que
    // elevate.demoCredentials (email/password en null a propósito, no se
    // inventan). "role" es aquí un id ESTRUCTURAL (no el nombre a
    // mostrar, a diferencia de Elevate donde "Student"/"Teacher"/"Admin"
    // ya son literales): CaseStudyTryDemo lo traduce reutilizando
    // caseStudy.flowly.roles (sección "04."), sin duplicar texto.
    demoCredentials: [
      { role: "PRESTACIONES", email: null, password: null },
      { role: "DIRECCION_MEDICA", email: null, password: null },
      { role: "ASESORIA_JURIDICA", email: null, password: null },
      { role: "ADMIN", email: null, password: null },
    ],
    demoUrl: "#",
    githubUrl: "#",
    // Cierre/navegación final: cierra el ciclo con Elevate (que ya
    // define nextProject: "flowly" más arriba). Mismo mecanismo, sin
    // tocar CaseStudy.js -ya renderiza este componente para cualquier
    // slug, solo esperaba este dato-. direction:"previous" es la única
    // diferencia real con Elevate: el orden del portfolio es
    // Elevate → Flowly, así que desde Flowly este enlace es "hacia
    // atrás" (label + flecha invertidos), no un segundo "siguiente
    // proyecto". Sin este campo (caso de Elevate) CaseStudyNextProject
    // asume "next" -su comportamiento no cambia-.
    nextProject: "elevate",
    direction: "previous",
  },
};

export const CASE_STUDY_SLUGS = Object.keys(CASE_STUDIES);

export function getCaseStudy(slug) {
  return CASE_STUDIES[slug] ?? null;
}

export default CASE_STUDIES;
