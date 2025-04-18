// Card.jsx
import React, { useState } from 'react';
import './Card.css';

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    console.log(`Buying ${quantity} ${product.name}`);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={product.image_url} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ₹{product.price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
