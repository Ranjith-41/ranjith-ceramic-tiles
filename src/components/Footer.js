import React from 'react';
import '../Footer.css';

function Footer() {
  return (
    <footer id='footer' className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Ranjith Ceramics</h2>
          <p>Your one-stop destination for quality ceramics, tiles, and more.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p><strong>Location:</strong> Ranjith Ceramics, Coimbatore, Tamilnadu</p>
          <p><strong>Phone:</strong> +91-6380550065</p>
          <p><strong>Email:</strong> contact@ranjithceramics.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f icon"></i> Facebook
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i> Instagram
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i> Twitter
  </a>
</div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}Ranjith Ceramics. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
