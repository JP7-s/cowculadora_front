import React, { useState } from "react";
import "./AdicionarMedicamento.css";

const AdicionarMedicamento = () => {
  const [nome, setNome] = useState("");
  const [composicao, setComposicao] = useState("");
  const [indicacao, setIndicacao] = useState("");
  const [modoDeUso, setModoDeUso] = useState("");
  const [contraIndicacoes, setContraIndicacoes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Medicamento adicionado com sucesso!");
    setNome("");
    setComposicao("");
    setIndicacao("");
    setModoDeUso("");
    setContraIndicacoes("");
  };

  return (
    <div className="adicionar-container">
      <header className="adicionar-header">
        <h1>Adicionar Medicamento</h1>
      </header>
      <form className="adicionar-form" onSubmit={handleSubmit}>
        <label>
          Nome do Medicamento:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Composição:
          <textarea
            value={composicao}
            onChange={(e) => setComposicao(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Indicação:
          <textarea
            value={indicacao}
            onChange={(e) => setIndicacao(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Modo de Uso:
          <textarea
            value={modoDeUso}
            onChange={(e) => setModoDeUso(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          Contraindicações:
          <textarea
            value={contraIndicacoes}
            onChange={(e) => setContraIndicacoes(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit" className="adicionar-button">
          Adicionar Medicamento
        </button>
      </form>
      <footer className="adicionar-footer">
        <p>Cowculadora &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default AdicionarMedicamento;
