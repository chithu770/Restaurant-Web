const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  partySize: { type: Number, required: true, min: 1 },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  tableDesignation: { type: String }, // Can be assigned later by staff
  specialRequests: { type: String },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
    default: 'Pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
