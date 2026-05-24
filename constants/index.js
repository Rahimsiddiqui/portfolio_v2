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
  { value: 200, suffix: "+", label: "Coffees Drank" },
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
      "A pixel-perfect recreation of Apple’s MacBook landing page built with React and Tailwind CSS, focusing on clean layout structure, refined typography, and Apple’s minimalist design language. It features smooth, subtle animations and responsive design to ensure a consistent experience across all devices, while maintaining strong visual hierarchy and product-focused storytelling.",
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
      "A full-stack, serverless web application built with Next.js, where bespoke strategies transform financial analysis into a visual and intuitive experience. It focuses on presenting complex financial insights with precision and clarity through a clean, modern UI, emphasizing structured data flow, performance, and scalable architecture while maintaining a smooth and professional user experience.",
    allRounder: "financialatelier",
    technologies: ["React", "Node.js", "Serverless", "MongoDB", "Tailwind"],
  },
  {
    title: "Qubli AI",
    description:
      "A comprehensive AI-powered learning platform featuring interactive quizzes, smart flashcards, and an AI chatbot for real-time assistance. Qubli AI enhances learning through adaptive questioning, spaced repetition, and personalized feedback, while also offering review and performance tracking tools to help users strengthen understanding and retain knowledge effectively.",
    allRounder: "qubli-ai",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    title: "Olivia",
    description:
      "A modern, minimal note-taking application designed for distraction-free writing and efficient organization of ideas. Olivia focuses on a clean and intuitive interface with fast search, seamless note management, and shareable links for easy access across devices, ensuring a smooth and productive writing experience.",
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
      "A sleek, minimal speech-to-text web application built for fast and accurate real-time transcription, offering a distraction-free interface for effortless voice capture. Expresso leverages the Web Speech API to convert speech into text instantly, with smooth responsiveness, simple note handling, and a clean productivity-focused design for quick idea logging and seamless writing flow.",
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
      "A modern, responsive task management application designed for fast and efficient productivity, allowing users to create, organize, and track tasks with ease. Nexus focuses on a clean and intuitive interface with smooth interactions, persistent local storage, and a streamlined workflow that helps users stay organized and productive without unnecessary complexity.",
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
    tags: ["3D Web", "Three.js", "React", "Performance"],
    image: "/images/cocktail-landing.png",
    link: "25fb0f9c-277a-4acd-8876-67c8881ebbe5",
    featured: true,
    content: `
      <p>The web is evolving beyond flat surfaces. With tools like React Three Fiber (R3F), developers can now build high-performance 3D experiences that run smoothly in the browser. But creating a truly immersive experience isn't just about dropping a 3D model into a scene—it's about lighting, orchestration, and performance optimization.</p>

      <h3>1. The Foundation: Scene Orchestration</h3>
      <p>Before adding complex models, you must understand the scene graph. In R3F, your components are part of a reactive tree. This means state changes in React directly affect your 3D objects. Utilizing hooks like <code>useFrame</code> allows you to create frame-by-frame animations, essential for interactive elements.</p>

      <p>Camera movement also plays a massive role in immersion. Subtle motion tied to cursor position, scroll progress, or user interaction can make a static scene feel alive. Combining camera rigs with smooth lerping techniques creates cinematic transitions without sacrificing performance.</p>

      <p>Structuring your scene properly is equally important. Grouping meshes, separating reusable components, and keeping logic modular helps maintain scalability as your application grows. Clean scene architecture prevents unnecessary re-renders and improves maintainability.</p>

      <h3>2. Optimizing Assets</h3>
      <p>3D models can be heavy. Using GLTF-pipeline or tools like gltf.report to compress your models into Draco-compressed GLB files is critical for performance. Always aim for lower polygon counts and efficient texture usage to keep load times minimal.</p>

      <p>Texture optimization is often overlooked. Large 4K textures may look impressive, but they can destroy mobile performance. Using compressed texture formats like KTX2 and reducing unnecessary texture maps can significantly improve rendering efficiency.</p>

      <p>Lazy loading assets is another important strategy. Instead of loading the entire experience upfront, dynamically load models and textures only when needed. Suspense boundaries in React help create smooth loading flows while keeping the initial bundle lightweight.</p>

      <p>Instancing is also essential when rendering repeated objects such as particles, stars, grass, or buildings. Instead of creating hundreds of separate meshes, instanced rendering allows the GPU to efficiently handle thousands of objects with minimal overhead.</p>

      <h3>3. Lighting and Atmosphere</h3>
      <p>Lighting is the soul of 3D. Moving beyond simple point lights to environment maps and post-processing effects like Bloom and Depth of Field can elevate a project from "basic" to "professional".</p>

      <p>HDRI environments help create realistic reflections and natural ambient lighting. Pairing HDRIs with physically based materials produces far more believable scenes than traditional lighting setups alone.</p>

      <p>Fog, volumetric lighting, and subtle color grading can dramatically improve atmosphere. Small environmental effects make scenes feel deeper and more cinematic, especially in portfolio websites or interactive storytelling projects.</p>

      <p>Shadows also deserve careful attention. High-resolution shadows can quickly become expensive, so balancing quality with performance is important. Techniques like baked lighting and contact shadows can preserve realism while maintaining high frame rates.</p>

      <h3>4. Interactivity and User Experience</h3>
      <p>A successful 3D experience is not just visually impressive—it must feel responsive. Interactive hover states, physics-based movement, and smooth transitions help users feel connected to the environment.</p>

      <p>Gesture controls and scroll-driven animations are increasingly popular in modern web experiences. Libraries like Framer Motion combined with R3F create seamless interactions between traditional UI and 3D content.</p>

      <p>Accessibility should also be considered. Users on low-end devices or slower networks should still receive a functional experience. Providing fallback UIs, reducing visual complexity dynamically, and respecting reduced motion preferences can improve usability for everyone.</p>

      <h3>5. Performance Monitoring</h3>
      <p>Optimization is an ongoing process. Monitoring frame rate, memory usage, and render calls helps identify bottlenecks before they become major issues. Tools like Drei's <code>Perf</code> component or browser profiling utilities are extremely useful during development.</p>

      <p>Reducing unnecessary state updates, minimizing shader complexity, and avoiding expensive calculations inside animation loops can significantly improve performance. Even small inefficiencies become noticeable in real-time 3D applications.</p>

      <p>Modern web GPUs are powerful, but efficient engineering remains critical. The best 3D web experiences balance visual fidelity with responsiveness, ensuring users enjoy smooth interactions across both desktop and mobile devices.</p>

      <h3>6. The Future of 3D on the Web</h3>
      <p>As WebGPU continues to mature, browser-based graphics will become even more advanced. Developers will gain access to lower-level GPU capabilities, enabling richer visual effects and improved rendering performance.</p>

      <p>The future of the web is increasingly interactive, immersive, and spatial. Developers who understand performance, lighting, animation, and user experience today are positioning themselves at the forefront of the next generation of web development.</p>
    `,
  },
  {
    title:
      "Next.js & GSAP: Professional Animations with the App Router and React Hooks",
    excerpt:
      "A deep dive into orchestration, ScrollTrigger, and SplitText for high-performance web animations.",
    date: "May 10, 2026",
    category: "Web Dev",
    tags: ["Web Dev", "GSAP", "Next.js", "Animations"],
    image: "/images/macbook-14.png",
    link: "61123ba7-4319-4f46-a514-32e4937790f3",
    featured: true,
    content: `
      <p>GSAP remains the industry standard for web animations. When combined with Next.js and React 19, it provides unparalleled control over the user experience. However, the App Router introduces new patterns for initialization and cleanup that every developer should master.</p>

      <p>One of the most important mental shifts is understanding that animations are no longer “one-time effects.” In modern React applications, components mount, unmount, and rehydrate frequently. This means animation lifecycles must be tightly controlled to prevent memory leaks, duplicated tweens, or inconsistent states across route changes.</p>

      <p>Performance also becomes a core concern. GSAP is highly optimized, but poor structure—like reinitializing timelines on every render—can quickly degrade frame rates. Proper dependency management in hooks ensures animations only run when necessary.</p>

      <h3>Using useGSAP Hook</h3>
      <p>The official <code>@gsap/react</code> package provides the <code>useGSAP</code> hook, which handles scoping and automatic cleanup—solving the common "ghost animation" issue in React development.</p>

      <p>This hook ensures animations are automatically reverted when components unmount, eliminating the need for manual cleanup in most cases. It also provides a scoped selector system, meaning animations only target elements inside a specific container instead of the entire DOM.</p>

      <p>Another advantage is predictable re-execution. When dependencies change, <code>useGSAP</code> can safely re-run animations without stacking previous timelines, which is a common issue when using raw <code>useEffect</code> with GSAP.</p>

      <div class="blog-code-block">
        <code>useGSAP(() => { gsap.to(".box", { x: 100 }); }, { scope: container });</code>
      </div>

      <p>In more advanced setups, you can combine <code>useGSAP</code> with timelines to orchestrate multi-step animations. This allows precise control over sequencing, easing, and synchronization between UI elements.</p>

      <h3>Mastering ScrollTrigger</h3>
      <p>ScrollTrigger allows you to create complex parallax effects and scroll-bound animations. The key is to ensure triggers are properly refreshed when the page layout changes, especially in dynamic Next.js routes.</p>

      <p>A common mistake is initializing ScrollTrigger before the DOM is fully painted. This leads to incorrect trigger positions and broken activation points. Using lifecycle-safe initialization patterns or layout-ready hooks prevents these inconsistencies.</p>

      <p>Another powerful feature is <code>ScrollTrigger.refresh()</code>, which recalculates all trigger positions after images load, fonts render, or layout shifts occur. This is essential for responsive and content-heavy pages.</p>

      <p>For advanced interactions, ScrollTrigger can be paired with pinned sections, scrubbed animations, and snap behavior. These techniques allow developers to build cinematic scrolling experiences where content feels physically connected to scroll movement rather than simply appearing on screen.</p>
    `,
  },
  {
    title: "Modern UI Patterns with Tailwind CSS v4",
    excerpt:
      "Exploring the new OKLCH color system and JIT engine improvements in the latest Tailwind release.",
    date: "May 05, 2026",
    category: "Design",
    tags: ["Design", "Tailwind CSS", "UI/UX", "CSS"],
    image: "/images/financialatelier.png",
    link: "507b6dbc-6671-4359-8daa-817ab52a99ec",
    featured: false,
    content: `
      <p>Tailwind CSS v4 is a significant leap forward. By moving configuration into CSS and adopting the lightning-fast Rust engine, it streamlines the development workflow like never before.</p>

      <h3>The OKLCH Color System</h3>
      <p>One of the most exciting features is the native support for OKLCH colors. Unlike RGB or HEX, OKLCH provides consistent perceptual lightness, making it much easier to create accessible and beautiful color scales.</p>

      <h3>Zero-Config Plugins</h3>
      <p>Many features that previously required plugins or complex configurations are now built-in, allowing for a "CSS-first" approach to utility-first styling.</p>
    `,
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
