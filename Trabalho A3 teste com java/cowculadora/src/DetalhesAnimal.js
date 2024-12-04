import React, { useEffect, useState } from 'react';
import api from "./axiosConfig";
import { useParams } from 'react-router-dom';
import './DetalhesAnimal.css';

const DetalhesAnimal = () => {
    const { id } = useParams();
    const [atendimentos, setAtendimentos] = useState([]);

    useEffect(() => {
        const fetchAtendimentos = async () => {
            try {
                const { data } = await api.get(`animals`);
                setAtendimentos(data);
            } catch (error) {
                console.error('Erro ao buscar atendimentos do animal:', error);
            }
        };

        fetchAtendimentos();
    }, [id]);

    return (
        <div className="detalhes-animal-container">
            <h2>Detalhes dos Animais</h2>
            <div className="atendimentos-list">
                {atendimentos.length > 0 ? (
                    atendimentos.map((atendimento) => (
                        <div key={atendimento.id} className="atendimento-item">
                            <p>ID: {atendimento.id}</p>
                            <p>Peso: {atendimento.peso}</p>
                            <p>Idade: {atendimento.idade}</p>
                            <p>Data de Registro: {atendimento.dataRegistro}</p>
                            <p>Medicamento: {atendimento.medicamento}</p>
                        </div>
                    ))
                ) : (
                    <p>Nenhum atendimento encontrado para este animal.</p>
                )}
            </div>
        </div>
    );
};

export default DetalhesAnimal;
