import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard.js";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailAlertShown, setEmailAlertShown] = useState(false);
  const [passwordAlertShown, setPasswordAlertShown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username) && !emailAlertShown) {
      alert("Please enter a valid email address");
      setUsername("");
      setEmailAlertShown(true);
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]+$/;
    if (!passwordRegex.test(password) && !passwordAlertShown) {
      alert(
        "Password must contain an uppercase letter, a number, and only allow @ as a special character."
      );
      setPassword("");
      setPasswordAlertShown(true);
    }
  };

  const handleLogin = () => {
    if (password === "SmartServTest@123") {
      setLoggedIn(true);
    }
  };

  const handleForgotPassword = () => {
    window.location.href =
      "mailto:support@smartserv.io?subject=Password Reset Request";
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard />
      ) : (
        <form className="form-border">
          <div className="user-name">
            <img
              className="cropped-image"
              src="./login_page.png"
              style={{ width: "100%", marginBottom: "0" }}
              alt="logo"
            />
          </div>
          <div className="user-name">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={validateEmail}
            />
          </div>
          <div className="user-name">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
          </div>
          <div className="user-name">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="user-name">
            <a href="/" onClick={handleForgotPassword}>
              Forgot your password?
            </a>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
