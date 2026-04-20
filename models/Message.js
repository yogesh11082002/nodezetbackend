const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'unread' }, // unread, read, archived
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
