import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="cake-footer text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          
          
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">CakeBro</h5>
            <p>
              Bringing sweetness to every celebration with fresh, handcrafted
              cakes made with love. Your happiness is our biggest celebration!
            </p>
          </div>

          
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Cakes</a></li>
              <li><a href="#" className="footer-link">Offers</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

       
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="footer-title">Contact</h5>
            <p>📞 +91 9360 420800 </p>
            <p>📧 support@cakebro.com</p>
            <p>📍 Chidhambaram, Tamil Nadu</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center p-3">
        © 2025 CakeBro — All Rights Reserved 🍰
      </div>
    </footer>
  );
};

export default Footer;
