import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', address: '', email: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ items: cart.map((c) => ({ product: c._id, qty: 1 })), totalPrice: cart.reduce((sum, i) => sum + i.price, 0) })
    }).then(() => navigate('/confirmation'));
  };

  return (
    <div className="p-4">
      <input name="name" onChange={handleChange} value={form.name} placeholder="Name" className="border p-2 mb-2 w-full" />
      <input name="address" onChange={handleChange} value={form.address} placeholder="Address" className="border p-2 mb-2 w-full" />
      <input name="email" onChange={handleChange} value={form.email} placeholder="Email" className="border p-2 mb-2 w-full" />
      <button onClick={submit} className="bg-green-700 text-white px-4 py-2">Confirm Order</button>
    </div>
  );
};

export default Checkout;
