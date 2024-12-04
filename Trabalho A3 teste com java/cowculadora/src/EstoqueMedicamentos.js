import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./axiosConfig";
import "./EstoqueMedicamentos.css";

const EstoqueMedicamentos = () => {
  const [estoque, setEstoque] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEstoque = async () => {
      try {
        const { data } = await api.get("http://localhost:8080/api/estoque");
        setEstoque(data);
      } catch (error) {
        console.error("Erro ao carregar o estoque de medicamentos:", error);
        alert("Erro ao carregar o estoque de medicamentos.");
      }
    };
    fetchEstoque();
  }, []);

  const adicionarMedicamento = async (nome) => {
    try {
      await api.post("http://localhost:8080/api/estoque/adicionar", { nome });
      alert(`Medicamento ${nome} adicionado ao estoque.`);
      setEstoque((prevEstoque) =>
        prevEstoque.map((medicamento) =>
          medicamento.nome === nome
            ? { ...medicamento, quantidade: medicamento.quantidade + 1 }
            : medicamento
        )
      );
    } catch (error) {
      console.error("Erro ao adicionar medicamento:", error);
      alert("Erro ao adicionar medicamento.");
    }
  };

  const retirarMedicamento = async (nome) => {
    try {
      await api.post("http://localhost:8080/api/estoque/retirar", { nome });
      alert(`Medicamento ${nome} retirado do estoque.`);
      setEstoque((prevEstoque) =>
        prevEstoque.map((medicamento) =>
          medicamento.nome === nome && medicamento.quantidade > 0
            ? { ...medicamento, quantidade: medicamento.quantidade - 1 }
            : medicamento
        )
      );
    } catch (error) {
      console.error("Erro ao retirar medicamento:", error);
      alert("Erro ao retirar medicamento.");
    }
  };

  const verBula = (nome) => {
    navigate(`/bula/${nome}`);
  };

  return (
    <div className="estoque-medicamentos-page">
      {/* Header */}
      <header className="header">
        <h1>Estoque de Medicamentos</h1>
      </header>

      {/* Conteúdo */}
      <div className="estoque-medicamentos-container">
        <div className="estoque-grid">
          {estoque.map((medicamento, index) => (
            <div
              key={index}
              className={`estoque-item ${
                medicamento.quantidade === 0 ? "estoque-baixo" : ""
              }`}
            >
              <h2>{medicamento.nome}</h2>
              <p>Quantidade: {medicamento.quantidade}</p>
              <button
                className="adicionar-button"
                onClick={() => adicionarMedicamento(medicamento.nome)}
              >
                Adicionar
              </button>
              <button
                className="retirar-button"
                onClick={() => retirarMedicamento(medicamento.nome)}
              >
                Retirar
              </button>
              <button
                className="ver-bula-button"
                onClick={() => verBula(medicamento.nome)}
              >
                Ver Bula
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="estoque-footer">
        <p>© {new Date().getFullYear()} Cowculadora</p>
      </footer>
    </div>
  );
};

export default EstoqueMedicamentos;
