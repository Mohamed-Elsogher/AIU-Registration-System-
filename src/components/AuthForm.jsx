'use client';
import { useState } from 'react';
import { Loader } from 'lucide-react';
import './AuthForm.css';

export default function AuthForm({ type = "login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (type === "login") {
        if (email === "admin@example.com" && password === "password123") {
          alert("Login successful!");
        } else {
          setError("Invalid email or password");
        }
      } else {
        alert("Registration successful! You can now log in.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{type === "login" ? "Welcome Back" : "Create an Account"}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label>Email</label>
            <input
              type="email"
              className="auth-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="auth-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="auth-button"
          >
            {loading ? <Loader className="loader" size={20} /> : type === "login" ? "Login" : "Register"}
          </button>
        </form>
        <p className="auth-footer">
          {type === "login" ? "Don't have an account?" : "Already have an account?"} 
          <a href={type === "login" ? "/register" : "/login"} className="auth-link">
            {type === "login" ? " Sign up" : " Log in"}
          </a>
        </p>
      </div>
    </div>
  );
}
