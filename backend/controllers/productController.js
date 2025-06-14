import Product from '../models/Product.js';

// Get all products
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get single product by id
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: 'Not found' });
};

// Create product (admin)
export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const created = await product.save();
  res.status(201).json(created);
};

// Update product (admin)
export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).json({ message: 'Not found' });
};

// Delete product (admin)
export const deleteProduct = async (req, res) => {
  const removed = await Product.findByIdAndDelete(req.params.id);
  removed ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' });
};
