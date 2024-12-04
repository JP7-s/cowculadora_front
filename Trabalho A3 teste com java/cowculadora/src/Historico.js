import React, { useEffect, useState } from "react";
import api from "./axiosConfig";
import "./Historico.css";

const Historico = () => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchAnimais = async () => {
      try {
        const { data } = await api.get("animals");
        setAnimais(data || []);
      } catch (error) {
        console.error("Erro ao buscar animais:", error);
      }
    };

    fetchAnimais();
  }, []);

  return (
    <div className="historico-page">
      <header className="historico-header">
        <h1>Histórico de Animais</h1>
      </header>
      <div className="historico-content">
        {animais.length > 0 ? (
          animais.map((animal) => (
            <div key={animal.id} className="animal-card">
              <h2>ID: {animal.id}</h2>
              <p>
                <strong>Espécie:</strong> {animal.especie}
              </p>
              <p>
                <strong>Data de Nascimento:</strong> {animal.dataNascimento}
              </p>
              <p>
                <strong>Peso:</strong> {animal.peso} kg
              </p>
              <p>
                <strong>Lote:</strong> {animal.lote?.nome || "Sem lote"}
              </p>
            </div>
          ))
        ) : (
          <p className="no-animals-message">Nenhum animal registrado.</p>
        )}
      </div>
    </div>
  );
};

export default Historico;
