// Textos en español. Estructura agrupada por sección/componente para que
// crezca de forma ordenada a medida que se traduzcan más partes del
// portfolio (fase 2: Header + About).
const es = {
  header: {
    talk: "Hablemos",
    languageSelector: "Selector de idioma",
  },
  about: {
    eyebrow: "Sobre mí",
    heading: [
      "Mi camino hacia el desarrollo web",
      "no empezó con el código.",
      "Empezó resolviendo problemas reales.",
    ],
    // Cada párrafo es un array de segmentos (bold: true/false) en vez de
    // un único string, para poder reproducir los <strong> del texto
    // original sin escribir HTML a mano dentro del archivo de idioma.
    body: [
      [
        {
          text: "Durante años he trabajado en entornos empresariales y en el sector sanitario, donde he aprendido a entender procesos, detectar necesidades y buscar soluciones. Con el tiempo descubrí que la tecnología me daba la posibilidad de hacer algo que siempre me había atraído: ",
          bold: false,
        },
        {
          text: "convertir ideas en herramientas que realmente puedan ser útiles.",
          bold: true,
        },
      ],
      [
        {
          text: "Actualmente desarrollo aplicaciones web completas, trabajando tanto en frontend como en backend. Disfruto especialmente de todo el proceso: partir de una idea, pensar cómo debería funcionar, construirla, enfrentarme a los problemas que aparecen por el camino y seguir mejorándola hasta conseguir un producto sólido.",
          bold: false,
        },
      ],
      [
        {
          text: "Para mí, desarrollar no consiste únicamente en escribir código.",
          bold: true,
        },
        {
          text: " También implica entender el problema, pensar en quien utilizará el producto y cuidar tanto su funcionamiento como su experiencia. De ahí nace una de las ideas que mejor define mi forma de trabajar: ",
          bold: false,
        },
        { text: "Beyond the Code.", bold: true },
      ],
    ],
    techTitle: "Tecnologías y herramientas",
    skillsTitle: "Skills",
    // Claveado por id estable (no por índice) para que el componente
    // conecte icono/color (datos de diseño, se quedan en el JS) con el
    // texto (aquí) sin acoplar ambas cosas a una posición de array.
    skills: {
      problemSolving: {
        title: "Resolución de problemas",
        description: "Analizo, planifico y encuentro soluciones eficientes.",
      },
      fullStack: {
        title: "Desarrollo Full Stack",
        description: "Construyo aplicaciones completas de principio a fin.",
      },
      responsiveDesign: {
        title: "Diseño responsive",
        description: "Experiencias adaptadas a todos los dispositivos.",
      },
      uxui: {
        title: "Pensamiento UX/UI",
        description: "Creo interfaces intuitivas y centradas en el usuario.",
      },
      apiDevelopment: {
        title: "Desarrollo de APIs",
        description: "Diseño e integro APIs robustas y escalables.",
      },
      dataModeling: {
        title: "Diseño y modelado de datos",
        description: "Estructuro la información de forma eficiente.",
      },
      debugging: {
        title: "Depuración y resolución de errores",
        description:
          "Analizo, identifico y soluciono problemas de forma ágil.",
      },
      productThinking: {
        title: "Pensamiento de producto",
        description:
          "Me enfoco en construir soluciones con un propósito real.",
      },
      aiWorkflow: {
        title: "AI Workflow",
        description:
          "Uso estratégico de herramientas de IA para investigación, análisis y optimización de procesos.",
      },
    },
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Actualmente trabajando en...",
    intro: [
      "Productos digitales nacidos de problemas reales que he identificado durante mi experiencia profesional. Soluciones donde exploro cómo la tecnología puede ayudar a las empresas a optimizar procesos, mejorar la experiencia de sus usuarios y crear herramientas más eficientes para su día a día.",
      "Desde plataformas educativas hasta sistemas internos de gestión, cada producto parte de una necesidad concreta y busca transformarla en una solución funcional, combinando desarrollo, diseño y una visión orientada tanto a las personas como al negocio.",
    ],
    viewProject: "Ver proyecto",
    // Claveado por id estable (mismo criterio que about.skills): el
    // nombre propio del proyecto (Elevate/Flowly) NO se traduce y se
    // queda en el array PROJECTS del componente.
    elevate: {
      category: "Plataforma educativa",
      subtitle: "Your English Campus",
      description:
        "Plataforma educativa para gestionar el aprendizaje de inglés mediante cursos, lecciones interactivas, evaluaciones, progreso, certificados y experiencias personalizadas según el rol del usuario.",
    },
    flowly: {
      category: "Gestión sanitaria",
      subtitle: "Gestión inteligente de autorizaciones sanitarias",
      description:
        "Aplicación B2B para la gestión y trazabilidad de autorizaciones médicas, con diferentes roles, flujos de trabajo y control de estados en tiempo real.",
    },
  },
  // Textos compartidos por las páginas de caso de estudio
  // (/projects/elevate, /projects/flowly). El contenido propio de cada
  // proyecto (subtitle/description) se reutiliza de projects.<id> -mismo
  // id, sin duplicar texto-.
  caseStudy: {
    // Texto en minúsculas/mayúsculas normales: el uppercase visual lo
    // aplica el CSS Module (mismo criterio que projects.eyebrow).
    eyebrow: "Caso de estudio",
    backToProjects: "Volver a proyectos",
    roleLabel: "Mi rol",
    stackLabel: "Stack",
    statusLabel: "Estado",
    viewDemo: "Ver demo",
    viewGithub: "Ver en GitHub",
    // Título de sección compartido (número "01." se resuelve en el
    // componente, no aquí): el mismo encabezado sirve para cualquier
    // proyecto que use CaseStudyOrigin más adelante.
    origin: {
      title: "De dónde nace la idea",
    },
    problem: {
      title: "El problema",
    },
    objectives: {
      title: "Objetivos",
    },
    roles: {
      title: "Usuarios y roles",
    },
    solution: {
      title: "La solución",
    },
    featureHighlights: {
      title: "Funcionalidades destacadas",
    },
    designDecisions: {
      title: "UX/UI y decisiones de diseño",
    },
    // Título + labels de cada capa (compartidos: el mismo nombre
    // "Frontend"/"API"/"Backend"/"Database" sirve para cualquier
    // proyecto). La tecnología de cada capa es dato técnico y vive en
    // data/caseStudies.elevate.architecture.
    architecture: {
      title: "Arquitectura técnica",
      frontendLabel: "Frontend",
      apiLabel: "API",
      backendLabel: "Backend",
      databaseLabel: "Database",
      authLabel: "Autenticación y control de acceso",
    },
    technicalChallenges: {
      title: "Retos técnicos",
    },
    result: {
      title: "Resultado",
    },
    learnings: {
      title: "Lo que aprendí",
    },
    // Textos compartidos de "12. Prueba <título del proyecto>": el título
    // completo se compone en el componente ("tryLabel + project.title"),
    // igual que el resto de secciones combinan número + título. Intro/
    // CTA/aviso/labels son genéricos -mismo texto le sirve a Flowly el
    // día que sume su propia demo-.
    tryDemo: {
      tryLabel: "Prueba",
      intro:
        "Explora la plataforma con una cuenta demo y recorre la experiencia desde distintos roles.",
      cta: "Abrir demo",
      notice:
        "Credenciales de demostración. Los datos pueden restablecerse periódicamente.",
      emailLabel: "Email",
      passwordLabel: "Contraseña",
      // Se usa cuando email/password todavía son null en
      // data/caseStudies: nunca se muestra una credencial inventada.
      pending: "Pendiente",
    },
    // Label compartido del cierre/navegación final (el mismo sirve para
    // cualquier proyecto: "Siguiente proyecto"). El nombre del proyecto
    // siguiente se resuelve de CASE_STUDIES[nextProject].title -no se
    // duplica aquí-.
    nextProjectLabel: "Siguiente proyecto",
    // Mismo criterio que nextProjectLabel: eyebrow compartido para
    // cuando CaseStudyNextProject resuelve project.direction === "previous"
    // (hoy, Flowly enlazando hacia Elevate).
    previousProjectLabel: "Proyecto anterior",
    // Contenido propio de cada proyecto, claveado por id (mismo criterio
    // que projects.<id>). Claim/role/status/origin/problem/objectives/
    // roles/solution/featureHighlights/designDecisions/architecture/
    // technicalChallenges/result/learnings son opcionales: cada sección
    // solo renderiza lo que exista, así Flowly puede sumarse más adelante
    // sin tocar ningún componente.
    elevate: {
      claim: "Una forma más motivadora de aprender inglés",
      role: "Full Stack Developer",
      status: "Completado",
      imageAlt: "Panel de Elevate mostrando el progreso de un alumno de inglés",
      // Teaser del cierre/navegación final de Flowly (CaseStudyNextProject
      // → nextProject: "elevate"): reutiliza el claim del Hero tal cual,
      // en vez de escribir un texto nuevo -mismo criterio ya usado para
      // flowly.teaserDescription-.
      teaserDescription: "Una forma más motivadora de aprender inglés",
      origin: {
        paragraphs: [
          "Actualmente estoy estudiando para obtener los certificados oficiales de inglés y, durante ese proceso, vi una oportunidad: convertir el aprendizaje en una experiencia más motivadora y constante.",
          "Así nació Elevate, una plataforma que busca combinar una progresión académica estructurada con elementos lúdicos y de gamificación que ayuden al estudiante a mantener el hábito, visualizar su avance y seguir queriendo mejorar.",
          "La idea no era crear otra plataforma de cursos, sino incorporar funcionalidades y dinámicas que normalmente no están presentes en una experiencia educativa tradicional.",
        ],
        quote: "Una plataforma pensada por una estudiante, para estudiantes.",
      },
      problem: {
        paragraphs: [
          "Muchas plataformas de aprendizaje de idiomas consiguen ofrecer contenido y seguimiento académico, pero la experiencia puede terminar sintiéndose repetitiva y poco motivadora con el paso del tiempo.",
          "El reto de Elevate era plantear una experiencia que, además de estructurar el aprendizaje, ayudara al estudiante a mantener la constancia, entender claramente su progreso y encontrar pequeños incentivos para seguir avanzando.",
        ],
      },
      // Array en vez de objeto claveado: el orden de lectura de las 4
      // cards ES el orden del array (mismo criterio que SKILLS en
      // About.js). El icono de cada objetivo es una decisión de diseño
      // de la sección, no contenido -vive en CaseStudyObjectives.js-.
      objectives: [
        {
          title: "Centralizar el aprendizaje",
          description:
            "Reunir cursos, progreso, evaluaciones y seguimiento en una única experiencia.",
        },
        {
          title: "Aumentar la motivación",
          description:
            "Introducir gamificación, logros y señales de progreso que incentiven la constancia.",
        },
        {
          title: "Adaptar la experiencia por rol",
          description:
            "Ofrecer funcionalidades específicas para estudiantes, docentes y administración.",
        },
        {
          title: "Construir una base escalable",
          description:
            "Diseñar una plataforma preparada para crecer en contenidos, usuarios y funcionalidades.",
        },
      ],
      // Mismo criterio que objectives: array en el orden de lectura de
      // las 3 cards, icono de cada rol resuelto en CaseStudyRoles.js.
      roles: [
        {
          title: "Student",
          description:
            "Accede a cursos y lecciones, realiza evaluaciones, consulta su progreso, obtiene certificados y participa en el sistema de logros.",
        },
        {
          title: "Teacher",
          description:
            "Gestiona cursos y contenido, consulta el progreso de los estudiantes y realiza seguimiento académico.",
        },
        {
          title: "Admin",
          description:
            "Gestiona usuarios, roles, contenido y configuración general de la plataforma.",
        },
      ],
      solution: {
        intro:
          "Elevate reúne en una misma plataforma las herramientas necesarias para aprender, practicar y hacer seguimiento del progreso, adaptando la experiencia según el rol de cada usuario.",
        imageAlt:
          "Panel principal de Elevate con el progreso, la racha de estudio, la siguiente lección y los objetivos semanales del alumno",
        features: [
          "Dashboard personalizado",
          "Cursos y lecciones",
          "Evaluaciones y tests",
          "Seguimiento del progreso",
          "Certificados",
          "Sistema de logros",
          "Gestión docente",
          "Administración",
        ],
      },
      // Array en el orden de lectura de las 4 cards (mismo criterio que
      // objectives/roles). id claveado, no el título: es lo que usa
      // CaseStudyHighlights.js para cruzar cada bloque con su imagen en
      // data/caseStudies.elevate.featureHighlightImages.
      featureHighlights: [
        {
          id: "dashboard",
          title: "Dashboard",
          description:
            "Vista personalizada con progreso, siguiente paso, nivel, racha y objetivos del estudiante.",
        },
        {
          id: "courses",
          title: "Cursos y lecciones",
          description:
            "Contenido estructurado por niveles, unidades y lecciones, con seguimiento del progreso en cada curso.",
        },
        {
          id: "assessments",
          title: "Evaluaciones",
          description:
            "Tests y evaluaciones para reforzar el aprendizaje y validar el progreso del estudiante.",
        },
        {
          id: "admin",
          title: "Administración",
          description:
            "Gestión de usuarios, roles, cursos, contenido y configuración general de la plataforma.",
        },
      ],
      // Array en el orden de lectura de los 5 elementos (mismo criterio
      // que objectives/roles/featureHighlights). El icono de cada
      // decisión es una decisión de diseño de la sección, no contenido
      // -vive en CaseStudyDesignDecisions.js-.
      designDecisions: [
        {
          title: "Interfaz clara y minimalista",
          description:
            "Priorizar la información importante y facilitar que el usuario entienda cuál es su siguiente acción.",
        },
        {
          title: "Sistema visual con identidad propia",
          description:
            "Utilizar una base oscura y el naranja como acento para mantener una experiencia coherente y reconocible.",
        },
        {
          title: "Componentes reutilizables",
          description:
            "Construir patrones visuales consistentes para dashboards, cards, navegación y estados.",
        },
        {
          title: "Diseño responsive",
          description:
            "Mantener una experiencia usable y coherente en distintos tamaños de pantalla.",
        },
        {
          title: "Experiencia adaptada por rol",
          description:
            "Mostrar a Student, Teacher y Admin únicamente las herramientas relevantes para sus responsabilidades.",
        },
      ],
      // Único texto propio de "08.": la tecnología de las 4 capas
      // principales es dato técnico y vive en
      // data/caseStudies.elevate.architecture (mismo en cualquier
      // idioma). Esta línea sí lleva palabras descriptivas ("roles y
      // permisos"), así que se traduce aquí.
      architecture: {
        authTech: "JWT + roles y permisos",
      },
      // Array en el orden de lectura de los 5 bloques (mismo criterio que
      // objectives/roles/designDecisions). El número "01"-"05" se calcula
      // en CaseStudyTechnicalChallenges.js a partir del índice, no vive
      // aquí.
      technicalChallenges: [
        {
          title: "Gestión de roles y permisos",
          description:
            "Separar correctamente las acciones y vistas disponibles para Student, Teacher y Admin.",
        },
        {
          title: "Seguimiento del progreso",
          description:
            "Mantener sincronizado el avance del estudiante entre cursos, lecciones y evaluaciones.",
        },
        {
          title: "Evaluaciones y corrección automática",
          description:
            "Gestionar tests, resultados y actualización del progreso sin generar inconsistencias.",
        },
        {
          title: "Generación de certificados",
          description:
            "Relacionar la finalización de cursos y criterios de progreso con la emisión de certificados.",
        },
        {
          title: "Dashboards personalizados",
          description:
            "Mostrar información distinta según el rol reutilizando la misma arquitectura y evitando lógica duplicada.",
        },
      ],
      // Labels de "10. Resultado", claveados por id (mismo id que
      // data/caseStudies.elevate.metrics, el componente los cruza por id
      // y no por posición). El valor numérico vive en data/caseStudies.
      result: {
        metricLabels: {
          roles: "roles",
          courses: "cursos",
          demoUsers: "usuarios demo",
          achievements: "logros",
          backendTests: "tests backend superados",
        },
      },
      // Array en el orden de lectura de los 3 bloques (mismo criterio que
      // objectives/roles/designDecisions).
      learnings: [
        {
          title: "Diseñar pensando en motivación, no solo en funcionalidad",
          description:
            "Entender que una plataforma educativa necesita ayudar al usuario a mantener el hábito, no únicamente mostrar contenido.",
        },
        {
          title: "Gestionar una aplicación con múltiples roles y permisos",
          description:
            "Diseñar experiencias diferentes para Student, Teacher y Admin manteniendo una arquitectura coherente.",
        },
        {
          title: "Convertir una idea personal en un producto completo",
          description:
            "Pasar de una necesidad propia a una plataforma con lógica, flujos, métricas y decisiones de producto reales.",
        },
      ],
    },
    flowly: {
      // Contenido del Hero (mismos campos que ya usa elevate.claim/role/
      // status: CaseStudyHero es el mismo componente para ambos, solo
      // cambian estos datos + el acento azul de data/caseStudies). La
      // descripción del Hero reutiliza projects.flowly.description (ya
      // existente, mismo criterio que Elevate) en vez de duplicarla aquí.
      claim: "Autorizaciones más ágiles para un mejor cuidado",
      role: "Full Stack Developer",
      status: "Completado",
      imageAlt: "Panel de Flowly mostrando la gestión de solicitudes sanitarias",
      // Único texto de Flowly fuera del Hero por ahora: la descripción
      // breve que muestra el cierre/navegación de Elevate al enlazar
      // hacia su case study. No es contenido de las 12 secciones de
      // Flowly -esas siguen sin empezar-, solo el teaser de ese bloque de
      // transición.
      teaserDescription:
        "Plataforma B2B para la gestión de autorizaciones sanitarias",
      // "01. De dónde nace la idea": mismo shape que caseStudy.elevate.origin
      // (paragraphs + quote), lo que renderiza CaseStudyOrigin sin ningún
      // cambio en el componente.
      origin: {
        paragraphs: [
          "Durante mi experiencia trabajando con autorizaciones sanitarias detecté distintos puntos de fricción en el proceso: solicitudes que pasan por varios departamentos, información dispersa y dificultad para saber con claridad en qué estado se encuentra cada caso.",
          "A partir de esa experiencia surgió Flowly, una propuesta para centralizar el proceso en una única herramienta, mejorar la coordinación entre equipos y dejar una trazabilidad clara de cada decisión.",
        ],
        quote:
          "Una solución nacida de la experiencia real y del deseo de hacer las cosas de forma más eficiente.",
      },
      // "02. El problema": mismo shape que caseStudy.elevate.problem
      // (paragraphs), lo que renderiza CaseStudyProblem sin ningún cambio
      // en el componente.
      problem: {
        paragraphs: [
          "La gestión de autorizaciones sanitarias implica la participación de distintos departamentos, múltiples estados y validaciones sucesivas. Cuando la información está dispersa o el seguimiento depende de herramientas poco conectadas, aumentan los errores, los retrasos y la dificultad para saber qué ha ocurrido en cada solicitud.",
          "El problema no era únicamente registrar solicitudes, sino conseguir que todo el flujo fuera visible, coordinado y trazable de principio a fin.",
        ],
      },
      // "03. Objetivos": mismo shape que caseStudy.elevate.objectives
      // (array de {title, description}), lo que renderiza
      // CaseStudyObjectives sin ningún cambio de componente -el icono de
      // cada card se sigue resolviendo por posición, no por id-.
      objectives: [
        {
          title: "Centralizar el proceso",
          description:
            "Reunir solicitudes, estados, decisiones e historial en una única herramienta.",
        },
        {
          title: "Reducir pasos innecesarios",
          description:
            "Simplificar el flujo de trabajo entre departamentos y evitar duplicidades.",
        },
        {
          title: "Mejorar la trazabilidad y el control",
          description:
            "Saber qué ha ocurrido, quién ha intervenido y en qué estado se encuentra cada solicitud.",
        },
        {
          title: "Adaptar permisos según departamento",
          description:
            "Mostrar a cada área únicamente las acciones y datos relevantes para su responsabilidad.",
        },
        {
          title: "Crear una solución escalable",
          description:
            "Diseñar una base preparada para crecer en usuarios, solicitudes y nuevas necesidades operativas.",
        },
      ],
      // "04. Usuarios y roles": mismo shape que caseStudy.elevate.roles
      // (array de {title, description}), lo que renderiza CaseStudyRoles
      // sin ningún cambio de componente más allá del icono añadido a
      // ICONS (4 roles, no 3).
      // id añadido a cada entrada (Elevate no lo necesita: sus roles ya
      // son literales en inglés y se muestran tal cual): "12. Prueba
      // Flowly" lo reutiliza para traducir credential.role sin duplicar
      // texto -ver CaseStudyTryDemo.js-.
      roles: [
        {
          id: "PRESTACIONES",
          title: "Prestaciones",
          description:
            "Gestiona y revisa las solicitudes iniciales de autorización.",
        },
        {
          id: "DIRECCION_MEDICA",
          title: "Dirección médica",
          description:
            "Evalúa y autoriza las solicitudes que requieren criterio médico.",
        },
        {
          id: "ASESORIA_JURIDICA",
          title: "Asesoría jurídica",
          description:
            "Revisa aspectos legales y de conformidad cuando es necesario.",
        },
        {
          id: "ADMIN",
          title: "Admin",
          description:
            "Gestiona usuarios, roles y configuración general de la plataforma.",
        },
      ],
      // "05. La solución": mismo shape que caseStudy.elevate.solution
      // (intro, imageAlt, features), lo que renderiza CaseStudySolution
      // sin ningún cambio de componente más allá del fix de width/height
      // (necesario porque el asset de Flowly es cuadrado, no 3:2 como el
      // de Elevate).
      solution: {
        intro:
          "Flowly centraliza el ciclo de vida de las autorizaciones sanitarias en una única plataforma, permitiendo que cada departamento gestione las solicitudes que le corresponden y manteniendo visible el estado, las decisiones y el historial de cada caso.",
        imageAlt:
          "Panel principal de Flowly con el listado de solicitudes de autorización, sus estados y la evolución de solicitudes por semana",
        features: [
          "Dashboard general",
          "Gestión de autorizaciones",
          "Flujo por estados",
          "Asignación por departamentos",
          "Historial y trazabilidad",
          "Filtros y búsqueda",
          "Gestión de usuarios",
          "Control de roles y permisos",
        ],
      },
      // "06. Funcionalidades destacadas": mismo shape que
      // caseStudy.elevate.featureHighlights (array de {id, title,
      // description}), lo que renderiza CaseStudyHighlights sin ningún
      // cambio de componente -image se resuelve por id desde
      // data/caseStudies.flowly.featureHighlightImages, hoy en null-.
      featureHighlights: [
        {
          id: "dashboard",
          title: "Dashboard",
          description:
            "Vista general del estado de las autorizaciones y de la actividad relevante para cada usuario.",
        },
        {
          id: "requests",
          title: "Gestión de solicitudes",
          description:
            "Consulta y gestión centralizada de las autorizaciones durante todo su ciclo de vida.",
        },
        {
          id: "workflow",
          title: "Workflow por estados",
          description:
            "Seguimiento de cada solicitud a través de los distintos estados y departamentos implicados.",
        },
        {
          id: "history",
          title: "Historial y trazabilidad",
          description:
            "Registro de cambios, intervenciones y decisiones para mantener visible todo lo ocurrido en cada caso.",
        },
      ],
      // "07. UX/UI y decisiones de diseño": mismo shape que
      // caseStudy.elevate.designDecisions (array de {title, description}),
      // lo que renderiza CaseStudyDesignDecisions sin ningún cambio de
      // componente -mismos 5 iconos por posición, la diferenciación viene
      // del contenido y del acento azul-.
      designDecisions: [
        {
          title: "Información priorizada",
          description:
            "Dar protagonismo al estado de la solicitud y a los datos necesarios para tomar una decisión sin sobrecargar la interfaz.",
        },
        {
          title: "Estados reconocibles",
          description:
            "Utilizar señales visuales consistentes para identificar rápidamente la situación de cada autorización.",
        },
        {
          title: "Acciones según contexto",
          description:
            "Mostrar únicamente las acciones disponibles según el rol del usuario y el estado actual de la solicitud.",
        },
        {
          title: "Consistencia entre departamentos",
          description:
            "Mantener patrones de navegación e interacción comunes aunque cada área tenga responsabilidades diferentes.",
        },
        {
          title: "Trazabilidad visible",
          description:
            "Facilitar el acceso al historial de cambios y decisiones para comprender qué ha ocurrido durante todo el proceso.",
        },
      ],
      // "08. Arquitectura técnica": único texto propio de Flowly -título y
      // labels de capa ya son compartidos en caseStudy.architecture-. Mismo
      // criterio que caseStudy.elevate.architecture.authTech: mezcla un
      // nombre propio (JWT) con texto descriptivo, así que se traduce
      // aquí y no vive en data/caseStudies.
      architecture: {
        authTech: "JWT + roles por departamento",
      },
      // "09. Retos técnicos": mismo shape que
      // caseStudy.elevate.technicalChallenges (array de {title,
      // description}), lo que renderiza CaseStudyTechnicalChallenges sin
      // ningún cambio de componente -numeración 01-05 calculada por
      // índice, sin icono-.
      technicalChallenges: [
        {
          title: "Workflow multiestado",
          description:
            "Controlar las transiciones de una autorización y permitir únicamente los cambios válidos según su estado actual.",
        },
        {
          title: "Roles y permisos por departamento",
          description:
            "Restringir el acceso y las acciones disponibles según las responsabilidades de Prestaciones, Dirección médica, Asesoría jurídica y Admin.",
        },
        {
          title: "Trazabilidad completa",
          description:
            "Registrar cambios, intervenciones y decisiones manteniendo un historial consultable de cada autorización.",
        },
        {
          title: "Filtros y búsqueda combinados",
          description:
            "Permitir localizar solicitudes rápidamente combinando distintos criterios sin complicar la experiencia de uso.",
        },
        {
          title: "Consistencia entre frontend y backend",
          description:
            "Mantener las reglas del workflow protegidas también en el servidor para que los permisos y transiciones no dependan únicamente de la interfaz.",
        },
      ],
      // "10. Resultado": mismo criterio que metricLabels (cruce por id
      // con data/caseStudies.flowly.metrics, vía CaseStudyResult). A
      // diferencia de Elevate, aquí también vive el VALOR mostrado
      // (metricValues), no solo el label: 3 de los 4 resultados son
      // texto descriptivo ("Multiestado"/"Completo"/"Por rol"), así que
      // no pueden quedarse hardcodeados en español en data/caseStudies
      // -rompería i18n-. "roles" se traduce igual por uniformidad, aunque
      // sea un número.
      result: {
        metricLabels: {
          roles: "roles diferenciados",
          workflow: "workflow de autorizaciones",
          history: "historial y trazabilidad",
          access: "control de acceso",
        },
        metricValues: {
          roles: 4,
          workflow: "Multiestado",
          history: "Completo",
          access: "Por rol",
        },
      },
      // "11. Lo que aprendí": mismo shape que caseStudy.elevate.learnings
      // (array de {title, description}), lo que renderiza
      // CaseStudyLearnings sin ningún cambio de componente.
      learnings: [
        {
          title: "Traducir un proceso real a lógica de producto",
          description:
            "Convertir un flujo profesional con distintos departamentos, estados y decisiones en una experiencia digital estructurada y comprensible.",
        },
        {
          title: "Diseñar permisos como parte del producto",
          description:
            "Entender que los roles no son solo una restricción técnica, sino que determinan qué información y acciones necesita cada usuario para realizar su trabajo.",
        },
        {
          title: "La trazabilidad también es experiencia de usuario",
          description:
            "Diseñar el historial para que cualquier usuario autorizado pueda entender qué ha ocurrido en una solicitud y cómo ha llegado a su estado actual.",
        },
      ],
      // "12. Prueba Flowly": único override necesario sobre
      // caseStudy.tryDemo (compartido) -CTA/aviso/labels ya encajan tal
      // cual-. CaseStudyTryDemo usa este intro en vez del compartido
      // cuando existe.
      tryDemo: {
        intro:
          "Explora el flujo de autorizaciones desde los distintos departamentos y comprueba cómo cambia la experiencia según el rol.",
      },
    },
  },
  beyond: {
    eyebrow: "Beyond the Code",
    heading: "El código es solo una parte del proceso.",
    // Claveado por id estable (mismo criterio que about.skills /
    // projects.<id>): icono, color y número se quedan en el array STEPS
    // del componente.
    cards: {
      learn: {
        title: "Aprender",
        description:
          "Cada proyecto es una oportunidad para descubrir algo nuevo y mejorar lo que ya sé.",
      },
      create: {
        title: "Crear",
        description: "De una idea inicial a una solución real.",
      },
      design: {
        title: "Diseñar",
        description:
          "Mi formación en UX/UI me ayuda a crear pensando más allá de la funcionalidad.",
      },
      build: {
        title: "Construir",
        description:
          "Desarrollo proyectos reales aprendiendo de cada reto y cada decisión.",
      },
    },
    status: {
      eyebrow: "Ahora mismo",
      title: "En constante evolución.",
      text: "Actualmente sigo formándome, desarrollando nuevos proyectos y buscando oportunidades donde seguir creciendo como desarrolladora.",
      items: {
        building: {
          label: "Building",
          value: "Nuevos proyectos personales",
        },
        learning: {
          label: "Learning",
          value: "Grado Superior en DAW",
        },
        openTo: {
          label: "Open to",
          value: "Nuevas oportunidades profesionales",
        },
      },
    },
    formation: {
      title: "Una base que sigue creciendo.",
      items: {
        daw: {
          title: "Desarrollo de Aplicaciones Web (DAW)",
          subtitle: "Formación actual · Grado Superior",
        },
        bootcamp: {
          title: "Bootcamp Full Stack",
          subtitle: "Desarrollo web · Proyecto final",
        },
        uxui: {
          title: "Formación en UX/UI",
          subtitle: "Diseño de producto digital",
        },
      },
    },
  },
  contact: {
    eyebrow: "Contact me",
    heading: "¿Te interesa conectar conmigo?",
    description:
      "Envíame un mensaje a través del formulario de contacto y hablamos.",
    // Nombres de redes sociales (LinkedIn/GitHub/Email), iconos y
    // enlaces se quedan en el componente: no se traducen.
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te responderé lo antes posible.",
      error:
        "No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme directamente a lidia.devworks@gmail.com.",
    },
  },
};

export default es;
