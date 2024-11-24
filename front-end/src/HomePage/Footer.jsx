import React from 'react';
import './Footer.css'; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Your Company</h2>
          <p>Providing quality services since 2024.</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul className="footer-links">
            <li><a href="./home">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://github.com/FARTASH-421" aria-label="Facebook">Facebook</a>
            <a href="https://github.com/FARTASH-421" aria-label="Twitter">Twitter</a>
            <a href="https://github.com/FARTASH-421" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
