import ChatBoard from "../pages/ChatBoard";
import "../Styling/ChatBoard.css"; 

const PrincipalDashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-content">

        {/* ===== GREETING SECTION ===== */}
        <div className="dashboard-greeting">
          <h2>
            Good Morning, <span> Cameron Williamson !</span> 
          </h2>
          <p>
            Efficiently manage students, courses, sessions, and attendance with
            the <br />support of advanced AI tool.
          </p>
        </div>

        {/* ===== CHAT Board ===== */}
        <div className="chat-section">
          <ChatBoard />
        </div>

      </div>
    </div>
  );
};

export default PrincipalDashboard;
