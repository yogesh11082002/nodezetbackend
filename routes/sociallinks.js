const express = require('express');
const router = express.Router();
const SocialLinks = require('../models/SocialLinks');
const { protect } = require('../middleware/auth');

// Get social links (public)
router.get('/', async (req, res) => {
  try {
    let doc = await SocialLinks.findOne();
    if (!doc) {
      doc = await SocialLinks.create({
        links: [
          { platform: 'instagram', url: 'https://instagram.com/nodezet', enabled: true },
          { platform: 'linkedin', url: 'https://linkedin.com/company/nodezet', enabled: true },
          { platform: 'facebook', url: 'https://facebook.com/nodezet', enabled: true },
          { platform: 'twitter', url: 'https://x.com/nodezet', enabled: true },
        ]
      });
    }
    res.json({ success: true, data: doc.links.filter(l => l.enabled) });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update social links (admin only)
router.put('/', protect, async (req, res) => {
  try {
    let doc = await SocialLinks.findOne();
    if (!doc) {
      doc = await SocialLinks.create({ links: req.body.links });
    } else {
      doc = await SocialLinks.findByIdAndUpdate(doc._id, { links: req.body.links }, { new: true });
    }
    res.json({ success: true, data: doc.links });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
