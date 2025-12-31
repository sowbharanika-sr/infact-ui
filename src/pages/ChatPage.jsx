import "../Styling/ChatPage.css";
import SendIcon from "@mui/icons-material/Send";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicNoneIcon from "@mui/icons-material/MicNone";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ChatPage = () => {
  /* ================= TIME ================= */
  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const { studentId } = useParams();
  const navigate = useNavigate();

  /* ================= STATE ================= */
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  /* ================= DATA ================= */
  const students = [
    { id: 1, name: "Ariprashath", avatar: "/images/a1.png", roll: "INF001" },
    { id: 2, name: "Albert Flores", avatar: "/images/a2.png", roll: "INF002" },
    { id: 3, name: "Devon Lane", avatar: "/images/a3.png", roll: "INF103" },
    { id: 4, name: "Cody Fisher", avatar: "/images/a4.png", roll: "INF104" },
    { id: 5, name: "Dianne Russell", avatar: "/images/a5.png", roll: "INF105" },
    { id: 6, name: "Theresa Webb", avatar: "/images/a6.png", roll: "INF106" },
    { id: 7, name: "Darrell Steward", avatar: "/images/a7.png", roll: "INF107" },
    { id: 8, name: "Bessie Cooper", avatar: "/images/a8.png", roll: "INF108" },
    { id: 9, name: "Courtney Henry", avatar: "/images/a9.png", roll: "INF109" },
  ];

  const currentStudent = students.find(
    (s) => s.id === Number(studentId)
  );

  /* ================= SEND MESSAGE ================= */
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      side: "right",
      text: input,
      time: getCurrentTime(),
      
    };

    const aiMessage = {
      side: "left",
      text: "Thanks for your message. I'll get back to you shortly.",
      time: getCurrentTime(),
       
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  /* ================= UI ================= */
  return (
    <>
    {/* ===== PAGE TITLE (FIGMA: XI Standard | B Section) ===== */}
    <div className="chat-page-wrapper">
     <div className="page-title-bar">
      <span className="back-arrow" onClick={() => navigate(-1)}><KeyboardBackspaceRoundedIcon /></span>
      <span className="page-title-text">
    XI Standard<span className="divider">|</span>B Section
      </span>
     </div>
    </div>

    <div className="chat-page">
      {/* LEFT PANEL */}
      <aside className="chat-sidebar">
        <h4 className="sidebar-title">Student List</h4>
      <div>
        <SearchRoundedIcon className="search-icon" />
        <div className="sidebar-search">
          <input placeholder="       Search students here" className="input-search" />
        </div>
</div>  <hr className="horizontal-line"/>
        <ul className="student-list">
          {students.map((s) => (
            <li
              key={s.id}
              className={`student ${
                Number(studentId) === s.id ? "active" : ""
              }`}
              onClick={() => navigate(`/chat-page/${s.id}`)}
            >
              <img src={s.avatar} alt={s.name} />
              <span>{s.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* RIGHT PANEL */}
      <section className="chat-window">
        {/* HEADER */}
        <div className="chat-header">
          <div className="chat-user">
            <div className="header-avatar online">
            <img src={currentStudent?.avatar} alt="" />
            </div>
            <div>
              <h4>
                {currentStudent?.name} ({currentStudent?.roll})
              </h4>
              <p>Class Name | XI</p>
            </div>
          </div>

           <div className="chat-header-actions">
    <button className="call-btn">
      <CallRoundedIcon className="call" /> Call
    </button>
    <MoreVertIcon className="more-icon" />
  </div>
        </div>

        {/* MESSAGES */}
       
        {messages.length > 0 && (
          <div className="chat-day-divider">
            <span>Today</span>
          </div>
        )}

       <div className="chat-messages">
  {messages.map((msg, i) => (
  <div key={i} className={`msg-row ${msg.side}`}>
    
    {/* AVATAR */}
    {msg.side === "left" && (
      <img src={currentStudent?.avatar} alt="student" className="msg-avatar" />
    )}

    {/* MESSAGE BUBBLE */}
    <div className={`msg ${msg.side}`}>
      <p className="msg-text">{msg.text}</p>
      <span className="msg-time">{msg.time}</span>
    </div>

    {msg.side === "right" && (
      <img src="/images/profile.png" alt="profile" className="msg-avatar" />
    )}

  </div>
))}

</div>

        {/* INPUT */}
        <div className="chat-input-box">
          <div className="chat-input-row">
            <input
              type="text"
              placeholder="Type here"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              maxLength={3000}
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
              <span className="char-count">
                {input.length} / 3000
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ChatPage;