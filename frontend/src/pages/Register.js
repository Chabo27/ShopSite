import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        navigate('/');
      });
  };

  return (
    <div className="p-4">
      <input name="name" onChange={handleChange} value={form.name} placeholder="Name" className="border p-2 mb-2 w-full" />
      <input name="email" onChange={handleChange} value={form.email} placeholder="Email" className="border p-2 mb-2 w-full" />
      <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Password" className="border p-2 mb-2 w-full" />
      <button onClick={submit} className="bg-green-700 text-white px-4 py-2">Register</button>
    </div>
  );
};

export default Register;
