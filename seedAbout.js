require('dotenv').config();
const mongoose = require('mongoose');
const About = require('./models/About');
const connectDB = require('./db');

const aboutData = {
  heroTitle: "Redefining Innovation in the Digital Era",
  heroSubtitle: "Nodezet is a premier IT consulting and services firm dedicated to empowering businesses through cutting-edge technology and strategic innovation. We bridge the gap between complex engineering and elegant user experiences.",
  mission: "Our mission is to empower global enterprises by delivering high-performance, secure, and scalable digital solutions that drive sustainable growth and competitive advantage.",
  vision: "To become the world's most trusted partner for digital transformation, recognized for our relentless pursuit of engineering excellence and human-centric design.",
  stats: [
    { label: "Elite Engineers", value: "35+" },
    { label: "Successful Projects", value: "120+" },
    { label: "Retention Rate", value: "98%" },
    { label: "Support", value: "24/7" }
  ],
  team: [
    { 
      name: "Alex Mercer", 
      role: "Chief Technology Officer", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", 
      specialization: "Distributed Systems & Cloud Architecture" 
    },
    { 
      name: "Sarah Chen", 
      role: "Head of AI & Data Science", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", 
      specialization: "Predictive Analytics & LLM Training" 
    },
    { 
      name: "David Thorne", 
      role: "Director of UX Design", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop", 
      specialization: "Design Systems & Human Computer Interaction" 
    }
  ]
};

const seedAbout = async () => {
  try {
    await connectDB();
    await About.deleteMany();
    await About.create(aboutData);
    console.log('Successfully seeded professional About Us content!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedAbout();
