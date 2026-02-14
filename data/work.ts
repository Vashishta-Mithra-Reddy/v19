type LogoConfig = {
  src: string;
  zoom?: number;
  fit?: "contain" | "cover";
};

type WorkItem = {
  slug: string;
  title: string;
  summary?: string;
  description?: string;
  logo?: string | LogoConfig | Array<string | LogoConfig>;
  screenshot?: string;
  gallery?: string[];
  links?: { site?: string; repo?: string };
  tech?: string[];
  status?: string;
  date?: string;
  highlights?: string[];
  roles?: string[];
  platform?: string;
  type?: 'personal' | 'agency';
};

export const works: WorkItem[] = [
  {
    slug: "hiresynq",
    title: "HireSynQ",
    summary: "Talent hiring and culture fit matching.",
    description: "A simple, transparent hiring flow that connects companies and candidates with the right cultural and role alignment, from discovery to final hire.",
    logo: "/logos/v19.png",
    screenshot: "/screenshots/webp/hiresynq.webp",
    links: { site: "https://hiresynq.vercel.app/" },
    type: "agency"
  },
  {
    slug: "rare-cocoa",
    title: "Rare Cocoa",
    summary: "Farm-to-bar chocolate brand.",
    description: "A handcrafted, preservative-free chocolate brand from Vijayawada, focused on pure cocoa, authentic flavors, and premium gifting experiences.",
    logo: "/logos/rarecocoa.png",
    screenshot: "/screenshots/webp/rarecocoa.webp",
    links: { site: "https://www.rarecocoa.in/" },
    type: "agency"
  },
  {
    slug: "socionova",
    title: "Socionova",
    summary: "SMM and Marketing Agency",
    description: "Socionova is a SMM and marketing agency that helps businesses grow their online presence and reach new audiences. We provide a range of services, including social media management, content creation, and digital marketing.",
    logo: "/logos/socionova.png", 
    screenshot: "/screenshots/webp/socionova.webp", 
    links: { site: "https://socionova.in/" },
    type: "agency",
    tech: ["Next.js"],
    roles: ["Agency Lead"]
  },
  {
    slug: "navi",
    title: "Navi (Project Apotheosis)",
    summary: "Built to manage my life",
    platform: "Agentic System",
    status: "Currently Building...",
    description: "A focused personal system to track goals, journal entries, habits, and daily routines for continuous self-improvement.",
    logo: { src: "/logos/navi.png", zoom: 1.2 },
    screenshot: "/screenshots/webp/navi_ai_dark.webp",
    links: { site: "https://navi.vashishtamithra.com/" }
  },
  {
    slug: "sift",
    title: "Sift (Active Recall Engine)",
    summary: "Makes Learning Easy",
    description: "Turn documents into precision-engineered quizzes with focused recall sessions and progress tracking that targets weak spots.",
    logo: { src: "/logos/sift.png", zoom: 1.2 },
    screenshot: "/screenshots/webp/sift_dark.webp",
    links: { site: "https://sift.v19.tech/" }
  },
  {
    slug: "karyakramah-au",
    title: "Kāryakramah AU",
    summary: "Campus events and venue bookings.",
    description: "A central hub for Anurag University student activities, event discovery, and venue booking to connect the campus community.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/au.webp",
    links: { site: "https://au.karyakramah.com/" }
  },
  {
    slug: "hita",
    title: "Hita",
    summary: "Wellness platform for a healthier you.",
    description: "AI-powered wellness platform to find clean, healthy products, remedies, and nutritional information. Powered by RAG and embeddings for accurate, context-aware answers to your health queries.",
    logo: "/logos/hita.png",
    screenshot: "/screenshots/webp/hita.webp",
    links: { site: "https://hita.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "RAG", "OpenAI API", "n8n", "PostgreSQL"],
    date: "2024-06-10",
    highlights: [
      "Context-aware AI health assistant",
      "Verified product database",
      "Holistic wellness remedies"
    ],
    roles: ["Product", "Frontend", "AI Integration"]
  },
  {
    slug: "contxt",
    title: "Contxt",
    summary: "RAG as a service.",
    description: "Plug and play your knowledge bases, manage embeddings, and retrieve intelligence instantly. A powerful RAG-as-a-Service platform designed for developers to integrate AI context seamlessly.",
    links: { site: "https://contxt.v19.tech/" },
    logo: "/logos/contxt.svg",
    screenshot: "/screenshots/webp/contxt.webp",
    // status: "Currently Building...",
    tech: ["Next.js", "Vector DB", "LLMs", "Drizzle ORM"],
    roles: ["Full Stack", "AI Engineer"]
  },
  {
    slug: "ahara",
    title: "Ahāra",
    summary: "Food diary and trigger analysis platform.",
    description: "Track how stuff affects you. A food diary and trigger analysis platform helping you discover patterns between your diet and your health/mood.",
    logo: "/logos/ahara.svg",
    screenshot: "/screenshots/webp/ahara.webp",
    links: { site: "https://ahara.v19.tech/" },
    status: "Still in build...",
    platform: "Native & Web",
    tech: ["React Native", "Next.js", "TypeScript", "Expo", "Supabase", "Drizzle ORM"],
    roles: ["Full Stack", "Mobile"]
  },
  {
    slug: "citadel",
    title: "Citadel",
    summary: "Password manager",
    description: "A secure, minimal password manager built with modern web crypto and a clean UI. Features zero-knowledge encryption to ensure your data remains truly yours.",
    logo: "/logos/citadel.png",
    screenshot: "/screenshots/webp/citadel.webp",
    links: { site: "https://citadel.v19.tech/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Crypto API", "Radix UI"],
    date: "2024-08-01",
    type: "agency",
    highlights: [
      "Zero-knowledge encryption",
      "Responsive UI with buttery micro-interactions",
      "Client-side cryptography"
    ],
    roles: ["Design", "Frontend", "Backend"]
  },
  {
    slug: "saransha",
    title: "Saransha",
    summary: "Social content insights",
    description: "Extract insights from social content. Transcribes reels and provides clean summaries for quick consumption, helping you get the gist without the scroll.",
    logo: "/logos/v19.png",
    screenshot: "/screenshots/webp/saransha.webp",
    links: { site: "https://saransha.vercel.app/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Whisper API", "FFmpeg"],
    date: "2024-07-01",
    highlights: ["Fast transcript rendering", "Concise AI summaries"],
    roles: ["Frontend", "AI Integration"]
  },
  {
    slug: "why-kerala",
    title: "Why Kerala?",
    summary: "Built to convince my friends.",
    description: "An interactive trip planner designed to convince friends to visit Kerala. Showcases destinations, routes, food, and culture in an engaging, scrollable format.",
    logo: "/logos/whykerala.png",
    screenshot: "/screenshots/webp/whykerala.webp",
    links: { site: "https://whykerala.v19.tech/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Maps API"],
    date: "2023-11-01",
    highlights: ["Interactive route planning", "Immersive storytelling", "Cultural showcase"],
    roles: ["Design", "Frontend"]
  },
  {
    slug: "the-baga-village",
    title: "The Baga Village",
    summary: "Premium hotel collection",
    description: "Experience luxury and comfort at The Baga Village, a premium hotel collection in Goa. A high-conversion booking website showcasing properties with a coastal charm.",
    logo: "/logos/tbv.png",
    screenshot: "/screenshots/webp/thebagavillage.webp",
    links: { site: "https://bagavillage.vercel.app/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2023-08-15",
    type: "agency",
    highlights: ["High-conversion landing page", "Property showcase", "Seamless booking flow"],
    roles: ["Frontend", "Designer"]
  },
  {
    slug: "nidhi",
    title: "Nidhi",
    summary: "Decentralized fundraising",
    description: "Empowering startups with decentralized funding. Leverage blockchain-powered smart contracts for transparent funding, gain token incentives, and connect with expert mentors.",
    logo: "/logos/nidhi.png",
    screenshot: "/screenshots/webp/nidhi.webp",
    links: { site: "https://nidhi.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Web3", "Smart Contracts", "Solidity", "ThirdWeb"],
    date: "2024-01-20",
    highlights: ["Smart contract integration", "Transparent fund tracking", "Token incentives"],
    roles: ["Frontend", "Web3 Integration"]
  },
  {
    slug: "vikraya",
    title: "Vikraya",
    summary: "Blockchain crop auction",
    description: "Your premier platform for agricultural auctions. A transparent bidding system for farmers to sell crops directly to buyers, ensuring fair prices through blockchain technology.",
    logo: "/logos/vikraya.png",
    screenshot: "/screenshots/webp/vikraya.webp",
    links: { site: "https://vikraya.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Blockchain", "Solidity", "Ethers.js"],
    date: "2024-02-14",
    highlights: ["Real-time bidding", "Farmer-centric UI", "Transparent ledger"],
    roles: ["Frontend", "Design"]
  },
  {
    slug: "lost-escapes",
    title: "Lost Escapes",
    summary: "Boutique travel booking",
    description: "Boutique Experiential Getaways. Discover unique experiences, exclusive destinations, and sustainable travel options with a high-end visual design.",
    logo: "/logos/lostescapes.jpg",
    screenshot: "/screenshots/webp/lostescapes.webp",
    links: { site: "https://lostescapes.com/" },
    type: "agency",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2023-07-01",
    highlights: ["Luxury travel aesthetics", "Destination storytelling", "Conversion optimization"],
    roles: ["Frontend", "Designer"]
  },
  {
    slug: "rohtang-apiary",
    title: "Rohtang Apiary",
    summary: "Himalayan bee farm",
    description: "Pure Himalayan Honey. A clean, informative site for a sustainable bee farm, showcasing the story of the Himalayan honey bee and their products.",
    logo: "/logos/rohtang_apiary.png",
    screenshot: "/screenshots/webp/rohtangapiary.webp",
    links: { site: "https://www.rohtangapiary.com/" },
    type: "agency",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2023-05-20",
    highlights: ["Story-driven layout", "Product showcase", "Educational content"],
    roles: ["Frontend"]
  },
  // {
  //   slug: "doppleganger",
  //   title: "Doppleganger",
  //   summary: "Interest-based matching",
  //   description: "Find Your Doppelgänger! Connect with people who share your passions, interests, and quirks. Real-time chat matching based on shared interests.",
  //   logo: "/logos/doppleganger.png",
  //   screenshot: "/screenshots/webp/doppleganger.webp",
  //   links: { site: "https://xdoppleganger.vercel.app" },
  //   tech: ["Next.js", "TypeScript", "Socket.io", "Node.js", "Express", "Redis"],
  //   date: "2022-12-18",
  //   highlights: ["Real-time chat", "Interest matching algorithm", "Global community"],
  //   roles: ["Frontend", "Backend"]
  // },
  {
    slug: "infernia",
    title: "Infernia",
    summary: "Personal vault & tracker",
    description: "Dragon's Realm. A personal vault with diary and diet tracking features. Unleash your inner warrior with a gamified approach to personal tracking.",
    logo: "/logos/infernia.png",
    screenshot: "/screenshots/webp/infernia.webp",
    links: { site: "https://infernia.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    date: "2024-03-08",
    highlights: ["Personal data visualization", "Secure diary", "Gamified UI"],
    roles: ["Frontend"]
  },
  {
    slug: "ishta",
    title: "Ishta.",
    summary: "Personal identity showcase",
    description: "All About You & Your Favourite Things. A platform to share your whole vibe, favorites, and express yourself with elegant typography and minimal layouts.",
    logo: "/logos/ishta.png",
    screenshot: "/screenshots/webp/ishta.webp",
    links: { site: "https://ishta.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2024-04-11",
    highlights: ["Minimalist design", "Personal branding", "Dynamic layouts"],
    roles: ["Frontend", "Designer"]
  },
  {
    slug: "white-waters",
    title: "White Waters",
    summary: "Adventure sports booking",
    description: "Experience the thrill of kayaking, rafting, and mountain expeditions. A booking platform for adventure sports with bold visuals and comprehensive course details.",
    logo: "/logos/white_waters_v5.png",
    screenshot: "/screenshots/webp/whitewaters.webp",
    links: { site: "https://whitewaters.vercel.app" },
    type: "agency",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2023-09-28",
    highlights: ["Adventure imagery", "Course booking system", "Interactive gallery"],
    roles: ["Frontend"]
  },
  {
    slug: "karyakramah",
    title: "Kāryakramah",
    summary: "Venue booking SaaS",
    description: "Find and Book Perfect Venues. A comprehensive SaaS for venue discovery and booking, featuring real-time availability and extensive directories.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/karyakramah.webp",
    links: { site: "https://karyakramah.v19.tech" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "2024-05-21",
    highlights: ["Real-time availability", "Multi-vendor platform", "Advanced search"],
    roles: ["Frontend", "Designer", "Architecture"]
  },
  {
    slug: "kanri",
    title: "Kanri",
    summary: "Venue management admin",
    description: "The powerful backend for Kāryakramah. Helps venue owners manage venues, update availability, and handle bookings with role-based access control.",
    logo: "/logos/karyakramah.png",
    screenshot: "/screenshots/webp/kanri.webp",
    links: { site: "https://kanri.v19.tech/" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    date: "2024-06-02",
    highlights: ["Admin dashboard", "Booking management", "Role-based security"],
    roles: ["Frontend", "System Design"]
  },
  // {
  //   slug: "kaizen",
  //   title: "Kaizen",
  //   summary: "Gamified Android fitness",
  //   description: "Android app with gamified fitness tracking. Makes working out fun by adding game mechanics to your daily fitness routine.",
  //   logo: "/logos/kaizen.png",
  //   links: { site: "https://www.vashishtamithra.com/" },
  //   tech: ["Android", "Kotlin", "Firebase", "Jetpack Compose", "Room"],
  //   status: "Archive",
  //   date: "2022-08-10",
  //   highlights: ["Gamification mechanics", "Native Android UI", "Real-time tracking"],
  //   roles: ["Mobile Development"]
  // },
  // {
  //   slug: "krushi",
  //   title: "Krushi",
  //   summary: "IoT soil & animal monitoring",
  //   description: "IoT system for agriculture monitoring. Integrates sensors for soil health and animal tracking with cloud data ingestion for real-time insights.",
  //   logo: "/logos/krushi.png",
  //   links: { repo: "https://github.com/Vashishta-Mithra-Reddy/Agro_T" },
  //   tech: ["IoT", "Embedded C", "Cloud Computing", "MQTT", "Arduino", "DHT Sensors"],
  //   status: "Archive",
  //   date: "2021-11-20",
  //   highlights: ["Hardware-software integration", "Real-time sensor data", "Cloud dashboard"],
  //   roles: ["Hardware", "Backend"]
  // }
];

export function getWorkList(): WorkItem[] {
  return works;
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return works.find((w) => w.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return works.map((w) => w.slug);
}
