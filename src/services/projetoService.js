// src/services/projetoService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/projetos'; // ajuste para a URL correta

export const getProjetos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createProjeto = async (projeto) => {
    const response = await axios.post(API_URL, projeto);
    return response.data;
};

export const updateProjeto = async (projeto) => {
    const response = await axios.put(`${API_URL}/${projeto.id}`, projeto);
    return response.data;
};

export const deleteProjeto = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
