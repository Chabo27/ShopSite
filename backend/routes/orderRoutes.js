import express from 'express';
import { addOrder, getOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, addOrder);
router.get('/:userId', protect, getOrders);

export default router;
