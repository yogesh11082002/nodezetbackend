const mongoose = require('mongoose');
const About = require('./models/About'); // I need to verify if this model exists
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/nodezet";

const seedData = {
  heroTitle: "Nodezet Solutions Architecture",
  heroSubtitle: "We are a collective of elite engineers, designers, and systems architects dedicated to forging the next generation of digital infrastructure. At Nodezet, we build what's next.",
  mission: "To empower businesses globally through flawlessly executed technology endpoints. We believe in high performance, surgical precision, and constantly pushing the boundaries of what is possible on the modern web.",
  vision: "Becoming the unified, definitive standard for enterprise-grade web applications, dynamic user interfaces, and high-fidelity intelligent AI integrations.",
  stats: [
    { label: "Core Experts", value: "6" },
    { label: "Successful Deployments", value: "15" },
    { label: "Active Clients", value: "10+" },
    { label: "Security Updates", value: "24/7" }
  ],
  team: [
    {
      name: "Yogesh Sengar",
      role: "Founder & CEO",
      image: "https://res.cloudinary.com/dskemjnc2/image/upload/v1781690155/nodezet_blog/bd5unrmhfi6fadoei8kl.png",
      specialization: "Strategic Leadership & System Architecture"
    },
    {
      name: "Tarun Gautam",
      role: "Co-Founder & Chief Technology Officer (CTO)",
      image: "https://res.cloudinary.com/dskemjnc2/image/upload/v1781690172/nodezet_blog/jizkv7gycsblmxe6h03j.jpg",
      specialization: "Scalable Backend Architecture, Cloud Infrastructure & Distributed Systems"
    },
    {
      name: "Sanya Bhatia",
      role: "Manager",
      image: "https://res.cloudinary.com/dskemjnc2/image/upload/v1781690266/nodezet_blog/fmf0dxm0wu7oto9sxmon.jpg",
      specialization: "Project Coordination, Team Management & Client Success"
    },
    {
      name: "Anzal Shaikh",
      role: "Senior Full Stack Developer",
      image: "https://res.cloudinary.com/dskemjnc2/image/upload/v1781691096/nodezet_blog/tgudcchmctfme0gusnla.png",
      specialization: "Scalable Web Apps & API Orchestration"
    },
    {
      name: "Tripti Singh",
      role: "Head of UI/UX & Product Design",
      image: "https://res.cloudinary.com/dskemjnc2/image/upload/v1781691052/nodezet_blog/ppumvwk1aykk6c5xgscf.png",
      specialization: "User Experience Design, Design Systems & Product Innovation"
    },
    {
      name: "Vikram Singh",
      role: "Cloud Infrastructure Manager",
      image: "https://res.cloudinary.com/dskemjnc2/image/upload/v1781691059/nodezet_blog/uzfpaevcjexfhlc1xf4n.png",
      specialization: "DevOps Automation & Security Hardening"
    }
  ]
};

const seedDB = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB for About seeding...");
  
  await About.deleteMany({});
  await About.create(seedData);
  
  console.log("About Seeding successful! Team members with proper Indian professional images are now live.");
  process.exit();
};

seedDB().catch(err => {
  console.error("About Seeding failed:", err);
  process.exit(1);
});
