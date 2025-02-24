import { Link } from "react-router-dom";
import ListCategories from "../../components/categorias/listacategoria/ListaCategoria";
import Produtos from "../produtos/Produtos";

function Home() {
    return (
      <>
        <div className="bg-green-900 flex justify-center">
          <div className="container grid grid-cols-2 text-white">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className="text-5xl font-bold">
                Bem-vindo à Nossa Farmácia!
              </h2>
              <p className="text-xl">
                Encontre aqui os melhores produtos para sua saúde e bem-estar.
              </p>
  
              <div className="flex justify-around gap-4">
                <div
                  className="rounded text-white border-white border-solid border-2 py-2 px-4">
                  <Link to="/produtos">
                Ver Produtos
              </Link>
                </div>
              </div>
            </div>
  
            <div className="flex justify-center">
              <img
                src="https://i.imgur.com/gzPHaRE.png"
                alt="Imagem Página Home Farmácia"
                className="w-2/3"
              />
            </div>
          </div>
        </div>

        <Produtos/>
      </>
    );
  }
  
  export default Home;