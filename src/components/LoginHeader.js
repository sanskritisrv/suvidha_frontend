import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LoginHeader.css';

function LoginHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Hide hamburger menu on login page
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <div className="login-header">
        <div className="login-header-left">
          {!isLoginPage && (
            <div className="hamburger-menu" onClick={toggleSidebar} aria-label="Toggle menu" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') toggleSidebar(); }}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}
          <div className="logo-box">
            <img
              src="https://i.ibb.co/2dQZqZB/suvidha-logo.png"
              alt="Suvidha Foundation Logo"
              className="login-header-logo"
            />
          </div>
          <div className="login-header-text">
            <div className="foundation-name">SUVIDHA FOUNDATION</div>
            <div className="mandal-name">SUVIDHA MAHILA MANDAL</div>
            <div className="tagline">SERVING SOCIETY SINCE 1995</div>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/suvidha-foundation/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A66C2" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E4405F" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
          </a>
        </div>
      </div>
      <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to="/profile" onClick={() => setIsSidebarOpen(false)}>Profile</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsSidebarOpen(false)}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default LoginHeader;
