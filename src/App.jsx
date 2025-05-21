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
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Categories</h2>
        <button onClick={() => handleCategory("electronics")}>Electronics</button>
        <button onClick={() => handleCategory("fashion")}>Fashion</button>
      </div>

      {/* Products */}
      <div className="products">
        <h2>Products</h2>
        {data.map((item, index) => (
          <div key={index} className="product-item">
            <span>{item.name}</span>
            <button onClick={() => handleCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="cart">
        <h2>
          Cart Items <Badge bg="secondary">{cart.length}</Badge>
        </h2>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
