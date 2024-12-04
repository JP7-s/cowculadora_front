import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "./axiosConfig";
import "./BulaMedicamento.css";

const BulaMedicamento = () => {
  const { nome } = useParams();
  const [medicamento, setMedicamento] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicamento = async () => {
      try {
        const { data } = await api.get(`http://localhost:8080/api/bulas/`);
        setMedicamento(data);
      } catch (error) {
        console.error("Erro ao buscar a bula do medicamento:", error);
        alert("Erro ao carregar a bula do medicamento.");
      }
    };

    fetchMedicamento();
  }, [nome]);

  if (!medicamento) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="bula-medicamento-page">
      {/* Header */}
      <header className="bula-medicamento-header">
        <h1>Bula: {medicamento.nome}</h1>
      </header>

      {/* Conteúdo */}
      <div className="bula-medicamento-container">
        <div className="bula-section">
          <h2>Composição</h2>
          <p>{medicamento.composicao}</p>
        </div>
        <div className="bula-section">
          <h2>Para que serve</h2>
          <p>{medicamento.paraQueServe}</p>
        </div>
        <div className="bula-section">
          <h2>Indicações</h2>
          <p>{medicamento.indicacoes}</p>
        </div>
        <div className="bula-section bula-alerta">
          <h2>Contraindicações e Cuidados</h2>
          <p>{medicamento.contraIndicacoes}</p>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/estoque")}>
        Voltar ao Estoque
      </button>
    </div>
  );
};

export default BulaMedicamento;
