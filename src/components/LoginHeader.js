import React from 'react';
import './LoginHeader.css';

function LoginHeader() {
  return (
    <div className="login-header">
      <div className="login-header-left">
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
    </div>
  );
}

export default LoginHeader;
