const mongoose = require('mongoose');
const About = require('./models/About'); // I need to verify if this model exists
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/nodezet";

const seedData = {
  heroTitle: "Nodezet Architecture",
  heroSubtitle: "We are a collective of elite engineers, designers, and systems architects dedicated to forging the next generation of digital infrastructure. At Nodezet, we build what's next.",
  mission: "To empower businesses globally through flawlessly executed technology endpoints. We believe in high performance, surgical precision, and constantly pushing the boundaries of what is possible on the modern web.",
  vision: "Becoming the unified, definitive standard for enterprise-grade web applications, dynamic user interfaces, and high-fidelity intelligent AI integrations.",
  stats: [
    { label: "Elite Engineers", value: "25+" },
    { label: "Successful Deployments", value: "100+" },
    { label: "Global Partners", value: "40+" },
    { label: "Security Updates", value: "24/7" }
  ],
  team: [
    { 
      name: "Yogesh Sengar", 
      role: "Founder & CEO", 
      specialization: "Strategic Leadership & System Architecture", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" // Professional Indian male
    },
    { 
      name: "Arjun Sharma", 
      role: "Chief Technical Officer", 
      specialization: "Enterprise Backend & Distributed Systems", 
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop" // Indian tech professional
    },
    { 
      name: "Priya Patel", 
      role: "Head of UI/UX Design", 
      specialization: "Human-Centric Design & Digital Branding", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" // Indian female tech leader
    },
    { 
      name: "Rohan Gupta", 
      role: "Senior Full Stack Developer", 
      specialization: "Scalable Web Apps & API Orchestration", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" // Professional Indian male
    },
    { 
      name: "Ananya Iyer", 
      role: "AI Research Lead", 
      specialization: "Large Language Models & Predictive Analytics", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" // Indian female AI researcher
    },
    { 
      name: "Vikram Singh", 
      role: "Cloud Infrastructure Manager", 
      specialization: "DevOps Automation & Security Hardening", 
      image: "https://images.unsplash.com/photo-1506794778242-92df5ffd8ad2?q=80&w=400&auto=format&fit=crop" // Indian IT professional
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
