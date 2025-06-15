import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {products.map((p) => (
        <Link key={p._id} to={`/product/${p._id}`} className="border p-2">
          <img src={p.image} alt={p.name} className="mb-2" />
          <div>{p.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
