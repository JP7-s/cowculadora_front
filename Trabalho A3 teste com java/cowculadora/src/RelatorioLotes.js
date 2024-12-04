import React, { useEffect, useState } from "react";
import api from "./axiosConfig";
import "./RelatorioLotes.css";

const RelatorioLotes = () => {
  const [lotes, setLotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLotes = async () => {
      try {
        const { data } = await api.get("lotes");
        setLotes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar lotes:", error);
        setError("Erro ao carregar os lotes. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchLotes();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relatorio-lotes-page">
      <header className="relatorio-lotes-header">
        <h1>Relatório de Lotes</h1>
      </header>
      <div className="relatorio-lotes-content">
        {lotes.length > 0 ? (
          lotes.map((lote) => (
            <div key={lote.id} className="lote-card">
              <h2>{lote.nome}</h2>
              <p>Quantidade: {lote.quantidade}</p>
            </div>
          ))
        ) : (
          <p>Nenhum lote disponível no momento.</p>
        )}
      </div>
    </div>
  );
};

export default RelatorioLotes;
