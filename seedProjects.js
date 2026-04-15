const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const seedProjects = [
  {
    title: "Rudram — Multi Vendor E-commerce",
    description: "A modern, user-centric web application for shopping with clean design and seamless interactions.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1770055223/file_mt1exk.png",
    link: "#",
    category: "Web_Experience",
    tags: ["Web Development", "Responsive UI", "React", "Node.js", "MongoDB", "E-commerce"]
  },
  {
    title: "Multimall Pro – Multi-Vendor E-commerce Marketplace",
    description: "A responsive, modern multi-vendor online shopping platform with curated product deals, vendor onboarding, and seamless shopping experience.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1769789154/file_jarbhr.jpg",
    link: "#",
    category: "Web_Experience",
    tags: ["E-commerce", "Marketplace", "React", "Express", "MongoDB", "Stripe", "Tailwind CSS", "Admin Panel"]
  },
  {
    title: "Khuli Kitab",
    description: "Your Life, Your Stories, Your Khuli Kitab – A social storytelling platform for college students.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1756813731/file_abmnhr.png",
    link: "#",
    category: "Web_Experience",
    tags: ["Storytelling", "College App", "Social Platform", "React", "Firebase"]
  },
  {
    title: "NoirCart – by CyberLim",
    description: "A modern e-commerce platform with a sleek dark-themed UI and advanced product filtering.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1756811932/file_iunp0k.png",
    link: "#",
    category: "Web_Experience",
    tags: ["E-commerce", "NoirCart", "CyberLim", "React", "Next.js", "Stripe", "MongoDB"]
  },
  {
    title: "Maya Institute",
    description: "A modern college management website with full backend and admin panel for managing courses, faculty, and students.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1756804588/file_lztypl.jpg",
    link: "#",
    category: "Web_Experience",
    tags: ["College Website", "Admin Panel", "Fullstack", "React", "Node.js", "MongoDB"]
  },
  {
    title: "NeuroFit",
    description: "The Future of Startup Networking, Built for Visionaries. AI-powered networking and analytics platform.",
    imageUrl: "https://res.cloudinary.com/ds1wiqrdb/image/upload/v1754422284/mcdupmdfdg9cbjou3qqo_lzgf14.png",
    link: "#",
    category: "Web_Experience",
    tags: ["AI", "Startup", "SaaS", "Networking", "Analytics", "React", "Next.js", "OpenAI", "Firebase", "Tailwind"]
  },
  {
    title: "Nexa AI Neon – AI-Powered Web Interface",
    description: "Interactive AI application with cutting-edge model integration and intuitive user experience.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1770046393/file_qo34e2.png",
    link: "#",
    category: "Web_Experience",
    tags: ["AI Web App", "Chat Interface", "React/Next.js", "OpenAI", "Vercel", "Tailwind"]
  },
  {
    title: "FlavorVerse – Food Delivery & Culinary Exploration Web App",
    description: "A delicious online food platform showcasing menus, offers, and popular dishes with an engaging UI.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1769792668/file_utjddb.png",
    link: "#",
    category: "Web_Experience",
    tags: ["Food Delivery", "UI/UX", "Responsive Design", "React", "Node.js", "MongoDB"]
  },
  {
    title: "GoCart – Multi-Vendor E-commerce Marketplace",
    description: "A scalable, responsive multi-vendor online storefront built with modern web technologies.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1770052121/file_d0ysr5.png",
    link: "#",
    category: "Web_Experience",
    tags: ["E-commerce", "Marketplace", "Multi-Vendor", "React", "Express", "MongoDB"]
  },
  {
    title: "CivicConnect – Civic Issue Reporting & Tracking Platform",
    description: "Empower citizens to report issues, track resolutions, and improve community living.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1770045096/file_bq6dqk.png",
    link: "#",
    category: "Web_Experience",
    tags: ["Civic Tech", "Community Engagement", "React/Next.js", "Maps API", "Firebase", "Tailwind"]
  },
  {
    title: "FoodShare",
    description: "Reducing food waste while connecting communities through a smart food sharing platform.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1756803609/file_y81feo.jpg",
    link: "#",
    category: "Web_Experience",
    tags: ["Food Waste Reduction", "Sustainability", "Web App", "React", "Node.js", "MongoDB", "Google Maps"]
  },
  {
    title: "Project X – Next-Gen Web App (Custom Platform)",
    description: "A modern, responsive web application built with best practices and intuitive UI.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1770051432/file_nerwrf.png",
    link: "#",
    category: "Web_Experience",
    tags: ["Web Application", "React/Next.js", "Responsive Design", "Tailwind CSS", "Vercel", "MongoDB"]
  },
  {
    title: "NextStep – AI-Powered Tech Interview Prep Platform",
    description: "Ace your tech interviews with AI-driven practice and personalized feedback.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1770050577/file_ojwxkx.png",
    link: "#",
    category: "Web_Experience",
    tags: ["Interview Prep", "AI Learning", "Next.js", "OpenAI", "Firebase", "Tailwind", "EdTech"]
  },
  {
    title: "DreamDeploy – Student Project Development Platform",
    description: "Transform your final year project ideas into reality with expert development support.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1770047922/file_ppoznf.png",
    link: "#",
    category: "Web_Experience",
    tags: ["Student Services", "Project Development", "React/Next.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Course Hub – Online Learning & Courses Platform",
    description: "A modern web portal for exploring and enrolling in online courses with user authentication and course discovery.",
    imageUrl: "https://res.cloudinary.com/dnulc9ktv/image/upload/v1769802052/file_ypoe8w.jpg",
    link: "#",
    category: "Web_Experience",
    tags: ["E-learning", "Courses", "React/Next.js", "Authentication", "MongoDB", "Stripe"]
  }
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Project Seeding...');

    await Project.deleteMany();
    await Project.insertMany(seedProjects);

    console.log(`✅ ${seedProjects.length} Projects Imported successfully!`);
    process.exit();
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

importData();
