import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axiosConfig";
import "./RegistroTratamento.css";

const RegistroTratamento = () => {
  const [animalId, setAnimalId] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [dataAplicacao, setDataAplicacao] = useState("");
  const navigate = useNavigate();

  // Lista de medicamentos predefinidos
  const medicamentosPredefinidos = [
    "Ivermectina",
    "Dexametasona",
    "Enrofloxacina",
    "Fluorfenicol",
    "Meloxicam",
    "Tilmicosina",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("tratamentos", {
        animalId,
        medicamento,
        quantidade,
        dataAplicacao,
      });
      navigate(`/detalhes-animal/${animalId}`);
    } catch (error) {
      console.error("Erro ao registrar tratamento:", error);
      alert("Erro ao registrar o tratamento. Tente novamente.");
    }
  };

  return (
    <div className="registro-tratamento-page">
      <header className="registro-tratamento-header">
        <h1>Registro de Tratamento</h1>
      </header>

      <div className="registro-tratamento-card">
        <h2>Informe os Dados do Tratamento</h2>
        <form onSubmit={handleSubmit} className="registro-tratamento-form">
          <div className="form-group">
            <label htmlFor="animalId">ID do Animal:</label>
            <input
              type="text"
              id="animalId"
              value={animalId}
              onChange={(e) => setAnimalId(e.target.value)}
              required
              placeholder="Digite o ID do Animal"
            />
          </div>
          <div className="form-group">
            <label htmlFor="medicamento">Medicamento:</label>
            <select
              id="medicamento"
              value={medicamento}
              onChange={(e) => setMedicamento(e.target.value)}
              required
            >
              <option value="">Selecione o Medicamento</option>
              {medicamentosPredefinidos.map((med, index) => (
                <option key={index} value={med}>
                  {med}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantidade">Quantidade (mL):</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
              placeholder="Digite a Quantidade"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dataAplicacao">Data da Aplicação:</label>
            <input
              type="date"
              id="dataAplicacao"
              value={dataAplicacao}
              onChange={(e) => setDataAplicacao(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="registro-tratamento-button">
            Registrar Tratamento
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroTratamento;
