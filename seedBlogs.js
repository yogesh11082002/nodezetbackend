const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/nodezet";

const seedBlogs = [
  {
    title: "Edge Computing: Minimizing Latency for Global Platforms",
    slug: "edge-computing-latency",
    category: "Cloud Engineering",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2>The Shift to the Edge</h2>
      <p>In 2026, the performance of a web application is no longer measured by the raw power of the central server, but by the physical proximity of data to the end user. Edge computing has transitioned from a niche optimization to a mandatory architectural requirement for enterprise-grade platforms.</p>
      
      <h3>Why Latency is the Ultimate Metric</h3>
      <p>Even a 100ms delay in interaction can lead to a 7% drop in conversion for high-frequency trading or e-commerce platforms. At Nodezet, we utilize decentralized computing nodes to process logic closer to the user, effectively bypassing the bottlenecks of traditional centralized data centers.</p>
      
      <blockquote>
        "Our data suggests that architectures utilizing Edge processing see a 40% improvement in perceived responsiveness."
      </blockquote>

      <h3>Scaling for the Next Billion Users</h3>
      <p>As digital adoption scales across emerging markets, the infrastructure must be resilient enough to handle fluctuating connectivity. Our deployments utilize redundant Vercel and AWS Edge functions to ensure that even in the event of a regional outage, the application remains fully functional and snappy.</p>
    `,
    isPublished: true
  },
  {
    title: "SaaS Design Systems: Scaling UI for Complex Operations",
    slug: "saas-design-systems",
    category: "UI/UX Architecture",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2>Beyond the Aesthetic</h2>
      <p>A design system for an enterprise SaaS platform is not just a collection of buttons and colors; it is a shared language between engineering and design. It is the structural framework that allows a platform to scale from five screens to five hundred without increasing cognitive load for the user.</p>
      
      <h3>The Importance of Predictable Patterns</h3>
      <p>For users who spend 8 hours a day inside a professional dashboard, predictability is superior to novelty. Every interaction—from a simple click to a complex data export—must follow a set of established rules. Nodezet develops custom design tokens that enforce these rules at the CSS and component level, ensuring total visual and functional coherence across the entire stack.</p>
    `,
    isPublished: true
  }
];

const seedDB = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB for seeding...");
  
  await BlogPost.deleteMany({ slug: { $in: seedBlogs.map(b => b.slug) } });
  await BlogPost.insertMany(seedBlogs);
  
  console.log("Seeding successful! 'Edge Computing' and 'SaaS Design Systems' are now live.");
  process.exit();
};

seedDB().catch(err => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
