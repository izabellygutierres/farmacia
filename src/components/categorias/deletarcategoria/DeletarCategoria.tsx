import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";
import { buscarCategoriaPorId, deletar } from "../../../services/Services";

function DeletarCategoria() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            const categoria = await buscarCategoriaPorId(id); 
            setCategoria(categoria); 
        } catch (error) {
            console.error("Erro ao buscar categoria:", error);
            alert("Erro ao buscar categoria.");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id); 
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`, {}); 
            alert('Categoria apagada com sucesso');
        } catch (error) {
            console.error("Erro ao deletar categoria:", error);
            alert('Erro ao deletar a categoria.');
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar essa categoria?
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-green-200 h-full'>
                <header className='py-2 px-6 bg-green-900 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-green-200 h-full'>{categoria.nome}</p>
                <p className='text-xl mt-2  bg-green-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-600 hover:bg-red-800 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-green-600 
                                   hover:bg-green-900 flex items-center justify-center'
                        onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;