export type ContactLink = {
  label: string;
  href?: string;
  value: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type Project = {
  name: string;
  context: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SoftSkill = {
  description: string;
  title: string;
};

export const profile = {
  name: "Kritpiruch Chaiwong",
  title: "Software Engineer",
  location: "Bangkok, Thailand",
  // summary:
  //   "Backend-leaning software engineer focused on reliable product systems, real-time collaboration, and cloud workflows that feel simple from the outside and disciplined inside.",
  summary:
    "Hi! Amp here 👋 I'm currently exploring frontend and UX/UI design, along with building reliable, well-structured systems. Great to see you here!",
  contact: [
    {
      label: "Email",
      href: "mailto:kritpiruch@gmail.com",
      value: "kritpiruch@gmail.com",
    },
    {
      label: "Phone",
      href: "tel:+66624255530",
      value: "+66 62-425-5530",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kritpiruch-ch",
      value: "linkedin.com/in/kritpiruch-ch",
    },
    {
      label: "GitHub",
      href: "https://github.com/kritpi",
      value: "github.com/kritpi",
    },
  ] satisfies ContactLink[],
  education: {
    school: "Kasetsart University (Bangkhen)",
    degree: "Bachelor's Degree in Computer Science",
    period: "2022 - 2026",
    location: "Bangkok, Thailand",
  },
  softSkills: [
    {
      title: "Collaborative",
      description: "Works effectively across cross-functional teams to align goals and deliver cohesive solutions.",
    },
    {
      title: "Detail-oriented",
      description: "Ensures accuracy and consistency, delivering high-quality and polished work.",
    },
    {
      title: "Adaptable",
      description: "Quickly learns new tools and adjusts to evolving requirements and priorities.",
    },
    {
      title: "Communication",
      description: "Expresses ideas clearly and listens actively to ensure mutual understanding.",
    },
    {
      title: "Ownership-driven",
      description: "Treats delivery as a responsibility from implementation through follow-up.",
    },
    {
      title: "Insightful questioning",
      "description": "Asks thoughtful, non-obvious questions that uncover hidden assumptions, risks, and opportunities."
    }
  ] satisfies SoftSkill[],
};

export const experiences: Experience[] = [
  {
    company: "Central Food Retail Co., Ltd. (Yim Platform)",
    role: "Software Engineer (Backend) Intern",
    period: "April 2025 - November 2025",
    location: "Bang Rak, Bangkok, Thailand",
    summary:
      "Contributed to the end-to-end development of the Go Wholesale e-commerce platform in a microservices architecture built with Golang, Firestore, and PostgreSQL.",
    highlights: [
      "Designed and implemented a notification scheduling system that let non-technical teams configure targeted campaigns with recurrence and audience segmentation using Cloud Run Jobs, Cloud Tasks, and Pub/Sub.",
      "Launched Go Bonus, a purchase-based campaign system with tiered rewards that improved retention and repeat purchases.",
      "Built Go Mail, a personalized recommendation API backed by Redis to reduce latency and speed up per-user data retrieval.",
      "Implemented the order history component for the reorder feature and supported future reorder workflows.",
      "Developed a dynamic product badge system to surface promotional labels across search and listing pages.",
    ],
    technologies: [
      "Golang",
      "Firestore",
      "PostgreSQL",
      "Redis",
      "Cloud Run Jobs",
      "Cloud Tasks",
      "Pub/Sub",
    ],
  }
];

export const projects: Project[] = [
  {
    name: "Keep in Trip",
    context: "Senior Computer Science project",
    summary:
      "Real-time collaborative trip planning application with map navigation and shared expense tracking.",
    stack: [
      "Next.js",
      "Go",
      "Fiber",
      "Socket.io",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Google Cloud Platform",
    ],
    highlights: [
      "Built the frontend in Next.js with live collaboration flows through Socket.io.",
      "Designed and implemented a RESTful Go and PostgreSQL backend for durable trip data.",
      "Used Redis with Socket.io for real-time synchronization and race-condition prevention.",
      "Integrated Google Maps and Navigation APIs for route planning and location-based features.",
      "Added secure Google OAuth 2.0 authentication.",
    ],
  },
  {
    name: "Arom Website",
    context: "Integrated Agile Process and DevOps course project",
    summary:
      "Web application for mood journaling and task management, built around daily tracking and delivery automation.",
    stack: ["Next.js", "Go", "Fiber", "Supabase", "Docker", "GitHub Actions"],
    highlights: [
      "Developed a full-stack web application for logging moods and managing personal tasks.",
      "Implemented CI/CD pipelines for code quality checks, automated builds, and container image publishing.",
      "Containerized the application with Docker and Docker Compose and deployed through GitHub Actions workflows.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Go", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Query", "Axios", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Backend",
    items: ["Microservices Architecture", "REST APIs", "Distributed Systems", "Fiber", "Gin", "Node.js", "Socket.io"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Firestore", "Redis", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Google Cloud Platform",
      "Cloud Run",
      "Pub/Sub",
      "Cloud Tasks",
      "Cloud Storage",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Figma"],
  },
];
