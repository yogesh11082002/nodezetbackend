const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  service: { type: String, required: true },
  subService: { type: String },
  budget: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'unread' },
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
