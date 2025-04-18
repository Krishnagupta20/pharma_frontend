import React from "react";
import './footer.css'
import image from "../assets/photo1.png";
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Logo */}
          <div className="footer-logo">
            <img src={image} alt="Company Logo" />
          </div>
          
          {/* Company Details */}
          <div className="footer-details">
            <p>Company Name</p>
            <p>Address: 1234 Street, City, Country</p>
            <p>Phone: +123-456-7890</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/inventory">Inventory</a></li>
              <li><a href="/products">Products</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          </div>

          {/* Contact Us Button */}
          <div className="contact-button">
            <a href="/contact-us" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
