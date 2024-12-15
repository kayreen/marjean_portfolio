import React from "react";
import "./Contact.css"; // Ensure the path to CSS file is correct
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Install react-icons

const Contact = () => {
  return (
    <div className="center-container">
      <div className="decorative-bar left-bar"></div> {/* Left Design */}
      <p>For more details just,</p>
      <h1>Contact Me!</h1>
      <div className="social-icons">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/roxasmarjean/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon facebook"
        >
          <FaFacebook />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/roxasmarjean/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+639302322651"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
        >
          <FaWhatsapp />
        </a>

        {/* Gmail */}
        <a
          href="mailto:roxasmarjean@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon email"
        >
          <FaEnvelope />
        </a>
      </div>
      <div className="decorative-bar right-bar"></div> {/* Right Design */}
    </div>
  );
};

export default Contact;
