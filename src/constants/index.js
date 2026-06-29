import project1 from "../assets/projects/e-commerce.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/portfolio.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project5 from "../assets/projects/project-5.jpg";

/* ------------------------------------------------------------------ */
/*  Navigation sections (used by Navbar + side scroll-flow indicator)  */
/* ------------------------------------------------------------------ */
export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/abhishek-pratap-mall-252481250",
  github: "https://github.com/abhi-pratap21",
  twitter: "https://x.com/Abhishe45571287",
  instagram: "https://www.instagram.com/abhi__pratap",
};

/* ------------------------------------------------------------------ */
/*  Hero + About                                                       */
/* ------------------------------------------------------------------ */
export const HERO_CONTENT = `I build AI-powered SaaS products end to end — from conversational AI agents and vector search to scalable backend APIs, data pipelines, and cloud infrastructure. Currently a Software Engineer at Amrut AI, I ship production systems that real businesses rely on every day.`;

export const ABOUT_TEXT = `I'm a Full-Stack Software Engineer who builds AI-powered SaaS systems that combine automation, analytics, and scalable architecture — owning every layer from AI agents to cloud infrastructure and data pipelines. At Amrut AI, I'm a core product engineer on an AI-driven SEO and business-intelligence platform, where I design backend architecture, build automation and data pipelines, integrate external data ecosystems, and ship production systems used for real business decisions. I've built a conversational AI agent grounded in Vertex AI semantic search over 400K+ embeddings, batch pipelines processing 1M+ URLs, a Firestore-to-BigQuery analytics warehouse, and 40+ REST endpoints alongside 20+ Next.js / React dashboard tools. Beyond product work, I take on freelance projects through my studio, Trident Square — building websites, apps, and AI integrations for startups and businesses. I care about ownership, performance, and shipping things that actually work.`;

/* Quick stats shown in the About section (animated count-up) */
export const STATS = [
  { to: 400, suffix: "K+", label: "Vector embeddings" },
  { to: 1, suffix: "M+", label: "URLs processed" },
  { to: 40, suffix: "+", label: "REST endpoints" },
  { to: 150, suffix: "+", label: "DSA problems solved" },
];

/* ------------------------------------------------------------------ */
/*  Work experience                                                    */
/* ------------------------------------------------------------------ */
export const WORK_EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Amrut AI",
    type: "Full-time · Hybrid",
    year: "Aug 2025 – Present",
    location: "Vancouver, BC, Canada",
    summary:
      "Full-stack ownership of an AI-powered SEO & business-intelligence SaaS used by real businesses — across AI agents, backend APIs, data pipelines, frontend, and cloud infrastructure.",
    points: [
      "Built Vertex AI semantic search over 400K+ vector embeddings (under 100ms, country pre-filtered) powering a conversational AI agent — a 50+ tool registry, a multi-provider LLM adapter (OpenAI, Gemini, Vertex AI), and SSE streaming.",
      "Engineered batch pipelines processing 1M+ URLs (checkpoint-resumable) for LLM enrichment, classification, and location intelligence across thousands of profiles.",
      "Designed a Firestore-to-BigQuery analytics warehouse (12+ exports, 9+ clustered views, 58 indexes), optimizing a 2GB changelog scan down to a ~50MB clustered table.",
      "Shipped 40+ REST endpoints on Firebase Cloud Functions (Node 22, Express, TS) with async jobId-polling driving a multi-stage AI SEO audit pipeline (Lighthouse, Core Web Vitals, GPT-4o enrichment, competitor analysis).",
      "Delivered 20+ Next.js / React / TypeScript dashboard tools and a streaming AI agent UI (15+ widgets, multi-domain compare) on Redux Toolkit.",
      "Integrated the Google ecosystem (Search Console, Analytics, YouTube, Business Profile) via multi-account OAuth, plus Stripe payments with HMAC-verified webhooks.",
      "Hardened public routes with a two-tier App Check anti-scraping gate and a Cloud Armor 5-tier WAF (DDoS, SQLi, XSS, bot, rate-limit) with per-user/IP rate limiting.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Firebase",
      "BigQuery",
      "Vertex AI",
      "Stripe",
      "Redux Toolkit",
    ],
  },
  {
    role: "Software Engineer",
    company: "BillClap",
    type: "Full-time · On-site",
    year: "Jul 2025 – Aug 2025",
    location: "Noida, Uttar Pradesh, India",
    summary:
      "Worked as a full-time Software Engineer, contributing to product development and shipping features across the web stack.",
    points: [],
    technologies: ["JavaScript", "React", "Node.js"],
  },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */
export const EDUCATION = [
  {
    year: "2021 – 2025",
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Greater Noida Institute of Technology",
    location: "Greater Noida, Uttar Pradesh",
    score: "CGPA 7.0",
  },
  {
    year: "2018 – 2020",
    degree: "Intermediate (Mathematics), UP Board",
    institution: "Lal Bahadur Shastri Inter College",
    location: "Gorakhpur, Uttar Pradesh",
    score: "72%",
  },
  {
    year: "2017 – 2018",
    degree: "High School, UP Board",
    institution: "Lal Bahadur Shastri Inter College",
    location: "Gorakhpur, Uttar Pradesh",
    score: "84%",
  },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */
export const PROJECTS = [
  {
    title: "Creator Dashboard — Role-Based CMS",
    image: project4,
    description:
      "A secure, scalable content-management platform for creators and admins. JWT authentication, a credit-point system, role-based access control, and content aggregation from the Twitter and Reddit APIs. Frontend on Firebase Hosting, backend on Render, database on MongoDB Atlas.",
    technologies: ["React", "Tailwind", "Node.js", "Express", "JWT", "MongoDB"],
    link: "",
  },
  {
    title: "Wanderlust — Travel Discovery Platform",
    image: project6,
    description:
      "A full-stack platform for travel lovers to discover, review, and share destinations. 50+ listings and 100+ user profiles, secure authentication, and a responsive, community-driven experience built on the MEN stack with EJS.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "EJS"],
    link: "https://wanderlust-sem2.onrender.com/listings",
  },
  {
    title: "Video Streaming App",
    image: project4,
    description:
      "A real-time video streaming system delivering data in small packets with under-1-second latency. Adaptive bitrate streaming via M3U8 cut buffering by ~25% by adjusting quality to the viewer's connection speed.",
    technologies: ["React", "Node.js", "Express", "FFmpeg", "Video.js"],
    link: "",
  },
  {
    title: "E-Commerce Shopping Website",
    image: project1,
    description:
      "A fully responsive e-commerce store built with React and Tailwind CSS. Uses the Fake Store API for product data and the Context API for global state and cart management.",
    technologies: ["React", "Tailwind CSS", "Context API"],
    link: "https://react-e-commerce-shop-xi.vercel.app/",
  },
  {
    title: "Weather App",
    image: project5,
    description:
      "A dynamic weather app giving real-time conditions for any city worldwide — temperature, humidity, and forecasts — through a clean, responsive UI powered by the OpenWeatherMap API.",
    technologies: ["React", "OpenWeatherMap API"],
    link: "https://weather-reactapp-henna.vercel.app/",
  },
  {
    title: "To-Do App",
    image: project2,
    description:
      "A user-friendly task manager to create, edit, and delete to-dos, with authentication and secure cloud storage handled by Firebase.",
    technologies: ["Next.js", "Firebase"],
    link: "https://todo-next-firebase-xi.vercel.app/",
  },
];

/* ------------------------------------------------------------------ */
/*  Freelance services (Trident Square)                                */
/* ------------------------------------------------------------------ */
export const TRIDENT = {
  name: "Trident Square",
  url: "https://www.tridentsquare.com/",
  tagline: "Build digital products that scale.",
};

export const SERVICES = [
  {
    icon: "web",
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps built with React, Next.js, and Node.js — from landing pages to full SaaS platforms.",
  },
  {
    icon: "app",
    title: "App Development",
    description:
      "Cross-platform mobile apps that feel native, built to scale with a clean, modern user experience.",
  },
  {
    icon: "ai",
    title: "AI Integration",
    description:
      "Bring AI into your product — chatbots, automation, LLM agents, and semantic search wired into real workflows.",
  },
  {
    icon: "ecommerce",
    title: "E-Commerce",
    description:
      "Complete online stores with payments, inventory, and a smooth, conversion-focused checkout experience.",
  },
  {
    icon: "software",
    title: "Custom Software & APIs",
    description:
      "CRMs, dashboards, automations, and clean REST APIs tailored to how your business actually works.",
  },
  {
    icon: "design",
    title: "UI/UX Design",
    description:
      "Clean, modern interfaces and design systems — from wireframes and prototypes to polished, shippable products.",
  },
];

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */
export const CONTACT = {
  address: "Vancouver, British Columbia, Canada",
  phoneNo: "+91 6388443418",
  email: "abhishekpratap21nov@gmail.com",
};
