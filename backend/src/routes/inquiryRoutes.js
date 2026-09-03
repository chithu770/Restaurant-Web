const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// GET all inquiries (Admin)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// POST a new catering/event inquiry (Client)
router.post('/', async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    res.status(400).json({ error: 'Invalid inquiry data' });
  }
});

module.exports = router;
