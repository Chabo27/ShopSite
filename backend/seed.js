import Product from './models/Product.js';
import { connectDB } from './config.js';

const products = [
  {
    name: 'Solar Panel',
    description: 'Portable 100W solar panel',
    price: 199.99,
    category: 'Power',
    image: 'https://example.com/solar.jpg',
    inStock: true
  },
  {
    name: 'Bushcraft Knife',
    description: 'Stainless steel survival knife',
    price: 59.99,
    category: 'Tools',
    image: 'https://example.com/knife.jpg',
    inStock: true
  },
  {
    name: 'Firestarter',
    description: 'Magnesium fire starter kit',
    price: 14.99,
    category: 'Fire',
    image: 'https://example.com/firestarter.jpg',
    inStock: true
  },
  {
    name: 'Water Filter',
    description: 'Portable water filtration system',
    price: 39.99,
    category: 'Water',
    image: 'https://example.com/filter.jpg',
    inStock: true
  },
  {
    name: 'Mini Greenhouse',
    description: 'Compact greenhouse for seedlings',
    price: 89.99,
    category: 'Garden',
    image: 'https://example.com/greenhouse.jpg',
    inStock: true
  }
];

connectDB().then(async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log('Seed data inserted');
  process.exit();
});
