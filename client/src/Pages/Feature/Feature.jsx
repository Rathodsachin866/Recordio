import React from "react";
import { useNavigate } from "react-router-dom";
import "./feature.css";
import { FaComments, FaMeetup, FaPodcast, FaSpeakap } from "react-icons/fa";

const Features= () => {
    const navigate = useNavigate();

  return (
    <section className="features-services-section">
      {/* Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>

      {/* Title */}
      <h4 className="subtitle">FEATURES</h4>
      <h2 className="main-title">Our Features & Services.</h2>

      {/* Cards */}
      <div className="features-grid">
        <div className="feature-card">
          <FaPodcast className="feature-icon" />
          <h3>Podcast</h3>
          <p>
           Share your voice with the world, no matter the distance.
          </p>
          <button className="more-btn" onClick={()=> navigate('/podcast')}> Podcast</button>
        </div>

        <div className="feature-card">
          <FaMeetup className="feature-icon" />
          <h3>Meetings</h3>
          <p>
            CWhere ideas meet—connect, collaborate, conquer.
          </p>
          <button className="more-btn" onClick={() => navigate('/meeting')}>Meeting</button>
        </div>

        <div className="feature-card">
          <FaSpeakap className="feature-icon" />
          <h3>Personal Communication</h3>
          <p>
           Boost your speaking skills with real-time feedback.
          </p>
          <button className="more-btn" onClick={()=> navigate('/chat')}> Communication</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
