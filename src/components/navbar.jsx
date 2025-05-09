import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contex/ThemeProvider'; // ✔️ make sure this path is correct
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, themeToggle } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-section">
        <h1 className="navbar-logo">E-Commerce</h1>
      </div>

      <div className="navbar-section">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>

      <div className="navbar-section">
        <button className="login-button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="login-button" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
        <button className="theme-toggle" onClick={themeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
