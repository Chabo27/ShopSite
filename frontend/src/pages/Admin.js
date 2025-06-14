import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const remove = (id) => {
    fetch(`/api/products/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      .then(() => setProducts((p) => p.filter((prod) => prod._id !== id)));
  };

  return (
    <div className="p-4">
      {products.map((p) => (
        <div key={p._id} className="border p-2 mb-2 flex items-center">
          <div className="flex-1">{p.name}</div>
          <button onClick={() => remove(p._id)} className="ml-2">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
