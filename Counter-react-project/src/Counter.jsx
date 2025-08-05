import React, { useState } from "react";
import "../public/Counter.css";

function Counter() {
  const [count, setCount] = useState(1);
  const product = {
    title: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our noise-cancelling wireless headphones. 40-hour battery life and comfortable over-ear design.",
    price: 199.99,
    imageUrl:
      "https://x.imastudent.com/content/0037586_jbl-live-660nc-noise-canceling-wireless-over-ear-headphones_500.png",
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < 25) {
      setCount(count + 1);
    }
    else{
      alert("Product is out of stock.");
    }
  };

  const totalPrice = (product.price * count).toFixed(2);

  return (
    <div className="product-container">
      <h1 className="product-title">{product.title}</h1>

      <div className="product-details">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.title} />
        </div>

        <div className="product-info">
          <p className="product-description">
            Description : {product.description}
          </p>
          <p className="product-price">${product.price}</p>

          <div className="quantity-controls">
            <button
              onClick={decrement}
              className={`quantity-btn ${count === 1 ? "disabled" : ""}`}
              disabled={count === 1}
            >
              -
            </button>

            <span className="quantity">{count}</span>
            <button onClick={increment} className="quantity-btn">
              +
            </button>
          </div>

          <div className="total-section">
            <p>
              Total: <span className="total-price">${totalPrice}</span>
            </p>
          </div>

          <button
            onClick={() => setCount(1)}
            className="reset-btn"
            disabled={count === 1}
          >
            Reset
          </button>

          <button className="add-to-cart-btn">
            {  `Add to Cart`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
