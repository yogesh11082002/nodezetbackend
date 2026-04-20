const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/messages - Submit a contact request
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, service, subService, budget, message } = req.body;
    if (!name || !email || !message || !phone || !company || !service || !budget) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields' });
    }
    const newMessage = await Message.create({ name, email, phone, company, service, subService, budget, message });
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/messages - Admin: Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
