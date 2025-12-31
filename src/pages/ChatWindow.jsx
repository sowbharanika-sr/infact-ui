import { useState } from "react";
import "../Styling/ChatWindow.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SendIcon from "@mui/icons-material/Send";

const ChatWindow = () => {
  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  // ✅ NO DEFAULT MESSAGE
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  /* ================= Q & A DATA ================= */
  
  const handleSend = async () => {
  if (!input.trim()) return;

  const userMsg = {
    sender: "user",
    text: input,
    time: getCurrentTime(),
  };

  setMessages((prev) => [...prev, userMsg]);
  setInput("");

  try {
    const res = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: userMsg.text }),
    });

    const data = await res.json();

    const aiMsg = {
      sender: "ai",
      text: data.answer,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, aiMsg]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "Backend is not reachable.",
        time: getCurrentTime(),
      },
    ]);
  }
};
  return (
    <div className="chat-card">
      {/* ================= HEADER ================= */}
      <div className="chat-header">
        <div className="chat-title">
          <span className="chat-icon">
            <img src="/images/shine.png" alt="chat" />
          </span>
          <div className="chat-highlight">
            <h4>Chat</h4>
            <p>Plan engaging lessons with AI assistance</p>
          </div>
        </div>
        <button className="chat-menu">
          <MoreVertIcon />
        </button>
      </div>

      {/* ================= MESSAGES ================= */}
      <div className="chat-body">
        {messages.length > 0 && (
          <div className="chat-day-divider">
            <span>Today</span>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-row ${msg.sender === "user" ? "left" : "right"}`}
          >
            {/* USER avatar — LEFT */}
            {msg.sender === "user" && (
              <img
                src="/images/profile.png"
                alt="User"
                className="chat-avatar"
              />
            )}

            {/* MESSAGE BUBBLE */}
            <div className={`bubble ${msg.sender}`}>
              {msg.text}
              <span className="time">{msg.time}</span>
            </div>

            {/* AI avatar — RIGHT */}
            {msg.sender === "ai" && (
              <img
                src="/images/roundedshine.png"
                alt="AI"
                className="chat-avatar"
              />
            )}
          </div>
        ))}
      </div>

      {/* ================= INPUT ================= */}
      <div className="chat-input-box">
        <div className="chat-input-row">
          <input
            type="text"
            placeholder="Type here"
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <MicNoneIcon className="mic-icon" />
          <SendIcon className="send-icon" onClick={handleSend} />
        </div>

        <hr className="horizontal-line" />

        <div className="chat-input-actions">
          <div className="left-actions">
            <img src="/images/circlepin.png" alt="attach" />
            <span>Attach</span>

            <img src="/images/document.png" alt="word" />
            <span>Generate Word</span>
          </div>

          <div className="right-actions">
            <span className="char-count">{input.length} / 3000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
