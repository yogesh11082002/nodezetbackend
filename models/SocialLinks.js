const mongoose = require('mongoose');

const SocialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true, default: '#' },
  enabled: { type: Boolean, default: true },
}, { timestamps: true });

const SocialLinksSchema = new mongoose.Schema({
  links: [SocialLinkSchema],
}, { timestamps: true });

module.exports = mongoose.model('SocialLinks', SocialLinksSchema);
