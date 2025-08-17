import React from "react";
import "./about.css";
import { FaComments, FaVideo, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="overlay"></div>
      <div className="about-content">
        <div className="about-left">
          <h2>
            <span className="highlight-bar"></span> About PodConnect
          </h2>
          <p>
            PodConnect is a remote podcasting platform built to help you and your
            co-host record high-quality audio from anywhere in the world.
            Collaborate in real-time with built-in chat and video streaming.
            Rate episodes, manage profiles, and stay connected — all in one place.
          </p>
          <button className="cta-btn">VIEW OUR WORK</button>
        </div>

        <div className="about-right">
          <h3 className="what-we-do">What We Do</h3>
          <div className="features-box">
            <div className="feature-item">
              <FaComments className="feature-icon" />
              <span>Real-time Collaboration</span>
            </div>
            <div className="feature-item">
              <FaVideo className="feature-icon" />
              <span>Video Streaming</span>
            </div>
            <div className="feature-item">
              <FaStar className="feature-icon" />
              <span>Episode Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
