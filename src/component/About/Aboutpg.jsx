import React from 'react';
import Slider from "react-slick";
import './Aboutpg.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Images
import wedding from "../../assets/wedding.jpg";
import birthday from "../../assets/birthday.jpg";
import baby from "../../assets/baby.jpg";
import newborn from "../../assets/newborn.jpg";
import retirement from "../../assets/retirement.jpg";

const Aboutpg = () => {
  const occasions = [
    { img: wedding, caption: "Wedding" },
    { img: birthday, caption: "Birthday" },
    { img: baby, caption: "Baby Shower" },
    { img: newborn, caption: "New Born" },
    { img: retirement, caption: "Retirement" },
    { img: wedding, caption: "Wedding" },
    { img: birthday, caption: "Birthday" },
    { img: baby, caption: "Baby Shower" },
    { img: newborn, caption: "New Born" },
    { img: retirement, caption: "Retirement" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="about-page-wrapper">
      {/* Header */}
      <div className="about-header text-center p-5">
        <h1>About CakeBro</h1>
        <p><i>Your one-stop shop for delicious cakes!</i></p>
        <p className='p-1'>Welcome to CakeBro, your friendly neighborhood cake shop where every slice tells a story. What began as a small home bakery with a love for creating delicious desserts has grown into a trusted brand known for quality, creativity, and unforgettable taste.</p>
        <p className='p-1'>At CakeBro, baking is more than a business — it’s a passion that we pour into every cake, cupcake, and dessert we make. We believe that a cake isn’t just a sweet treat; it holds memories, emotions, and moments worth celebrating. That’s why we dedicate ourselves to crafting cakes that not only look beautiful but taste extraordinary.</p>
      </div>
      <center><h1>🍓.....🧁.....🍰.....🍩.....🎀.....🍫</h1></center>
<div className="container occasions-section mt-5 mb-5">
        <h2 className="text-center mb-4"><b>Our Special Occasions</b></h2>
        <Slider {...settings}>
          {occasions.map((item, idx) => (
            <div className="occasion-card" key={idx}>
              <img src={item.img} alt={item.caption} />
              <h5>{item.caption}</h5>
            </div>
          ))}
        </Slider>
      </div> <br></br>
      {/* About Sections */}
      <div className="container about-section mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 p-4">
            <h2 className="about-title">OUR PROMISE</h2>
            <p>
              Every product we make is freshly baked using high-quality ingredients,
              handcrafted with attention to detail, and designed with love.  
              We ensure that each cake brings joy, sweetness, and unforgettable taste.
            </p>
            <ul>
              <li>🎂 Fresh, premium ingredients</li>
              <li>🧁 Handcrafted with care</li>
              <li>🍫 Beautiful designs, no shortcuts</li>
              <li>🍰 Made to satisfy every craving</li>
            </ul>
          </div>
          <div className="col-md-6 p-4">
            <h2 className="about-title">WHY CAKEBRO?</h2>
            <ul>
              <li>🎂 Fluffy, moist, delicious cakes</li>
              <li>🧁 Creative designs by experienced bakers</li>
              <li>🍫 Custom cakes for any theme</li>
              <li>🎂 Clean & hygienic kitchen</li>
              <li>🍰 Timely delivery for all orders</li>
              <li>🧁 Friendly customer service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Occasions Card Carousel ---------- */}
      
    </div>
  );
}

export default Aboutpg;
