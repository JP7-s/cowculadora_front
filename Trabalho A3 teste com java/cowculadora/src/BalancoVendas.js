import React from "react";
import { Bar } from "react-chartjs-2";
import "./BalancoVendas.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const vendas = [
  { mes: "Janeiro", quantidade: 120, lucro: 360000 },
  { mes: "Fevereiro", quantidade: 150, lucro: 450000 },
  { mes: "Março", quantidade: 140, lucro: 420000 },
  { mes: "Abril", quantidade: 180, lucro: 540000 },
  { mes: "Maio", quantidade: 200, lucro: 600000 },
  { mes: "Junho", quantidade: 170, lucro: 510000 },
  { mes: "Julho", quantidade: 190, lucro: 570000 },
  { mes: "Agosto", quantidade: 160, lucro: 480000 },
  { mes: "Setembro", quantidade: 175, lucro: 525000 },
  { mes: "Outubro", quantidade: 185, lucro: 555000 },
  { mes: "Novembro", quantidade: 195, lucro: 585000 },
  { mes: "Dezembro", quantidade: 210, lucro: 630000 },
];

const BalancoVendas = () => {
  const dataQuantidade = {
    labels: vendas.map((venda) => venda.mes),
    datasets: [
      {
        label: "Quantidade de Animais Vendidos",
        data: vendas.map((venda) => venda.quantidade),
        backgroundColor: "rgba(0, 123, 255, 0.7)", // Azul
        borderColor: "#0056b3",
        borderWidth: 1,
      },
    ],
  };

  const dataLucro = {
    labels: vendas.map((venda) => venda.mes),
    datasets: [
      {
        label: "Lucro (R$)",
        data: vendas.map((venda) => venda.lucro),
        backgroundColor: "rgba(40, 167, 69, 0.7)", // Verde
        borderColor: "#1e7e34",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#333",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#333",
          callback: (value) => (value > 1000 ? `R$${value / 1000}k` : value),
        },
        grid: {
          color: "#e6e6e6",
        },
      },
    },
  };

  return (
    <div className="balanco-vendas-container">
      <header className="header">
        <h1>Balanço de Vendas</h1>
      </header>
      <div className="chart-wrapper">
        <h2>Quantidade de Animais Vendidos</h2>
        <Bar data={dataQuantidade} options={options} />
      </div>
      <div className="chart-wrapper">
        <h2>Lucro (R$)</h2>
        <Bar data={dataLucro} options={options} />
      </div>
    </div>
  );
};

export default BalancoVendas;
