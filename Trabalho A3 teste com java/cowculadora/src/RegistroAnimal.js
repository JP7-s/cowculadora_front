import React, { useState, useEffect } from "react";
import api from "./axiosConfig";
import { useNavigate } from "react-router-dom";
import "./RegistroAnimal.css";

const RegistroAnimal = () => {
  const [especie, setEspecie] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [peso, setPeso] = useState("");
  const [loteId, setLoteId] = useState("");

  const [animais, setAnimais] = useState([]);
  const [lotes, setLotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const { data } = await api.get("animals");
        setAnimais(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar lotes:", error);
      }
    }

    const fetchLotes = async () => {
      try {
        const { data } = await api.get("lotes");
        setLotes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar lotes:", error);
      }
    };

    fetchAnimals();
    fetchLotes();
  }, []);

  const handleRegistro = async () => {
    if (!especie || !dataNascimento || !peso) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const novoAnimal = {
      especie,
      dataNascimento,
      peso,
      loteId: loteId || null,
    };

    try {
      const { data } = await api.post("animals", novoAnimal);
      alert("Animal registrado com sucesso!");

      setAnimais([...animais, { id: data.id, ...novoAnimal }]);

      navigate("/historico");
    } catch (error) {
      console.error("Erro ao registrar animal:", error);
      alert("Erro ao registrar o animal. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="registro-animal-page">
      <header className="registro-animal-header">
        <h1>Registro de Animal</h1>
      </header>
      <div className="registro-container">
        <div className="registro-box">
          <h2>Preencha os detalhes do animal</h2>

          <label>Espécie:</label>
          <input
            type="text"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            placeholder="Ex: Bovino"
          />

          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />

          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 450"
          />

          <label>Lote:</label>
          <select
            value={loteId}
            onChange={(e) => setLoteId(e.target.value)}
          >
            <option value="">Nenhum lote</option>
            {lotes.map((lote) => (
              <option key={lote.id} value={lote.id}>
                {lote.nome}
              </option>
            ))}
          </select>

          <button onClick={handleRegistro}>Registrar</button>
        </div>

        <div className="animais-list">
          <h2>Animais Registrados</h2>
          <ul>
            {animais.map((animal) => (
              <li key={animal.id}>
                {animal.especie} - {animal.peso} kg - Nascido em {animal.dataNascimento}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistroAnimal;
