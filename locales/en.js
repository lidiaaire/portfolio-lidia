// English texts. Same key structure as es.js -grouped by
// section/component-, so both files stay in sync as more of the
// portfolio gets translated (phase 2: Header + About).
const en = {
  header: {
    talk: "Let's talk",
    languageSelector: "Language selector",
  },
  about: {
    eyebrow: "About me",
    heading: [
      "My path into web development",
      "didn't start with code.",
      "It started by solving real problems.",
    ],
    // Same segment structure as es.js (bold: true/false per chunk) so
    // both locales stay structurally identical.
    body: [
      [
        {
          text: "For years I worked in corporate and healthcare environments, where I learned to understand processes, spot needs and look for solutions. Over time I discovered that technology gave me the chance to do something that had always drawn me in: ",
          bold: false,
        },
        {
          text: "turning ideas into tools that can actually be useful.",
          bold: true,
        },
      ],
      [
        {
          text: "I currently build complete web applications, working on both frontend and backend. I especially enjoy the whole process: starting from an idea, figuring out how it should work, building it, tackling the problems that come up along the way, and continuing to improve it until it becomes a solid product.",
          bold: false,
        },
      ],
      [
        {
          text: "To me, development isn't only about writing code.",
          bold: true,
        },
        {
          text: " It also means understanding the problem, thinking about who will use the product, and caring for both how it works and how it feels to use. That's where one of the ideas that best defines how I work comes from: ",
          bold: false,
        },
        { text: "Beyond the Code.", bold: true },
      ],
    ],
    techTitle: "Technologies & tools",
    skillsTitle: "Skills",
    skills: {
      problemSolving: {
        title: "Problem solving",
        description: "I analyze, plan and find efficient solutions.",
      },
      fullStack: {
        title: "Full Stack development",
        description: "I build complete applications from start to finish.",
      },
      responsiveDesign: {
        title: "Responsive design",
        description: "Experiences adapted to every device.",
      },
      uxui: {
        title: "UX/UI thinking",
        description: "I create intuitive, user-centered interfaces.",
      },
      apiDevelopment: {
        title: "API development",
        description: "I design and integrate robust, scalable APIs.",
      },
      dataModeling: {
        title: "Data design & modeling",
        description: "I structure information efficiently.",
      },
      debugging: {
        title: "Debugging & troubleshooting",
        description: "I analyze, identify and fix issues quickly.",
      },
      productThinking: {
        title: "Product thinking",
        description: "I focus on building solutions with real purpose.",
      },
      aiWorkflow: {
        title: "AI Workflow",
        description:
          "Strategic use of AI tools for research, analysis and process optimization.",
      },
    },
  },
  projects: {
    eyebrow: "Projects",
    heading: "Currently working on...",
    intro: [
      "Digital products born from real problems I've identified throughout my professional experience. Solutions where I explore how technology can help companies optimize processes, improve their users' experience and build more efficient tools for everyday work.",
      "From educational platforms to internal management systems, each product starts from a concrete need and aims to turn it into a functional solution, combining development, design and a vision geared toward both people and business.",
    ],
    viewProject: "View project",
    elevate: {
      category: "Educational platform",
      subtitle: "Your English Campus",
      description:
        "Educational platform for managing English learning through courses, interactive lessons, assessments, progress tracking, certificates and personalized experiences based on user role.",
    },
    flowly: {
      category: "Healthcare management",
      subtitle: "Smart management of healthcare authorizations",
      description:
        "B2B application for managing and tracking medical authorizations, with different roles, workflows and real-time status control.",
    },
  },
  beyond: {
    eyebrow: "Beyond the Code",
    heading: "Code is only part of the process.",
    cards: {
      learn: {
        title: "Learn",
        description:
          "Every project is a chance to discover something new and improve what I already know.",
      },
      create: {
        title: "Create",
        description: "From an initial idea to a real solution.",
      },
      design: {
        title: "Design",
        description:
          "My UX/UI training helps me create with more than just functionality in mind.",
      },
      build: {
        title: "Build",
        description:
          "I build real projects, learning from every challenge and every decision.",
      },
    },
    status: {
      eyebrow: "Right now",
      title: "Constantly evolving.",
      text: "I'm currently continuing my training, building new projects and looking for opportunities to keep growing as a developer.",
      items: {
        building: {
          label: "Building",
          value: "New personal projects",
        },
        learning: {
          label: "Learning",
          value: "Advanced Vocational Degree in DAW",
        },
        openTo: {
          label: "Open to",
          value: "New professional opportunities",
        },
      },
    },
    formation: {
      title: "A foundation that keeps growing.",
      items: {
        daw: {
          title: "Web Application Development (DAW)",
          subtitle: "Currently studying · Advanced Vocational Degree",
        },
        bootcamp: {
          title: "Full Stack Bootcamp",
          subtitle: "Web development · Final project",
        },
        uxui: {
          title: "UX/UI Training",
          subtitle: "Digital product design",
        },
      },
    },
  },
  contact: {
    eyebrow: "Contact me",
    heading: "Interested in connecting with me?",
    description: "Send me a message through the contact form and let's talk.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
    },
  },
};

export default en;
