import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuInicial.css";

const MenuInicial = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      {/* Header */}
      <header className="menu-header">
        <h1>Cowculadora</h1>
      </header>

      {/* Botões do Menu */}
      <div className="menu-grid">
        <div className="menu-item" onClick={() => navigate("/registro-animal")}>
          <h2>📋</h2>
          <p>Novo Registro</p>
        </div>
        <div className="menu-item" onClick={() => navigate("/historico")}>
          <h2>📜</h2>
          <p>Histórico</p>
        </div>
        <div
          className="menu-item"
          onClick={() => navigate("/historico-medicamentos")}
        >
          <h2>💊</h2>
          <p>Histórico de Medicamentos</p>
        </div>
        
        <div className="menu-item" onClick={() => navigate("/balanco-vendas")}>
          <h2>📊</h2>
          <p>Balanço de Vendas</p>
        </div>
       
        <div
          className="menu-item"
          onClick={() => navigate("/relatorio-lotes")}
        >
          <h2>🐂</h2>
          <p>Lotes para Abate</p>
        </div>
        {/* Novo Botão da Cowculadora */}
        <div className="menu-item" onClick={() => navigate("/calculadora")}>
          <h2>🧮</h2>
          <p>Cowculadora</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="menu-footer">
        <button className="logout-button" onClick={onLogout}>
          Sair
        </button>
      </footer>
    </div>
  );
};

export default MenuInicial;
