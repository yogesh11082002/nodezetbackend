const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  heroTitle: { type: String, default: "Redefining Innovation in the Digital Era" },
  heroSubtitle: { type: String, default: "Nodezet is a premier IT consulting and services firm dedicated to empowering businesses through cutting-edge technology and strategic innovation." },
  mission: { type: String },
  vision: { type: String },
  coreValues: [{
    title: String,
    description: String,
    icon: String
  }],
  stats: [{
    label: String,
    value: String
  }],
  team: [{
    name: String,
    role: String,
    image: String,
    specialization: String
  }],
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('About', AboutSchema);
