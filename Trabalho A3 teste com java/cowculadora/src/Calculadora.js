import React, { useState } from "react";
import "./Calculadora.css";

const Calculadora = () => {
  const [peso, setPeso] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [dosagem, setDosagem] = useState(null);

  const medicamentos = {
    Ivomec: 50,
    Tristezina: 20,
    Mogiflix: 40,
    Chorulon: 30,
    "Clorexidina Cetrimida": 15,
    "Panacoxx Suspensão": 25,
    "Neocolin Líquido": 10,
    Estankasangue: 60,
    Ciprolac: 50,
    Cortiflan: 10,
    Beroseg: 7,
  };

  const handleCalculate = () => {
    if (medicamento && peso) {
      const kgPorMl = medicamentos[medicamento];
      const ml = peso / kgPorMl;
      setDosagem(ml);
    } else {
      alert("Por favor, insira o peso do animal e selecione um medicamento.");
    }
  };

  return (
    <div className="calculadora-container">
      <header className="calculadora-header">
        <h1>Cowculadora</h1>
      </header>
      <div className="calculadora-form">
        <label>Peso do Animal (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite o peso"
          required
        />
        <label>Medicamento:</label>
        <select
          value={medicamento}
          onChange={(e) => setMedicamento(e.target.value)}
          required
        >
          <option value="">Selecione um medicamento</option>
          {Object.keys(medicamentos).map((med) => (
            <option key={med} value={med}>
              {med}
            </option>
          ))}
        </select>
        <button onClick={handleCalculate}>Calcular</button>
        {dosagem !== null && (
          <div className="result">
            <p>
              <strong>Dosagem Calculada:</strong> {dosagem.toFixed(2)} ml
            </p>
            {medicamento === "Ivomec" && (
              <p className="warning">
                ⚠ O animal não está apto para o abate em 35 dias após a
                aplicação.
              </p>
            )}
          </div>
        )}
      </div>
      <footer className="calculadora-footer">
        <p>Cowculadora &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Calculadora;
