import Order from '../models/Order.js';

// Create new order
export const addOrder = async (req, res) => {
  const order = new Order({ user: req.user._id, ...req.body });
  const created = await order.save();
  res.status(201).json(created);
};

// Get orders for user
export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.params.userId });
  res.json(orders);
};
