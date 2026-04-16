const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');
const { protect } = require('../middleware/auth');

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogPost.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Admin: Get all blogs (including unpublished)
router.get('/admin', protect, async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Create blog
router.post('/', protect, async (req, res) => {
  try {
    const blog = await BlogPost.create(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update blog
router.put('/:id', protect, async (req, res) => {
  try {
    const blog = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete blog
router.delete('/:id', protect, async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
