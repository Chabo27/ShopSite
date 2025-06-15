import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { jwtSecret } from '../config.js';

// Register new user
export const registerUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json({ token: generateToken(user._id) });
};

// Login user
export const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({ token: generateToken(user._id) });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Get user profile
export const getProfile = (req, res) => {
  res.json(req.user);
};

const generateToken = (id) => jwt.sign({ id }, jwtSecret, { expiresIn: '30d' });
