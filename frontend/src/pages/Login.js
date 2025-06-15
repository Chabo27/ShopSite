import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    fetch('/api/users/login', {
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
      <input name="email" onChange={handleChange} value={form.email} placeholder="Email" className="border p-2 mb-2 w-full" />
      <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Password" className="border p-2 mb-2 w-full" />
      <button onClick={submit} className="bg-green-700 text-white px-4 py-2">Login</button>
    </div>
  );
};

export default Login;
