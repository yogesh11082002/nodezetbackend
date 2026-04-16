const express = require('express');
const router = express.Router();
const About = require('../models/About');
const { protect } = require('../middleware/auth');

// Get about content
router.get('/', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create({ mission: "Mission text...", vision: "Vision text..." });
    }
    res.json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update about content
router.put('/', protect, async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create(req.body);
    } else {
      about = await About.findByIdAndUpdate(about._id, req.body, { new: true });
    }
    res.json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
