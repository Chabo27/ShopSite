import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-2 bg-green-700 text-white px-4 py-2">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
