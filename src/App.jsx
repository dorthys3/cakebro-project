import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Homepg from "./component/Homepg/Homepg";
import Aboutpg from "./component/About/Aboutpg";
import ShopImages from "./component/Shop/ShopImages";
import CakeList from "./component/Cakes/CakeList";
import Cart from "./component/Cart/Cart";
import Footer from "./component/Footer/Footer";

/* Scroll handler component */
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const section = document.getElementById(path);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const MainPage = () => (
  <>
    <section id="home"><Homepg /></section>
    <section id="about"><Aboutpg /></section>
    <section id="bakery"><ShopImages /></section>
    <section id="cakes"><CakeList /></section>
    <section id="cart"><Cart /></section>
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/bakery" element={<MainPage />} />
        <Route path="/cakes" element={<MainPage />} />
        <Route path="/cart" element={<MainPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
