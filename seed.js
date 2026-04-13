const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();

const seedServices = [
  { 
      title: "Shopify eCommerce Development", 
      desc: "Build powerful, scalable, and conversion-optimized Shopify stores with custom designs and advanced integrations to grow your online business.", 
      bullets: ["Custom Shopify Theme", "Mobile-First Design", "Secure Payments"], 
      tags: ["Shopify", "Liquid", "HTML5", "CSS3"], 
      price: "₹15,000 - ₹70,000", 
      icon: "https://cdn-icons-png.flaticon.com/512/196/196566.png",
      isActive: true
  },
  { 
      title: "WordPress Website Development", 
      desc: "We create highly customized, responsive, and SEO-optimized WordPress websites tailored to your business needs — from blogs to corporate sites and eCommerce platforms.", 
      bullets: ["Responsive Design", "SEO-Friendly", "Custom Themes"], 
      tags: ["WordPress", "PHP", "MySQL", "HTML5"], 
      price: "₹15,000 - ₹60,000", 
      icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
      isActive: true
  },
  { 
      title: "UI/UX Design", 
      desc: "Stunning and user-friendly designs that focus on usability, aesthetics, and conversion.", 
      bullets: ["Wireframing", "Prototyping", "User flow mapping"], 
      tags: ["Figma", "Adobe XD", "Sketch", "Photoshop"], 
      price: "₹15,000 – ₹98,000", 
      icon: "https://cdn-icons-png.flaticon.com/512/3233/3233956.png",
      isActive: true
  },
  { 
      title: "App Development", 
      desc: "Full-featured web and mobile apps tailored to your business logic and user needs.", 
      bullets: ["Custom workflows", "Admin panel", "Payment integration"], 
      tags: ["MERN Stack", "Next.js", "Express", "MongoDB"], 
      price: "₹30,000 – ₹1,30,000", 
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920268.png",
      isActive: true
  },
  { 
      title: "Cloud Services", 
      desc: "Scalable and secure cloud infrastructure setup with optimized deployment pipelines.", 
      bullets: ["Cloud deployment", "CI/CD setup", "Auto-scaling"], 
      tags: ["AWS", "Google Cloud", "Firebase", "Docker"], 
      price: "₹30,000 – ₹1,10,000", 
      icon: "https://cdn-icons-png.flaticon.com/512/3855/3855660.png",
      isActive: true
  },
  { 
      title: "AI Solutions", 
      desc: "Smart AI-powered tools and systems tailored to automate tasks and enhance decision-making.", 
      bullets: ["AI chatbot integration", "Recommendation system", "Predictive analytics"], 
      tags: ["Python", "TensorFlow", "OpenAI API", "Node.js"], 
      price: "₹35,000 – ₹1,60,000", 
      icon: "https://cdn-icons-png.flaticon.com/512/2083/2083163.png",
      isActive: true
  },
  { 
      title: "Web Development", 
      desc: "Custom websites built to deliver high performance, responsiveness, and seamless user experience.", 
      bullets: ["Responsive design", "SEO optimization", "CMS integration"], 
      tags: ["HTML", "CSS", "JavaScript", "React"], 
      price: "₹20,000 – ₹1,00,000", 
      icon: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png",
      isActive: true
  }
];

const importData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for Seeding...');
        
        await Service.deleteMany(); // Clear existing
        await Service.insertMany(seedServices);
        
        console.log('Data Imported successfully');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

importData();
