import ChatWindow from "../pages/ChatWindow";
import "../Styling/TeacherDashboard.css";
const TeacherDashboard = () => {
  return (
   <div className="dashboard-page">
      <div className="dashboard-content">

        {/* ===== GREETING SECTION ===== */}
        <div className="dashboard-greeting">
          <h2>
            Good Morning, <span>Darlene Robertson !</span> 
          </h2>
          <p>
            Efficiently manage students, courses, sessions, and attendance with
            the <br/>support of advanced AI tool.
          </p>
        </div>

        {/* ===== CHAT WINDOW ===== */}
       <div className="chat-section">
    <ChatWindow />
  </div>
      </div>
    </div>

  );
};

export default TeacherDashboard;
