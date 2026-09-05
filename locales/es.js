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
    },
  },
};

export default es;
