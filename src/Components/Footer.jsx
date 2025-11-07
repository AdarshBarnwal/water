 import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="line" />

      <div className="footer-top">
        <div className="footer-about">
          <img src="https://waterjetpurifier.com/logo512.png" alt="WaterJet Logo" className="footer-logo" />
          <p>
            We are one of the leading RO service provider company in Delhi NCR.
            The reason why we have been able to recognize ourselves in such a
            positive influence among customers is a remarkable quality of
            service.
          </p>
        </div>

        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Catalogue</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>C-517/18 Hastal Road Near Sunar Market Uttam Nagar ND-110059</p>
          <p>Phone: +91 7428578294</p>
          <p>Phone: +91 7428783127</p>
          <p>Email: info@waterjetpurifier.com</p>
        </div>
      </div>

      <hr className="line" />
      <div className="footer-bottom">
        <div className="payment">
          <h3>Payment methods</h3>
          <div className="payment-icons">
            <img src="https://waterjetpurifier.com/upi.svg" alt="UPI" />
            <img src="https://waterjetpurifier.com/master-card.svg" alt="VISA" />
            <img src="https://waterjetpurifier.com/visa.svg" alt="Mastercard" />
            <img src="https://waterjetpurifier.com/net-banking.svg" alt="Net Banking" />
            <img src="https://waterjetpurifier.com/wallet.svg" alt="Wallet" />
          </div>
        </div>

        <div className="social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © Copyright 2025 WaterJet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
