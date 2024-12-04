import React from "react";
import { useParams } from "react-router-dom";
import "./LoteDetalhes.css";

const LoteDetalhes = () => {
  const { id } = useParams();

  const lotesDetalhes = {
    1: {
      nome: "Lote 1",
      quantidade: 50,
      pesoMedio: 400,
      dataFrigorifico: "2024-11-30",
      medicamentos: [
        { nome: "Ivomec", dataAplicacao: "2024-11-01" },
        { nome: "Terramicina", dataAplicacao: "2024-11-10" },
      ],
      observacoes: "Medicamento aplicado há menos de 20 dias.",
    },
    2: {
      nome: "Lote 2",
      quantidade: 70,
      pesoMedio: 450,
      dataFrigorifico: "2024-12-10",
      medicamentos: [
        { nome: "Chorulon", dataAplicacao: "2024-10-15" },
        { nome: "Ciprolac", dataAplicacao: "2024-11-01" },
      ],
      observacoes: "Pronto para abate.",
    },
  };

  const lote = lotesDetalhes[id];

  if (!lote) {
    return <p>Detalhes do lote não encontrados.</p>;
  }

  return (
    <div className="lote-detalhes-page">
      {/* Header */}
      <header className="lote-detalhes-header">
        <h1>Detalhes do {lote.nome}</h1>
      </header>

      {/* Conteúdo */}
      <div className="lote-detalhes-container">
        <p><strong>Quantidade:</strong> {lote.quantidade}</p>
        <p><strong>Peso Médio:</strong> {lote.pesoMedio} kg</p>
        <p><strong>Data de Envio ao Frigorífico:</strong> {lote.dataFrigorifico}</p>

        <h2>Medicamentos Aplicados</h2>
        <ul>
          {lote.medicamentos.map((med, index) => (
            <li key={index}>
              <strong>Nome:</strong> {med.nome} | <strong>Data de Aplicação:</strong> {med.dataAplicacao}
            </li>
          ))}
        </ul>

        <p><strong>Observações:</strong> {lote.observacoes}</p>
      </div>
    </div>
  );
};

export default LoteDetalhes;
