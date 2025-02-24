import React from 'react';

function Produtos() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Produtos da Farmácia</h1>
      <p>Aqui você encontra todos os produtos disponíveis na nossa farmácia.</p>

      <ul className="mt-4">
        <li className="mb-2">
          <h3 className="font-semibold">Produto 1</h3>
          <p>Descrição do produto 1.</p>
        </li>
        <li className="mb-2">
          <h3 className="font-semibold">Produto 2</h3>
          <p>Descrição do produto 2.</p>
        </li>
      </ul>
    </div>
  );
}

export default Produtos;