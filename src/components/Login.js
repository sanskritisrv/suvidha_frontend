import React, { useState, useEffect } from 'react';
import LoginHeader from './LoginHeader';
import { toast } from 'react-toastify';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // Removed showFooter state as footer is no longer needed

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
      toast.error('Email is required');
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = 'Invalid email format';
      toast.error('Invalid email format');
    }
    if (!password) {
      newErrors.password = 'Password is required';
      toast.error('Password is required');
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      toast.error('Password must be at least 6 characters');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate async login
      setTimeout(() => {
        setLoading(false);
        onLogin();
        toast.success('Login successful');
      }, 1500);
    }
  };

  // Removed useEffect for scroll event as footer is no longer needed

  return (
    <>
      <LoginHeader />
      <div className="login-container">
        <div className="login-left-panel" aria-hidden="true">
          <img src="/suvidha-logo.png" alt="Suvidha Foundation Logo" className="logo" />
          <p className="quote">“Empowering Students. Connecting Campuses.”</p>
        </div>
        <div className="login-form-container">
          <h2>Login to TPO Management Portal</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? 'input-error' : ''}
                placeholder=" "
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? 'input-error' : ''}
                placeholder=" "
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            <div className="form-extra">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? (
                <>
                  Logging in
                  <span className="spinner" />
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
      {/* Removed footer rendering as per user request */}
    </>
  );
}

export default Login;
