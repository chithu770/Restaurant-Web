const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// GET all reservations (Admin/Staff)
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1, time: 1 });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reservations' });
  }
});

// In-memory store for OTPs (For testing purposes)
// Key: phone number, Value: { otp: string, reservationData: object, expires: number }
const otpStore = new Map();

// POST request an OTP for reservation (Client)
router.post('/request-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'Phone number is required' });

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store it with a 5-minute expiration
    otpStore.set(phone, {
      otp,
      reservationData: req.body,
      expires: Date.now() + 5 * 60 * 1000
    });

    // In a real app, send this via SMS. For testing, return it to display on the frontend.
    res.json({ message: 'OTP generated', testOtp: otp });
  } catch (error) {
    res.status(500).json({ error: 'Failed to request OTP' });
  }
});

// POST verify OTP and save reservation (Client)
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    
    if (!otpStore.has(phone)) {
      return res.status(400).json({ error: 'No pending reservation found or OTP expired' });
    }

    const storedData = otpStore.get(phone);
    
    if (Date.now() > storedData.expires) {
      otpStore.delete(phone);
      return res.status(400).json({ error: 'OTP expired. Please try again.' });
    }

    if (storedData.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    // OTP is valid, save the reservation
    const newReservation = new Reservation(storedData.reservationData);
    const savedReservation = await newReservation.save();
    
    // Clear OTP from store
    otpStore.delete(phone);
    
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(400).json({ error: 'Failed to confirm reservation' });
  }
});

// PUT update reservation status (Admin/Staff)
router.put('/:id', async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReservation) return res.status(404).json({ error: 'Reservation not found' });
    res.json(updatedReservation);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update reservation' });
  }
});

module.exports = router;
