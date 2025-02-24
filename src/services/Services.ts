import axios from 'axios';
import Categoria from '../models/Categoria';

const api = axios.create({
  baseURL: 'https://farmacia-jjxo.onrender.com/',

  headers: {
    "Content-Type": "application/json",
  },
});

export const buscarCategoriaPorId = async (id: string) => {
  try {
    const resposta = await api.get(`/categorias/${id}`);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar categoria por ID:', error);
    throw error;
  }
};

export const listarCategorias = async () => {
  try {
    const resposta = await api.get('/categorias');
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
};

export const cadastrarCategoria = async (dados: Categoria) => {
  try {
    const resposta = await api.post('/categorias', dados);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
};

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header)
}

export const atualizarCategoria = async (id: number, dados: Categoria) => {
  try {
    const resposta = await api.put(`/categorias/${id}`, dados);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    throw error;
  }
};