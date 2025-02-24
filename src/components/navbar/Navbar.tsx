import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4 bg-green-900 text-white'>
        <div className="container flex justify-between text-lg">
          <Link to="/" className="text-3xl">Farmacia</Link>
          <div className='flex gap-4'>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/cadastrar-produtos">Cadastrar</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;