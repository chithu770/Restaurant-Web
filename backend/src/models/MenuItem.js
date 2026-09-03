const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Starters', 'Mains', 'Desserts', 'Drinks', 'Chef\'s Special']
  },
  price: { type: Number, required: true },
  allergens: [{ type: String }],
  tags: [{ 
    type: String, 
    enum: ['Vegan', 'Gluten-Free', 'Vegetarian', 'Spicy', 'Chef\'s Special'] 
  }],
  imageURL: { type: String },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
