const navLinks = [
  {
    name: "Work",
    link: "/#work",
  },
  {
    name: "Experience",
    link: "/#experience",
  },
  {
    name: "Skills",
    link: "/#skills",
  },
  {
    name: "Testimonials",
    link: "/#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 11, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Coffees Drank" },
  { value: 94, suffix: "%", label: "On-time Delivery Rate" },
];

const projects = [
  {
    title: "Mojito | Masterpiece made from GSAP and Next.js",
    description:
      "Mojito is a sleek web project showcasing a modern cocktail-themed interface with smooth GSAP animations and interactive UI elements built using Next.js. It focuses on clean design, fluid transitions, and an engaging user experience.",
    allRounder: "cocktail-landing",
    link: "coctail-landing",
    technologies: ["React", "GSAP", "Next.js", "Tailwind", "React Responsive"],
  },
  {
    title: "Macbook Landing Page",
    description:
      "A recreation of Apple's Macbook landing page, built with React and Tailwind for pixel-perfect design and smooth animations.",
    allRounder: "macbook-14",
    technologies: [
      "React",
      "GSAP",
      "Three.js",
      "Tailwind",
      "Next.js",
      "React Responsive",
    ],
  },
  {
    title: "Financial Atelier",
    description:
      "A web app where bespoke strategies turn finance into art with precision and insight.",
    allRounder: "financialatelier",
    technologies: ["React", "Node.js", "Serverless", "MongoDB", "Tailwind"],
  },
  {
    title: "Qubli AI",
    description:
      "A comprehensive AI-driven platform for automated performance reviews and developer insights.",
    allRounder: "qubli-ai",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "Olivia",
    description:
      "A modern and minimal note-taking application built for distraction-free writing, organized note management, and seamless accessibility with search and shareable links.",
    allRounder: "olivia",
    link: "rahim-olivia",
    technologies: [
      "React",
      "Localstorage",
      "Next.js",
      "Tailwind",
      "Context API",
    ],
  },
  {
    title: "Expresso",
    description:
      "A sleek and minimal speech-to-text web app designed for quick real-time transcription, a clean distraction-free experience, and smooth, responsive voice input for effortless note capture.",
    allRounder: "expresso",
    link: "rahim-expresso",
    technologies: [
      "React",
      "Localstorage",
      "Next.js",
      "Tailwind",
      "Context API",
      "Web Speech API",
    ],
  },
  {
    title: "Nexus",
    description:
      "A modern and responsive todo application built for fast task management, seamless productivity, and smooth user interactions.",
    allRounder: "todo-app",
    link: "rahim-todo-app",
    technologies: ["React", "Localstorage", "Next.js", "Tailwind"],
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    description:
      "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    description:
      "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    description:
      "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const mainTechStackIcons = [
  {
    name: "MongoDB",
    modelPath: "/models/mongodb.glb",
    scale: 52,
    rotation: [0, 0, 0],
  },
  {
    name: "Express",
    modelPath: "/models/express.glb",
    scale: 1.1,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.9,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 4.5,
    rotation: [0, -Math.PI / 2, 0],
  },
];

const miscTechStackIcons = [
  {
    name: "Three.js",
    modelPath: "/models/threejs.glb",
    scale: 0.035,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git.glb",
    scale: 0.035,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Tailwind CSS",
    modelPath: "/models/tailwindcss.glb",
    scale: 42,
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    name: "Lucide React",
    modelPath: "/models/lucide-react.glb",
    scale: 1.3,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "Shadcn/ui",
    modelPath: "/models/shadcn.glb",
    scale: 0.9,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "SCSS",
    modelPath: "/models/scss.glb",
    scale: 0.9,
    rotation: [Math.PI / 2, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Working with Rahim was a great experience. He delivered everything on time, paid attention to every detail, and built a polished full-stack product that exceeded expectations.",
    imgPath: "/images/fiverr.png",
    logoPath: "/images/fiverr.png",
    title: "Full-Stack Developer",
    date: "May 2026 - Present",
    responsibilities: [
      "Delivered full-stack web applications from concept to deployment for multiple client projects.",
      "Built scalable frontend and backend systems using modern full-stack technologies.",
      "Developed high-performance, responsive, and user-focused web applications.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
];

const testimonials = [
  {
    name: "Haris Siddiqui",
    mentions: "@harissiddiqui",
    review:
      "Rahim is a highly talented and promising young developer with strong problem-solving skills and great potential. He consistently shows creativity, focus, and a solid understanding of web development, making him someone with a very bright future ahead.",
    imgPath: "/images/haris.jpg",
  },
  {
    name: "Arham Siddiqui",
    mentions: "@arhamsiddiqui",
    review:
      "Rahim is a highly talented developer with great attention to detail and strong web development skills. He consistently produces clean, modern work and has a very bright future ahead.",
    imgPath: "/images/arham.jpg",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Rahim was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rahim's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rahim is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Rahim was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Zayan Siddiqui",
    mentions: "@zayansiddiqui",
    review:
      "I've rarely come across someone Rahim's age with such a mature grasp of modern web development. At just 14, he's already working confidently across the full MERN stack. I have no doubt he'll be an exceptional talent in this industry.",
    imgPath: "/images/zayan.jpg",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Rahim was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/instagram.svg",
    url: "https://instagram.com/rahim_sid09",
  },
  {
    name: "Mail",
    imgPath: "/images/mail.svg",
    url: "mailto:rahimsiddiqui122@gmail.com",
  },
  {
    name: "x",
    imgPath: "/images/twitter.svg",
    url: "https://x.com/rahimdeveloper",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.svg",
    url: "https://www.linkedin.com/in/rahimdeveloper",
  },
];

const blogCategories = ["All", "Web Dev", "3D Web", "Design", "Tips"];

const blogPosts = [
  {
    title: "Building Immersive 3D Experiences with React Three Fiber",
    excerpt:
      "Learn how to integrate complex 3D models and shaders into your React applications for maximum impact.",
    date: "May 15, 2026",
    category: "3D Web",
    image: "/images/cocktail-landing.png",
    link: "25fb0f9c-277a-4acd-8876-67c8881ebbe5",
    featured: true,
  },
  {
    title:
      "Next.js & GSAP: Professional Animations with the App Router and React Hooks",
    excerpt:
      "A deep dive into orchestration, ScrollTrigger, and SplitText for high-performance web animations.",
    date: "May 10, 2026",
    category: "Web Dev",
    image: "/images/macbook-14.png",
    link: "61123ba7-4319-4f46-a514-32e4937790f3",
    featured: true,
  },
  {
    title: "Modern UI Patterns with Tailwind CSS v4",
    excerpt:
      "Exploring the new OKLCH color system and JIT engine improvements in the latest Tailwind release.",
    date: "May 05, 2026",
    category: "Design",
    image: "/images/financialatelier.png",
    link: "507b6dbc-6671-4359-8daa-817ab52a99ec",
    featured: false,
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  mainTechStackIcons,
  miscTechStackIcons,
  navLinks,
  projects,
  blogPosts,
  blogCategories,
};
