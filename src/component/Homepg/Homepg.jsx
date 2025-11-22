import React, { useEffect, useState } from "react";
import "./Homepg.css";
import cake2 from "../../assets/cake3.jpg";

const Homepg = () => {
  const words = ["favorite cakes", "sweetest moments", "celebrations", "cravings"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <div className="home-wrapper">
      <div className="single-image-container">
        <img src={cake2} className="single-img" alt="Cake" />
        <div className="carousel-text">
          <h2>
            Enjoy your <span>"{text}"</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Homepg;
