import React, { useEffect, useState } from 'react';
import api from "./axiosConfig";
import './HistoricoMedicamentos.css';

const HistoricoMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const { data } = await api.get('medicamentos');
        setMedicamentos(data);
      } catch (err) {
        console.error('Erro ao buscar histórico de medicamentos:', err);
        setError('Erro ao carregar os medicamentos.');
      } finally {
        setLoading(false);
      }
    };

    fetchMedicamentos();
  }, []);

  return (
    <div className="historico-container">
      <h2>Histórico de Medicamentos</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : medicamentos.length === 0 ? (
        <p>Nenhum medicamento encontrado.</p>
      ) : (
        <div className="historico-content">
          {medicamentos.map((medicamento) => (
            <div key={medicamento.id} className="historico-item">
              <p>ID: {medicamento.id}</p>
              <p>Nome: {medicamento.nome}</p>
              <p>ML: {medicamento.ml}</p>
              <p>KG: {medicamento.kg}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoricoMedicamentos;
