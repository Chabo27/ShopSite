import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      {cart.map((item) => (
        <div key={item._id} className="border p-2 mb-2 flex items-center">
          <div className="flex-1">{item.name}</div>
          <div>${item.price}</div>
          <button onClick={() => removeFromCart(item._id)} className="ml-2">x</button>
        </div>
      ))}
      <div className="font-bold">Total: ${total.toFixed(2)}</div>
      <Link to="/checkout" className="mt-4 inline-block bg-green-700 text-white px-4 py-2">Checkout</Link>
    </div>
  );
};

export default Cart;
