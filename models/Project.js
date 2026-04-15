const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  link: { type: String },
  category: { type: String, default: 'Web_Experience' },
  tags: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
