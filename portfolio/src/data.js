/*
 * ──────────────────────────────────────────────────────────────
 *  All the content on the site lives in this one file.
 *  Edit the text below — you don't need to touch the components.
 *  Anything left as an empty string ("") is hidden automatically.
 * ──────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Sirasak Kraiwicha",
  // Shown in the big hero headline. Keep it short.
  headline: "Hi, I'm Sirasak.",
  tagline: "Full-stack web, AI, IoT and networking — building systems that work end to end.",
  role: "Computer Engineering Student · KMUTNB",
  availability: "Open to developer internships",
  email: "nowsirasak@gmail.com",
  location: "Bangkok, Thailand",
  // Square photo in /public. Leave empty to show your initials instead.
  photo: "/profile.jpg",
  // Optional: put a CV in /public (e.g. public/resume.pdf) and set "/resume.pdf".
  // Tip: use a version without your phone number and home address — this site is public.
  resume: "",
  // Used for SEO / link previews. Set this after your first Vercel deploy.
  siteUrl: "",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/nowsirasak" },
  { label: "LinkedIn", url: "" }, // e.g. "https://www.linkedin.com/in/yourname"
];

export const about = {
  bio: [
    "I'm Sirasak (Now), a Computer Engineering student at King Mongkut's University of Technology North Bangkok, skilled in full-stack web development, IoT and networking.",
    "I'm a fast learner with strong planning and teamwork skills — I've led team projects as project manager and team lead — and I'm looking for a developer internship.",
  ],
  facts: [
    { label: "University", value: "KMUTNB" },
    { label: "Degree", value: "Bachelor of Engineering" },
    { label: "Program", value: "Electronics Engineering Technology (Computer)" },
    { label: "Languages", value: "Thai (native) · English (B1)" },
    { label: "Based in", value: "Bangkok" },
  ],
};

export const skills = [
  {
    title: "Languages",
    caption: "What I write code in.",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "PHP", "HTML/CSS"],
  },
  {
    title: "Frontend",
    caption: "Interfaces for the web.",
    items: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend & AI",
    caption: "APIs, data and models.",
    items: ["FastAPI", "Node.js", "Supabase", "PostgreSQL", "scikit-learn", "Ollama (Local LLM)"],
  },
  {
    title: "Tools & DevOps",
    caption: "How I ship and collaborate.",
    items: ["Git", "GitHub", "Docker", "Docker Compose"],
  },
  {
    title: "Hardware & Network",
    caption: "Beyond the screen.",
    items: ["ESP32", "Arduino", "Electronic Circuits", "PCB Design", "Network Administration"],
  },
  {
    title: "Working style",
    caption: "How I show up on a team.",
    items: ["Fast learner", "Planning", "Teamwork", "Project management"],
  },
];

/*
 * Projects: add as many as you like.
 *  - image: optional path to a screenshot in /public (e.g. "/projects/app.png").
 *    Without an image, the card shows a soft gradient using `tint`.
 *  - demo / code: links. Leave "" to hide the button.
 */
export const projects = [
  {
    title: "AI News Analysis for US Tech Stocks",
    kicker: "Senior Project · In progress",
    desc: "As team lead, building a system that auto-collects, translates and analyzes NASDAQ/NYSE tech-stock news for Thai investors. A local LLM (Qwen via Ollama) handles EN→TH translation and sentiment, and a logistic regression model predicts 1–4h price direction.",
    tags: ["React", "Tailwind", "FastAPI", "PostgreSQL", "Ollama", "scikit-learn", "Docker Compose"],
    tint: ["#ff9f0a", "#ff375f"],
    image: "",
    demo: "",
    code: "",
  },
  {
    title: "Intelligent Security Log Analyzer",
    kicker: "Security Monitoring · AI-Assisted",
    desc: "Analyzes server logs to detect and classify attacks, controlled through a Discord bot. A local LLM (Ollama) explains each attack and suggests remediation — all on-premise — with a web dashboard of interactive charts.",
    tags: ["Ollama", "Discord Bot", "Log Analysis", "Dashboard"],
    tint: ["#5e5ce6", "#0a84ff"],
    image: "",
    demo: "",
    code: "",
  },
  {
    title: "Apartment Management System",
    kicker: "Full-Stack Web App · Project Manager",
    desc: "Led the team as project manager, coordinating tasks and the development workflow. Set up the PostgreSQL database, containerized the app with Docker, and contributed to the web interface.",
    tags: ["PHP", "HTML/CSS", "PostgreSQL", "Docker"],
    tint: ["#30d158", "#00a3a3"],
    image: "",
    demo: "",
    code: "",
  },
];

export const education = [
  {
    period: "2023 — Present",
    title: "King Mongkut's University of Technology North Bangkok",
    detail: "Bachelor of Engineering · Electronics Engineering Technology (Computer) · GPA 2.61",
  },
  {
    period: "2020 — 2023",
    title: "Thai-German Pre-Engineering School",
    detail: "Certificate in Vocational Education (Pre-Engineering) · Electrical Engineering (English Program)",
  },
];
