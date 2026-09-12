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
  // Shared texts for the case study pages (/projects/elevate,
  // /projects/flowly). Each project's own content (subtitle/description)
  // is reused from projects.<id> -same id, no duplicated text-.
  caseStudy: {
    eyebrow: "Case Study",
    backToProjects: "Back to projects",
    roleLabel: "My role",
    stackLabel: "Stack",
    statusLabel: "Status",
    viewDemo: "View demo",
    viewGithub: "View on GitHub",
    // Shared section heading ("01." is resolved in the component, not
    // here): the same title works for any project using CaseStudyOrigin.
    origin: {
      title: "Where the idea comes from",
    },
    problem: {
      title: "The problem",
    },
    objectives: {
      title: "Objectives",
    },
    roles: {
      title: "Users and roles",
    },
    solution: {
      title: "The solution",
    },
    featureHighlights: {
      title: "Featured functionalities",
    },
    designDecisions: {
      title: "UX/UI and design decisions",
    },
    architecture: {
      title: "Technical architecture",
      frontendLabel: "Frontend",
      apiLabel: "API",
      backendLabel: "Backend",
      databaseLabel: "Database",
      authLabel: "Authentication and access control",
    },
    technicalChallenges: {
      title: "Technical challenges",
    },
    result: {
      title: "Result",
    },
    learnings: {
      title: "What I learned",
    },
    tryDemo: {
      tryLabel: "Try",
      intro:
        "Explore the platform with a demo account and walk through the experience from different roles.",
      cta: "Open demo",
      notice: "Demo credentials. Data may be reset periodically.",
      emailLabel: "Email",
      passwordLabel: "Password",
      pending: "Pending",
    },
    nextProjectLabel: "Next project",
    previousProjectLabel: "Previous project",
    // Per-project content, keyed by id (same criterion as projects.<id>).
    // claim/role/status/origin/problem/objectives/roles/solution/
    // featureHighlights/designDecisions/architecture/technicalChallenges/
    // result/learnings are optional: each section only renders what
    // exists, so Flowly can be filled in later without touching any
    // component.
    elevate: {
      claim: "A more motivating way to learn English",
      role: "Full Stack Developer",
      status: "Completed",
      imageAlt: "Elevate panel showing an English student's progress",
      teaserDescription: "A more motivating way to learn English",
      origin: {
        paragraphs: [
          "I'm currently studying to get official English certifications, and along the way I spotted an opportunity: turning the learning process into a more motivating, consistent experience.",
          "That's how Elevate was born: a platform that combines a structured academic progression with playful, gamified elements that help students keep the habit, see their progress and stay motivated to improve.",
          "The idea wasn't to build yet another course platform, but to add features and dynamics that aren't usually part of a traditional educational experience.",
        ],
        quote: "A platform designed by a student, for students.",
      },
      problem: {
        paragraphs: [
          "Many language-learning platforms manage to offer content and academic tracking, but the experience can end up feeling repetitive and unmotivating over time.",
          "Elevate's challenge was to design an experience that, beyond structuring the learning path, helped students stay consistent, clearly understand their progress and find small incentives to keep moving forward.",
        ],
      },
      objectives: [
        {
          title: "Centralize learning",
          description:
            "Bring courses, progress, assessments and tracking together in a single experience.",
        },
        {
          title: "Increase motivation",
          description:
            "Introduce gamification, achievements and progress signals that encourage consistency.",
        },
        {
          title: "Adapt the experience by role",
          description:
            "Offer specific features for students, teachers and administration.",
        },
        {
          title: "Build a scalable foundation",
          description:
            "Design a platform ready to grow in content, users and features.",
        },
      ],
      roles: [
        {
          title: "Student",
          description:
            "Accesses courses and lessons, takes assessments, tracks their progress, earns certificates and takes part in the achievement system.",
        },
        {
          title: "Teacher",
          description:
            "Manages courses and content, checks students' progress and tracks their academic performance.",
        },
        {
          title: "Admin",
          description:
            "Manages users, roles, content and the platform's overall configuration.",
        },
      ],
      solution: {
        intro:
          "Elevate brings together the tools needed to learn, practice and track progress in a single platform, adapting the experience to each user's role.",
        imageAlt:
          "Elevate's main dashboard showing progress, study streak, next lesson and the student's weekly goals",
        features: [
          "Personalized dashboard",
          "Courses and lessons",
          "Assessments and tests",
          "Progress tracking",
          "Certificates",
          "Achievement system",
          "Teacher management",
          "Administration",
        ],
      },
      featureHighlights: [
        {
          id: "dashboard",
          title: "Dashboard",
          description:
            "Personalized view with progress, next step, level, streak and the student's goals.",
        },
        {
          id: "courses",
          title: "Courses and lessons",
          description:
            "Content structured by levels, units and lessons, with progress tracking on each course.",
        },
        {
          id: "assessments",
          title: "Assessments",
          description:
            "Tests and assessments to reinforce learning and validate the student's progress.",
        },
        {
          id: "admin",
          title: "Administration",
          description:
            "Management of users, roles, courses, content and the platform's overall configuration.",
        },
      ],
      designDecisions: [
        {
          title: "Clear, minimalist interface",
          description:
            "Prioritize the important information and make the user's next action obvious.",
        },
        {
          title: "Visual system with its own identity",
          description:
            "Use a dark base and orange as an accent to keep the experience coherent and recognizable.",
        },
        {
          title: "Reusable components",
          description:
            "Build consistent visual patterns for dashboards, cards, navigation and states.",
        },
        {
          title: "Responsive design",
          description:
            "Keep the experience usable and consistent across different screen sizes.",
        },
        {
          title: "Experience adapted by role",
          description:
            "Show Student, Teacher and Admin only the tools relevant to their responsibilities.",
        },
      ],
      architecture: {
        authTech: "JWT + roles and permissions",
      },
      technicalChallenges: [
        {
          title: "Roles and permissions management",
          description:
            "Correctly separate the actions and views available to Student, Teacher and Admin.",
        },
        {
          title: "Progress tracking",
          description:
            "Keep the student's progress in sync across courses, lessons and assessments.",
        },
        {
          title: "Assessments and automatic grading",
          description:
            "Manage tests, results and progress updates without generating inconsistencies.",
        },
        {
          title: "Certificate generation",
          description:
            "Link course completion and progress criteria to certificate issuance.",
        },
        {
          title: "Personalized dashboards",
          description:
            "Show different information per role by reusing the same architecture and avoiding duplicated logic.",
        },
      ],
      result: {
        metricLabels: {
          roles: "roles",
          courses: "courses",
          demoUsers: "demo users",
          achievements: "achievements",
          backendTests: "backend tests passed",
        },
      },
      learnings: [
        {
          title: "Designing for motivation, not just functionality",
          description:
            "Understanding that an educational platform needs to help the user keep the habit, not just display content.",
        },
        {
          title: "Managing an app with multiple roles and permissions",
          description:
            "Designing different experiences for Student, Teacher and Admin while keeping a coherent architecture.",
        },
        {
          title: "Turning a personal idea into a complete product",
          description:
            "Going from a personal need to a platform with real logic, flows, metrics and product decisions.",
        },
      ],
    },
    flowly: {
      claim: "Faster authorizations for better care",
      role: "Full Stack Developer",
      status: "Completed",
      imageAlt: "Flowly panel showing healthcare request management",
      teaserDescription:
        "B2B platform for managing healthcare authorizations",
      origin: {
        paragraphs: [
          "While working with healthcare authorizations, I identified several friction points in the process: requests moving across multiple departments, scattered information and difficulty knowing clearly what state each case was in.",
          "That experience led to Flowly, a proposal to centralize the process in a single tool, improve coordination between teams and leave a clear trace of every decision.",
        ],
        quote:
          "A solution born from real experience and the drive to do things more efficiently.",
      },
      problem: {
        paragraphs: [
          "Managing healthcare authorizations involves several departments, multiple states and successive validations. When information is scattered or tracking relies on poorly connected tools, errors, delays and the difficulty of knowing what happened on each request all increase.",
          "The problem wasn't just logging requests, but making the entire flow visible, coordinated and traceable from start to finish.",
        ],
      },
      objectives: [
        {
          title: "Centralize the process",
          description:
            "Bring requests, states, decisions and history together in a single tool.",
        },
        {
          title: "Reduce unnecessary steps",
          description:
            "Simplify the workflow between departments and avoid duplicated work.",
        },
        {
          title: "Improve traceability and control",
          description:
            "Know what happened, who was involved and what state each request is in.",
        },
        {
          title: "Adapt permissions by department",
          description:
            "Show each area only the actions and data relevant to their responsibility.",
        },
        {
          title: "Build a scalable solution",
          description:
            "Design a foundation ready to grow in users, requests and new operational needs.",
        },
      ],
      // id added to each entry, same ids as data/caseStudies.js
      // demoCredentials -reused by "12. Prueba Flowly" to translate
      // credential.role without duplicating text-.
      roles: [
        {
          id: "PRESTACIONES",
          title: "Benefits",
          description: "Manages and reviews the initial authorization requests.",
        },
        {
          id: "DIRECCION_MEDICA",
          title: "Medical management",
          description:
            "Evaluates and authorizes requests that require medical judgment.",
        },
        {
          id: "ASESORIA_JURIDICA",
          title: "Legal advisory",
          description:
            "Reviews legal and compliance aspects whenever necessary.",
        },
        {
          id: "ADMIN",
          title: "Admin",
          description:
            "Manages users, roles and the platform's overall configuration.",
        },
      ],
      solution: {
        intro:
          "Flowly centralizes the lifecycle of healthcare authorizations in a single platform, letting each department manage the requests that belong to them while keeping the status, decisions and history of every case visible.",
        imageAlt:
          "Flowly's main panel with the list of authorization requests, their statuses and the weekly request trend",
        features: [
          "General dashboard",
          "Authorization management",
          "Status-based workflow",
          "Assignment by department",
          "History and traceability",
          "Filters and search",
          "User management",
          "Roles and permissions control",
        ],
      },
      featureHighlights: [
        {
          id: "dashboard",
          title: "Dashboard",
          description:
            "Overview of the status of authorizations and the activity relevant to each user.",
        },
        {
          id: "requests",
          title: "Request management",
          description:
            "Centralized review and management of authorizations throughout their lifecycle.",
        },
        {
          id: "workflow",
          title: "Status-based workflow",
          description:
            "Tracking of each request across the different states and departments involved.",
        },
        {
          id: "history",
          title: "History and traceability",
          description:
            "Record of changes, interventions and decisions to keep everything that happened on each case visible.",
        },
      ],
      designDecisions: [
        {
          title: "Prioritized information",
          description:
            "Give prominence to the request's status and the data needed to make a decision without overloading the interface.",
        },
        {
          title: "Recognizable statuses",
          description:
            "Use consistent visual signals to quickly identify the situation of each authorization.",
        },
        {
          title: "Context-aware actions",
          description:
            "Show only the actions available based on the user's role and the request's current status.",
        },
        {
          title: "Consistency across departments",
          description:
            "Keep common navigation and interaction patterns even though each area has different responsibilities.",
        },
        {
          title: "Visible traceability",
          description:
            "Make it easy to access the history of changes and decisions to understand what happened throughout the process.",
        },
      ],
      architecture: {
        authTech: "JWT + roles by department",
      },
      technicalChallenges: [
        {
          title: "Multi-state workflow",
          description:
            "Control an authorization's transitions and allow only the valid changes based on its current status.",
        },
        {
          title: "Roles and permissions by department",
          description:
            "Restrict access and available actions based on the responsibilities of Benefits, Medical management, Legal advisory and Admin.",
        },
        {
          title: "Full traceability",
          description:
            "Log changes, interventions and decisions while keeping a queryable history of every authorization.",
        },
        {
          title: "Combined filters and search",
          description:
            "Let users find requests quickly by combining different criteria without complicating the experience.",
        },
        {
          title: "Consistency between frontend and backend",
          description:
            "Keep the workflow rules enforced on the server too, so permissions and transitions don't depend on the interface alone.",
        },
      ],
      result: {
        metricLabels: {
          roles: "distinct roles",
          workflow: "authorization workflow",
          history: "history and traceability",
          access: "access control",
        },
        metricValues: {
          roles: 4,
          workflow: "Multi-state",
          history: "Complete",
          access: "By role",
        },
      },
      learnings: [
        {
          title: "Translating a real process into product logic",
          description:
            "Turning a professional workflow with multiple departments, states and decisions into a structured, understandable digital experience.",
        },
        {
          title: "Designing permissions as part of the product",
          description:
            "Understanding that roles aren't just a technical restriction — they determine what information and actions each user needs to do their job.",
        },
        {
          title: "Traceability is also user experience",
          description:
            "Designing the history so any authorized user can understand what happened on a request and how it reached its current state.",
        },
      ],
      tryDemo: {
        intro:
          "Explore the authorization flow from the different departments and see how the experience changes depending on the role.",
      },
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
      sending: "Sending...",
      success: "Message sent! I'll get back to you as soon as possible.",
      error:
        "The message couldn't be sent. Please try again or email me directly at lidia.devworks@gmail.com.",
    },
  },
};

export default en;
