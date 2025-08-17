import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./rating.css";

function Ratings() {

  return (
    <div className="hero-container">
      {/* Top Section */}
      <div className="text-section">
        <h1 className="text-solid">BEST</h1>
        <h1 className="text-outline">WEBSITE</h1>
        <h1 className="text-solid big">DEVELOPMENT</h1>
      </div>

      {/* Decorative Shape */}
      <div className="circle-shape">
        <div className="green-circle"></div>
        <div className="wave-lines"></div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={85} />
      </a>
    </div>
  );
};

export default Ratings;