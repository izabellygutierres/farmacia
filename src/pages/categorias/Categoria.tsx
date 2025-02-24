import React from 'react';

function Categorias() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Categorias de Produtos</h1>
      <p>Selecione uma categoria para ver os produtos relacionados.</p>

      <ul className="mt-4">
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:underline">Medicamentos</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:underline">Higiene Pessoal</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:underline">Vitaminas e Suplementos</a>
        </li>
      </ul>
    </div>
  );
}

export default Categorias;