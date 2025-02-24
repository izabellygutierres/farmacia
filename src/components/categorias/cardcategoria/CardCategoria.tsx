import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border-gray-300 border rounded overflow-hidden justify-between'>
      <div className='p-4'>
        <h4 className='text-lg font-semibold uppercase'>{categoria.nome}</h4>
        <p className='text-gray-700 mt-2'>{categoria.descricao}</p> 
      </div>
      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className='w-full text-slate-100 bg-blue-600 hover:bg-blue-900 flex items-center justify-center py-2'
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className='text-white bg-red-600 hover:bg-red-900 w-full flex items-center justify-center py-2'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;