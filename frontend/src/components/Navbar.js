import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className="flex items-center p-4 bg-green-700 text-white">
      <Link className="mr-4" to="/">Home</Link>
      <Link className="mr-4" to="/shop">Shop</Link>
      <Link className="mr-4" to="/about">About</Link>
      <Link className="mr-4" to="/contact">Contact</Link>
      <Link className="mr-4" to="/login">Login</Link>
      <Link className="ml-auto" to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;
