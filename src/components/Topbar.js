import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styling/Topbar.css";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* ================= ROLE DETECTION ================= */
  const isPrincipal =
    location.pathname.startsWith("/principal") ||
    location.pathname.includes("/teacher-list");

  const isTeacherUser =
    location.pathname.includes("teacher") ||
    location.pathname.includes("class") ||
    location.pathname.includes("student") ||
    location.pathname.includes("chat");

  /* ================= ACTIVE STATES ================= */
  const isDashboard = location.pathname.includes("dashboard");

  const isTeacher = location.pathname.includes("teacher-list");

 
  const isClass =
    location.pathname.includes("class-list") ||
    location.pathname.includes("student-list") ||
    location.pathname.includes("chat");

  return (
    <div className="header-wrapper">
       <div className="logo-blur"></div>
  {/* LEFT LOGO (FULL WIDTH) */}
  <div className="infact-logo">
    <img src="/images/infactlogo.png" alt="Infact Logo" />
  </div>
    
    <div className="topbar">
      {/* ================= LEFT ================= */}
      <div className="topbar-left">
        <div className="nav-tabs">
          {/* DASHBOARD */}
          <button
            className={`tab-btn ${isDashboard ? "active" : ""}`}
            onClick={() =>
              navigate(
                isPrincipal
                  ? "/principal-dashboard"
                  : "/teacher-dashboard"
              )
            }
          >
            <img src="/images/app.png" alt="dashboard" />
            Dashboard
          </button>

          {/* PRINCIPAL → TEACHER */}
          {isPrincipal && (
            <button
              className={`tab-btn ${isTeacher ? "active" : ""}`}
              onClick={() => navigate("/teacher-list")}
            >
              <img src="/images/userprof.png" alt="teacher" />
              Teacher
            </button>
          )}

          {/* TEACHER → CLASS */}
          {isTeacherUser && !isPrincipal && (
            <button
              className={`tab-btn ${isClass ? "active" : ""}`}
              onClick={() => navigate("/class-list")}
            >
              <img src="/images/book.png" alt="class" className="book-img" />
              Class
            </button>
          )}
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="topbar-right">
        <div className="icon-circle">
          <img src="/images/search.png" alt="search" />
        </div>
        <div className="icon-circle">
          <img src="/images/settings.png" alt="settings" />
        </div>
        <div className="icon-circle">
          <img src="/images/notification.png" alt="notification" />
        </div>

        <div className="profile">
          <img
            src={
              isPrincipal
                ? "/images/teach1.png"
                : "/images/profile.png"
            }
            alt="profile"
            className="profile-img"
          />

          <div className="profile-info">
            <span className="name">
              {isPrincipal
                ? "Cameron Williamson"
                : "Darlene Robertson"}
            </span>
            <span className="role">
              {isPrincipal ? "Principal" : "Class Teacher"}
            </span>
          </div>

          <img
            src="/images/downarrow.png"
            alt="down"
            className="down"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Topbar;
