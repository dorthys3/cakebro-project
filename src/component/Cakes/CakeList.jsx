import React, { useEffect, useState } from "react";
import './CakeList.css';

export default function CakeList() {
  const [cakes, setCakes] = useState([]);
  const [cartCount, setCartCount] = useState(0); 
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8082/api/cakes")
      .then(res => res.json())
      .then(data => setCakes(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      fetch("http://localhost:8082/api/cakes")
        .then(res => res.json())
        .then(data => setCakes(data));
    } else {
      fetch(`http://localhost:8082/api/cakes/search?name=${search}`)
        .then(res => res.json())
        .then(data => setCakes(data));
    }
  }, [search]);

  function addToCart(cake) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updated = [...cart, cake];
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartCount(updated.length);
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Added to Cart ✅");
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 className="h-2"><b>Available Cakes</b></h2>
      <h4 className="h-3">
        Cart Items:
        <div style={{color:"#743f10ff", marginTop:"-28px", marginLeft:"130px", fontWeight:"bold"}}>
          {cartCount}
        </div>
      </h4>

  
      <div style={{ marginBottom: "20px" }}>
        
        <input
          type="text"
          placeholder="Search cakes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight:"600",
            border: "3px solid black",
          }}
        />
      </div>

    
      <div className="box" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cakes.map((cake) => (
          <div key={cake.id} className="cards" style={{
            width: "300px",
            margin: "20px",
            height:"350px",
            borderRight: "2px solid rgb(64, 33, 33)",
            borderBottom: "2px solid rgb(64, 33, 33)",
            borderRadius: "8px",
            padding: "10px",
            
            boxShadow: "1px 1px 4px #e79914ff",
          }}>
            <img
              src={cake.imageUrl}
              alt={cake.name}
              style={{ width: "100%", height: "200px", objectFit: "cover"}} 
            />
           <h4 style={{ fontFamily: "Georgia" }}><i>{cake.name}</i></h4>
            <p style={{ fontWeight: 500 }}>₹{cake.price}</p>
            <button className="button-1" onClick={() => addToCart(cake)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
