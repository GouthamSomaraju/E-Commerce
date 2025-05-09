import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contex/ThemeProvider";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, themeToggle } = useTheme();

  const [user, setUser] = useState(localStorage.getItem("user"));

  // Sync user status on localStorage change (initially or from other tabs)
  useEffect(() => {
    const syncUser = () => setUser(localStorage.getItem("user"));
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-section">
        <h1 className="navbar-logo">E-Commerce</h1>
      </div>

      <div className="navbar-section">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-section">
      <button className="theme-toggle" onClick={themeToggle}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        {user ? (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div className="auth-user">
            <button className="login-button" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="login-button"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        )}

        
      </div>
    </nav>
  );
};

export default Navbar;
