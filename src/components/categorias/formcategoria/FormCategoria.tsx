import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { buscarCategoriaPorId, atualizarCategoria, cadastrarCategoria } from "../../../services/Services";

function FormCategoria() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({
    nome: "",
    descricao: "",
  });
  const { id } = useParams<{ id: string }>();

  // Busca a categoria por ID ao carregar o componente
  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id)
        .then((categoria) => {
          setCategoria(categoria); // Preenche o estado com os dados da categoria
        })
        .catch((error) => {
          console.error("Erro ao buscar categoria:", error);
          alert("Erro ao buscar categoria.");
        });
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizarCategoria(parseInt(id), categoria); 
        alert("Categoria atualizada com sucesso.");
      } catch (error) {
        console.error("Erro ao atualizar a Categoria", error);
        alert("Erro ao atualizar a Categoria.");
      }
    } else {
      try {
        await cadastrarCategoria(categoria);
        alert("Categoria cadastrada com sucesso.");
      } catch (error) {
        console.error("Erro ao cadastrar a Categoria", error);
        alert("Erro ao cadastrar a Categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-rose-700 rounded p-2"
            value={categoria.nome}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <textarea
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-rose-700 rounded p-2"
            value={categoria.descricao}
            onChange={atualizarEstado}
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-rose-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;