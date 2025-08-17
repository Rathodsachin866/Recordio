import React from "react";
import { useParams } from "react-router-dom";
import { FaMicrophoneSlash, FaDesktop, FaPaperPlane, FaPhoneSlash } from "react-icons/fa";
import "./meeting.css";

function Meeting() {
  const { meetingId } = useParams();

  return (
    <div className="meeting-page">
      {/* Header */}
      <header className="meeting-header">
        <h1>Meeting ID: {meetingId}</h1>
        <button className="end-btn">
          <FaPhoneSlash className="icon" /> End Meeting
        </button>
      </header>

      {/* Main Content */}
      <main className="meeting-main">
        {/* Video Area */}
        <section className="video-section">
          <div className="video-placeholder">
            Video Stream Placeholder
          </div>
          <div className="controls">
            <button className="mute-btn">
              <FaMicrophoneSlash className="icon" /> Mute
            </button>
            <button className="share-btn">
              <FaDesktop className="icon" /> Share Screen
            </button>
          </div>
        </section>

        {/* Chat Section */}
        <aside className="chat-section">
          <div className="chat-header">Chat</div>
          <div className="chat-messages">
            <div className="chat-message">Hello there 👋</div>
            <div className="chat-message self">Hi! Ready to start?</div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button className="send-btn">
              <FaPaperPlane className="icon" />
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Meeting;
