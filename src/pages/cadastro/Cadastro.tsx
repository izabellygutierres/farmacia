import { useState } from 'react';
import { cadastrarCategoria } from '../../services/Services';

function CadastrarCategoria() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dadosCategoria = {
      nome,
      descricao,
    };

    try {
      const resposta = await cadastrarCategoria(dadosCategoria);
      console.log('Categoria cadastrada com sucesso:', resposta);
      setNome('');
      setDescricao('');
      alert('Categoria cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar categoria:', error);
      alert('Erro ao cadastrar categoria. Tente novamente.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Cadastrar Nova Categoria</h1>
      <p>Preencha o formulário abaixo para cadastrar uma nova categoria.</p>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Categoria:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nome da categoria"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Descrição:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descrição da categoria"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastrarCategoria;