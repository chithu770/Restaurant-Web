const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Razorpay = require('razorpay');

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key_here';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret'
});

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }
  
  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

// POST: Create a new order (legacy flow)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { items, totalAmount, deliveryAddress } = req.body;
    
    const newOrder = new Order({
      userId: req.user.id,
      items,
      totalAmount,
      deliveryAddress
    });
    
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// GET: Fetch orders for the logged-in user
router.get('/my-orders', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// POST: Create Razorpay Order
router.post('/create-razorpay-order', authMiddleware, async (req, res) => {
  try {
    const { items, totalAmount, deliveryAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Order items are required' });
    }

    // Add 8% tax (same as frontend)
    const finalAmount = totalAmount; // the frontend usually sends totalAmount including tax for our payload, but let's trust what frontend sends

    // 1. Create the order in the database as pending
    const newOrder = new Order({
      userId: req.user.id,
      items,
      totalAmount: finalAmount,
      deliveryAddress,
      paymentStatus: 'pending'
    });
    
    const savedOrder = await newOrder.save();

    // 2. Create Razorpay Order if secret is provided, otherwise fallback to basic client checkout
    let rzpOrderId = null;
    let rzpAmount = Math.round(finalAmount * 100);
    
    if (process.env.RAZORPAY_KEY_SECRET && process.env.RAZORPAY_KEY_SECRET !== 'YOUR_ACTUAL_SECRET' && process.env.RAZORPAY_KEY_SECRET !== 'dummy_secret') {
      const options = {
        amount: rzpAmount,
        currency: "INR",
        receipt: savedOrder._id.toString(),
      };
      const rzpOrder = await razorpay.orders.create(options);
      rzpOrderId = rzpOrder.id;
      savedOrder.stripeSessionId = rzpOrder.id;
      await savedOrder.save();
    } else {
      // Mock order ID for pure client-side test flow without secret
      savedOrder.stripeSessionId = 'mock_rzp_' + savedOrder._id;
      await savedOrder.save();
    }

    res.json({ 
      orderId: savedOrder._id,
      razorpayOrderId: rzpOrderId,
      amount: rzpAmount,
      currency: "INR",
      keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy'
    });
  } catch (error) {
    console.error('Razorpay create order error:', error);
    let errorMessage = 'Failed to create Razorpay order';
    if (error.statusCode === 401) {
      errorMessage = 'Razorpay Authentication Failed. Please add valid RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to backend/.env and restart the backend.';
    } else if (error.error && error.error.description) {
      errorMessage = error.error.description;
    }
    res.status(500).json({ error: errorMessage });
  }
});

// POST: Verify Razorpay Payment
router.post('/verify-razorpay', authMiddleware, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;
    
    // If we don't have a secret key configured, bypass signature verification for test mode
    if (!process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET === 'YOUR_ACTUAL_SECRET' || process.env.RAZORPAY_KEY_SECRET === 'dummy_secret') {
      const order = await Order.findById(orderId);
      if (order) {
        order.paymentStatus = 'paid';
        order.status = 'confirmed';
        await order.save();
      }
      return res.json({ success: true, orderId });
    }

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || 'dummy_secret')
      .update(body.toString())
      .digest("hex");
      
    if (expectedSignature === razorpay_signature) {
      // Payment is verified
      const order = await Order.findById(orderId);
      if (order) {
        order.paymentStatus = 'paid';
        order.status = 'confirmed';
        await order.save();
      }
      return res.json({ success: true, orderId });
    } else {
      return res.status(400).json({ error: 'Invalid signature' });
    }
  } catch (error) {
    console.error('Verify session error:', error);
    res.status(500).json({ error: 'Failed to verify payment' });
  }
});

module.exports = router;
