import React, { useState } from "react";
import "./livechat.css";

function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");

      // Simulate AI reply
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "AI", text: "Interesting point! Tell me more." }]);
      }, 1000);
    }
  };

  return (
    <div className="live-chat">
      <h2>💬 Live Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === "You" ? "you" : "ai"}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default LiveChat;
