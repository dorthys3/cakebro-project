import React from "react";
import "./ShopImages.css";

// Example shop images
import shop1 from "../../assets/cupcake1.jpg";
import shop2 from "../../assets/cupcake2.jpg";
import shop3 from "../../assets/cupcake3.jpg";
import shop4 from "../../assets/cupcake4.jpg";

const ShopImages = () => {
  const images = [
    { img: shop1, desc: "Freshly baked cakes" },
    { img: shop2, desc: "Our Team at work" },
    { img: shop3, desc: "Beautiful bakery interiors" },
    { img: shop4, desc: "Handcrafted desserts" },
  ];

  return (
    <div className="shop-section container mt-5 mb-5">
      <h2 className="text-center mb-4"><b>Our Bakery</b></h2>
      <div className="shop-grid">
        {images.map((item, idx) => (
          <div key={idx} className="shop-card">
            <img src={item.img}/>
            <div className="overlay">
              <div className="desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopImages;
