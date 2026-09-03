const mongoose = require('mongoose');
require('dotenv').config();
const MenuItem = require('./src/models/MenuItem');

const seedMenu = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/restaurant');
    console.log('Connected to DB');

    await MenuItem.deleteMany({}); // Clear existing
    
    const items = [
      {
        name: 'Samosa Chaat',
        description: 'Crushed samosas topped with yogurt, tamarind and mint chutney.',
        category: 'Starters',
        price: 8.00,
        tags: ['Vegetarian'],
        imageURL: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop'
      },
      {
        name: 'Chicken Tikka',
        description: 'Boneless chicken marinated in yogurt and spices, roasted in clay oven.',
        category: 'Starters',
        price: 10.00,
        tags: ['Spicy'],
        imageURL: 'https://images.unsplash.com/photo-1599487405270-87dcceae3885?w=500&h=400&fit=crop'
      },
      {
        name: 'Chef\'s Special Biryani',
        description: 'Aromatic basmati rice cooked with tender meat, exotic spices, and saffron.',
        category: 'Mains',
        price: 18.00,
        tags: ['Chef\'s Special'],
        imageURL: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=400&fit=crop'
      },
      {
        name: 'Paneer Tikka Masala',
        description: 'Grilled cottage cheese cubes in a rich, creamy tomato gravy.',
        category: 'Mains',
        price: 16.00,
        tags: ['Vegetarian'],
        imageURL: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=400&fit=crop'
      },
      {
        name: 'Butter Chicken',
        description: 'Tender chicken cooked in a smooth buttery and creamy tomato sauce.',
        category: 'Mains',
        price: 17.00,
        tags: [],
        imageURL: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&h=400&fit=crop'
      },
      {
        name: 'Dal Makhani',
        description: 'Black lentils simmered overnight with butter and cream.',
        category: 'Mains',
        price: 14.00,
        tags: ['Vegetarian'],
        imageURL: 'https://images.unsplash.com/photo-1586528751508-410a80d46d0a?w=500&h=400&fit=crop'
      },
      {
        name: 'Gulab Jamun',
        description: 'Milk solid dumplings fried and soaked in sugar syrup.',
        category: 'Desserts',
        price: 5.00,
        tags: ['Vegetarian'],
        imageURL: 'https://images.unsplash.com/photo-1586529241584-6338fb5799a7?w=500&h=400&fit=crop'
      },
      {
        name: 'Mango Mint Cooler',
        description: 'A refreshing blend of fresh mango puree, mint leaves, and a hint of lime.',
        category: 'Drinks',
        price: 6.00,
        tags: ['Vegan'],
        imageURL: 'https://images.unsplash.com/photo-1544025162-811114cd31eb?w=500&h=400&fit=crop'
      }
    ];

    await MenuItem.insertMany(items);
    console.log('Menu seeded successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedMenu();
