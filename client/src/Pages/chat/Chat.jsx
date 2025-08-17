import React from "react";
import { FaCog, FaBell, FaUser, FaVideo, FaHeadphones } from "react-icons/fa";
import "./chat.css";

function Chat() {
  return (
    <div className="call-page">
      {/* Top Navbar */}
      <div className="top-bar">
        <div className="title">
          <FaVideo style={{ marginRight: "8px" }} />
          Calling Connect
        </div>
        <div className="icons">
          <FaCog className="icon" title="Settings" />
          <FaBell className="icon" title="Notifications" />
          <FaUser className="icon" title="Profile" />
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Left Chat Panel */}
        <div className="chat-panel">
          <h3>Chat Assistance</h3>
          <div className="messages">
            <div className="message bot">Hello! How can I assist you today?</div>
            <div className="message user">Can you help me with screen sharing?</div>
          </div>
          <input type="text" placeholder="Type your message..." />
          <button className="send-btn">Send</button>
        </div>

        {/* Right Illustration (Icons) */}
        <div className="illustration-panel">
          <div className="illustration">
            {/* Floating Avatars */}
            <div className="avatar top-left"><FaUser /></div>
            <div className="avatar mid-left"><FaUser /></div>
            <div className="avatar top-right"><FaUser /></div>

            {/* Main Icon with Headphones */}
            <div className="main-avatar">
              <FaUser className="main-user" />
              <FaHeadphones className="headset" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
