import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const electronics = [
    { name: "Laptops" },
    { name: "Smartphones" },
  ];

  const fashions = [
    { name: "Kidswear" },
    { name: "Women's wear" },
  ];

  const handleCategory = (category) => {
    setData(category === "electronics" ? electronics : fashions);
  };

  const handleCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <h2>🛍️ Categories</h2>
        <button onClick={() => handleCategory("electronics")}>💻 Electronics</button>
        <button onClick={() => handleCategory("fashion")}>👗 Fashion</button>
      </div>

      <div className="products">
        <h2>🛒 Products</h2>
        <div className="product-grid">
          {data.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-name">{item.name}</div>
              <button onClick={() => handleCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>
          🛍️ Cart <Badge bg="secondary">{cart.length}</Badge>
        </h2>
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-tag">{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
