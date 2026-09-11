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
    // Preview de la card "Siguiente/anterior proyecto" (CaseStudyNextProject):
    // recorte propio 1536×600 (misma proporción que esa caja, ~2.56:1) de
    // elevate-screenshot.png, encuadrado a propósito en logo + saludo +
    // progreso -no el cuadrado de Hero ni un cover centrado al azar sobre
    // un asset con otra proporción-. Opcional: si faltara, el componente
    // cae de vuelta a "image".
    nextProjectImage: "/images/case-studies/elevate/elevate-nextproject.png",
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
    // falso) mientras sigan así. demoUrl (ya definido arriba) es el mismo
    // enlace que reutiliza el CTA de esta sección.
    demoCredentials: [
      { role: "Student", email: null, password: null },
      { role: "Teacher", email: null, password: null },
      { role: "Admin", email: null, password: null },
    ],
    // Demo real desplegada y repo real: mismo dato reutilizado por el
    // botón "Ver demo"/"Ver en GitHub" del Hero (CaseStudyHero) y por
    // "Abrir demo" en "12. Prueba Elevate" (CaseStudyTryDemo). demoUrl
    // apunta directo a /login (la app exige sesión iniciada).
    demoUrl: "https://elevate-campus-six.vercel.app/login",
    githubUrl: "https://github.com/lidiaaire/proyect_academy",
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
    // Verde lima real del producto (--color-accent-lime en globals.css),
    // no azul/cyan: todo el sistema de secciones lee este campo vía
    // data-accent, así que el cambio de identidad vive solo aquí.
    accent: "lime",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    primaryStack: ["React", "Node.js", "MongoDB"],
    // Captura definitiva del Hero: dashboard real (rol Prestaciones),
    // Playwright a 1536×1024. Sustituye al placeholder cuadrado anterior
    // (flowly-dashboard.png 1254×1254) -CaseStudyHero sigue asumiendo un
    // marco cuadrado (aspect-ratio 1/1, object-fit:contain), así que esta
    // imagen 3:2 queda centrada con un margen vertical sutil en vez de
    // recortarse; ninguna fila de KPI/tabla queda cortada a medias.
    image: "/images/case-studies/flowly/flowly-hero.png",
    // "05. La solución": captura panorámica real del dashboard completo
    // (Playwright full-page, mismo rol/sesión que el Hero): navegación,
    // KPIs, bandeja de trabajo y ambas visualizaciones (estado por
    // solicitud + solicitudes por área). Dimensiones reales del PNG
    // -CaseStudySolution las necesita para no forzar la proporción de
    // Elevate (1536×1024)-.
    solutionImage: "/images/case-studies/flowly/flowly-solution.png",
    solutionImageWidth: 1536,
    solutionImageHeight: 1579,
    // Preview de la card "Siguiente/anterior proyecto" (CaseStudyNextProject):
    // mismo criterio que elevate.nextProjectImage -recorte propio 1536×600
    // de flowly-hero.png, encuadrado en logo + KPIs en vez de un cover
    // centrado sobre el 3:2 completo (eso cortaba la franja a media altura
    // de forma poco intencional).
    nextProjectImage: "/images/case-studies/flowly/flowly-nextproject.png",
    // "06. Funcionalidades destacadas": 4 capturas reales del producto,
    // cada una del rol/estado que mejor explica esa funcionalidad (no
    // siempre el mismo rol que el Hero -ver conversación de captura):
    // dashboard/requests con Prestaciones, workflow con Dirección Médica
    // (caso a su cargo, con acción disponible), history con Admin (caso
    // ya resuelto, historial completo visible sin restricción de rol).
    featureHighlightImages: {
      dashboard: "/images/case-studies/flowly/flowly-dashboard.png",
      requests: "/images/case-studies/flowly/flowly-requests.png",
      workflow: "/images/case-studies/flowly/flowly-workflow.png",
      history: "/images/case-studies/flowly/flowly-history.png",
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
    // Demo real desplegada: reutilizada tanto por el botón "Ver demo" del
    // Hero (CaseStudyHero) como por "Abrir demo" en "12. Prueba Flowly"
    // (CaseStudyTryDemo) -mismo dato, un único sitio-. Apunta directo a
    // /login (no a la raíz) porque la app exige sesión iniciada.
    demoUrl: "https://flowly-medical.vercel.app/login",
    githubUrl: "https://github.com/lidiaaire/proyect_final_bootcamp",
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
