import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { listarCategorias } from '../../../services/Services';
import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardcategoria/CardCategoria';

const ListCategories: React.FC = () => {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await listarCategorias();
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Categorias</h1>
      <button
        onClick={() => navigate('/categorias/cadastrar')}
        className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Cadastrar Nova Categoria
      </button>
      {categorias.map((categoria) => (
        <CardCategoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
};

export default ListCategories;