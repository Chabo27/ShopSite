import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    let url = '/api/products';
    if (category) url += `?category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then(setProducts);
  }, [category]);

  return (
    <div className="p-4">
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="mb-4 border">
        <option value="">All</option>
        <option value="Power">Power</option>
        <option value="Tools">Tools</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Garden">Garden</option>
      </select>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <Link key={p._id} to={`/product/${p._id}`} className="border p-2">
            <img src={p.image} alt={p.name} className="mb-2" />
            <div>{p.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
