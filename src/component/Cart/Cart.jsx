import React, { useEffect, useState } from "react";
import "./Cart.css";
export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const updateCart = () => {
      const saved = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(saved);
    };

    updateCart(); 
    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  function removeItem(index) {
    const updated = [...cart];
    updated.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updated));

    // Trigger cart update
    window.dispatchEvent(new Event("cartUpdated"));
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="cart-1">Your Cart 🥞</h2>
      {cart.length === 0 && <p className="cart-2">Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-items" style={{ margin: "10px", padding: "10px" }}>
          <h4>{item.name}🍰</h4>
          <p>₹{item.price}</p>
          <button className="cart-button" onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h3 className="cart-total">Total: ₹{total}🌟</h3>
    </div>
  );
}
