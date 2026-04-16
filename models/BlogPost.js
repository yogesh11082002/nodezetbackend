const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  author: { type: String, default: 'Admin' },
  image: { type: String },
  category: { type: String },
  tags: [{ type: String }],
  isPublished: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
