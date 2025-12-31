import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Login.css";

const Login = () => {
  const [role, setRole] = useState("principal");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // BASIC VALIDATION
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    console.log("Password: ",password, " Password Length: ",password.length)
    if ( password.length < 5) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    if (role === "principal") {
      navigate("/principal-dashboard");
    } else {
      navigate("/teacher-dashboard");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* LOGO */}
        <img
          src="/images/infactlogo.png"
          alt="Infact Logo"
          className="login-logo"
        />

        <h2 className="welcome-text">Welcome back</h2>

        <p className="subtitle">Sign in to your account as</p>

        {/* ROLE TOGGLE */}
        <div className="role-toggle">
          <button
            className={role === "principal" ? "role-btn active" : "role-btn"}
            onClick={() => setRole("principal")}
          >
            <img src="/images/crown.png" alt="principal" />
            Principal
          </button>

          <button
            className={role === "teacher" ? "role-btn active" : "role-btn"}
            onClick={() => setRole("teacher")}
          >
            <img src="/images/userprof.png" alt="teacher" />
            Teacher
          </button>
        </div>

        {/* EMAIL */}
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* ERROR */}
        {error && <p className="error-text">{error}</p>}

        {/* LOGIN BUTTON */}
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
