const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  eventType: { 
    type: String, 
    enum: ['Wedding', 'Corporate', 'Private Party', 'Other'],
    required: true
  },
  date: { type: Date, required: true },
  guestCount: { type: Number, required: true },
  budget: { type: String },
  details: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
