import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="header">
        <h1>Login - Cowculadora</h1>
      </header>

      {/* Login Form */}
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Acesse sua conta</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer1">
        <p>&copy; 2024 Cowculadora</p>
      </footer>
    </div>
  );
};

export default Login;
