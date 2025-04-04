import { Loader } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

export default function AuthForm({ type = "login" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (type === "login") {
      setLoading(true);
      setTimeout(() => {
        const cleanUsername = username.split('@')[0];
        const user = {
          name: cleanUsername,
          id: Math.floor(Math.random() * 10000),
          username: cleanUsername
        };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
        setLoading(false);
      }, 1500);
    } else {
      console.log("Register button clicked - no action taken");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{type === "login" ? "Welcome Back" : "Create an Account"}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label>{type === "login" ? "Username" : "Email"}</label>
            <input
              type={type === "login" ? "text" : "email"}
              className="auth-input"
              placeholder={type === "login" ? "Enter your username" : "Enter your email"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <a href={type === "login" ? "/register" : "/"} className="auth-link">
            {type === "login" ? " Sign up" : " Log in"}
          </a>
        </p>
      </div>
    </div>
  );
}
