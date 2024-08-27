import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best products with top-notch
              quality and customer service.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              City, Country 12345<br />
              <a href="tel:+1234567890" className="text-white">+123 456 7890</a><br />
              <a href="mailto:info@example.com" className="text-white">info@example.com</a>
            </address>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Harvest Hope Network. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
