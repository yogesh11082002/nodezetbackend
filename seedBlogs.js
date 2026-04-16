require('dotenv').config();
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const connectDB = require('./db');

const blogs = [
  {
    title: "Transforming Enterprise Operations with Generative AI",
    slug: "transforming-enterprise-ai",
    category: "AI Integration",
    excerpt: "Discover how Fortune 500 companies are utilizing custom LLMs to automate complex internal workflows and stay competitive.",
    content: "Content for AI integration...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "Enterprise", "Automation"]
  },
  {
    title: "Scalable Microservices: Why Next.js is the New Standard",
    slug: "scalable-microservices-nextjs",
    category: "Web Development",
    excerpt: "Next.js 14 and Server Actions are revolutionizing how we handle backend logic within a unified frontend framework.",
    content: "Content for Web Development...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Web", "Next.js", "Performance"]
  },
  {
    title: "Cross-Platform Excellence: Launching Apps with React Native",
    slug: "cross-platform-react-native",
    category: "Mobile Apps",
    excerpt: "How to achieve 60fps performance on both iOS and Android while maintaining a single codebase.",
    content: "Content for Mobile Dev...",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile", "React Native", "Apps"]
  },
  {
    title: "Zero-Trust Security: Protecting your Digital Infrastructure",
    slug: "zero-trust-security-guide",
    category: "Cybersecurity",
    excerpt: "In a world of remote work and cloud clusters, 'Identity' is the new perimeter. Here is how to secure your stack.",
    content: "Content for Security...",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    tags: ["Security", "Infrastructure", "Cloud"]
  },
  {
    title: "The Rise of Edge Computing: Minimizing Latency",
    slug: "edge-computing-latency",
    category: "Cloud Solutions",
    excerpt: "Moving logic closer to the user reduces TTFB and improves the overall user experience significantly.",
    content: "Content for Cloud...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Cloud", "Latency", "Edge"]
  },
  {
    title: "Human-Centric Design: Building UI that Converts",
    slug: "human-centric-design-converts",
    category: "UI/UX Design",
    excerpt: "UX is more than just aesthetics; it's about psychology, accessibility, and guiding the user to a conversion point.",
    content: "Content for UI/UX...",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    tags: ["UI", "UX", "Design"]
  }
];

const seedBlogs = async () => {
  try {
    await connectDB();
    await BlogPost.deleteMany();
    await BlogPost.insertMany(blogs);
    console.log('Successfully seeded 6 professional blogs!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedBlogs();
