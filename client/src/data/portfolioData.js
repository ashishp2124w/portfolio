/**
 * Centralized Portfolio Data
 * Easily customizable placeholder data for personal branding, projects, skills, and background.
 */
export const portfolioData = {
  personal: {
    name: "Ashish Pradhan",
    role: "Frontend & Full-Stack Developer",
    location: "Bengaluru (Open to Remote)",
    status: "Available for new opportunities",
    bio: "Passionate Frontend Developer with 2+ years of experience building modern, accessible, and high-performance web applications. Focused on React, TypeScript, Node.js, and crafting exceptional digital user experiences with meticulous attention to design detail.",
    shortIntro: "Building scalable, elegant, and interactive web experiences for global brands and modern startups.",
    socials: {
      github: "https://github.com/ashishp2124w",
      linkedin: "https://www.linkedin.com/in/ashish-pradhan-5455163ba/",
      twitter: "https://twitter.com",
      email: "ashishp.69000@gmail.com",
    },
    resumeUrl: "https://drive.google.com/file/d/10LoOB7sbcMMJf5jdvgHPVgcwdJRn5Spv/view?usp=sharing", // Add link to your PDF resume here
  },

  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Completed Projects", value: "15+" },
    { label: "Code Commits", value: "2.4k+" },
    { label: "Client Satisfaction", value: "100%" },
  ],

  skills: {
    frontend: [
      { name: "React / Next.js", level: 95 },
      { name: "JavaScript (ES6+) / TypeScript", level: 90 },
      { name: "Tailwind CSS / CSS Modules", level: 95 },
      { name: "HTML5 / Semantic UI / Accessibility", level: 98 },
      { name: "Redux Toolkit / Zustand / React Query", level: 88 },
      { name: "Vite / Webpack / Tooling", level: 85 },
    ],
    backend: [
      { name: "Node.js / Express", level: 85 },
      { name: "RESTful APIs / GraphQL", level: 88 },
      { name: "MongoDB / PostgreSQL", level: 80 },
      { name: "Nodemailer / Resend Integration", level: 90 },
      { name: "Authentication (JWT, OAuth)", level: 85 },
    ],
    tools: [
      { name: "Git / GitHub / Workflows", level: 92 },
      { name: "Vercel / Netlify / Render Deployments", level: 90 },
      { name: "Docker & Containerization", level: 75 },
      { name: "Jest / Vitest / Testing Library", level: 82 },
      { name: "Figma to Code / Responsive Design", level: 95 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "SaaS Analytics Dashboard",
      category: "Full Stack",
      description: "Real-time metrics dashboard with interactive charts, user authentication, team collaboration, and automated PDF export.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Chart.js"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      imageGradient: "from-indigo-600 via-purple-600 to-pink-500",
    },
    {
      id: 2,
      title: "E-Commerce Experience",
      category: "Frontend",
      description: "Ultra-fast modern online store featuring product filtering, multi-currency cart, optimistic UI updates, and Stripe checkout.",
      tags: ["React", "Vite", "Tailwind CSS", "Zustand", "Stripe API"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      imageGradient: "from-blue-600 via-cyan-500 to-teal-400",
    },
    {
      id: 3,
      title: "AI Prompt Marketplace",
      category: "Full Stack",
      description: "Platform for discovering and sharing AI prompts with payment integrations, search indexing, and creator analytics.",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      imageGradient: "from-amber-500 via-orange-600 to-rose-600",
    },
    {
      id: 4,
      title: "Task Management Suite",
      category: "Frontend",
      description: "Kanban-style productivity app with drag-and-drop support, dark/light theme switching, and local storage sync.",
      tags: ["React", "Tailwind CSS", "Dnd Kit", "Vite"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      imageGradient: "from-emerald-500 via-teal-600 to-cyan-700",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "Imcrinox Technologies Pvt Ltd",
      period: "2025 - 2026",
      location: "Bengaluru",
      type: "Work",
      highlights: [
        "Architected core React UI component library used across 4 enterprise product suites.",
        "Improved web application load speed by 40% through code-splitting and asset optimization.",
        // "Mentored junior developers and instituted code review standards across a team of 8.",
      ],
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "In Technet Limited",
      period: "2024 - 2025",
      location: "Remote",
      type: "Work",
      highlights: [
        "Developed custom client portals with Node.js/Express backends and React frontends.",
        "Integrated third-party payment gateways, CRM tools, and Nodemailer notification services.",
        "Delivered 15+ web applications on schedule with 99.8% uptime.",
      ],
    },
    {
      id: 3,
      role: "B.Tech in Computer Science & Engineering",
      company: "Siksha 'O' Anusandhan, ITER",
      period: "2020 - 2024",
      location: "Bhubaneswar",
      type: "Education",
      highlights: [
        // "Graduated with High Honors (GPA: 6.9/10).",
        // "Lead Web Developer for CS Student Association.",
        "Coursework: Algorithms, Web Technologies, Database Systems, Software Engineering.",
      ],
    },
  ],

  contactInfo: {
    email: "ashishp.69000@gmial.com",
    phone: "---",
    location: "Bengaluru",
    availability: "Available for Full-time Roles & Contracts",
  },
};
