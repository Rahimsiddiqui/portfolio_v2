const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
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

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Rahim. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Rahim was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
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
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Rahim’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
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
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
