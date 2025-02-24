import React from 'react';

function CadastrarProdutos() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Cadastrar Novo Produto</h1>
      <p>Preencha o formulário abaixo para cadastrar um novo produto.</p>

      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nome do Produto:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nome do produto" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Descrição:</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Descrição do produto"></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarProdutos;