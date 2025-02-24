import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Produtos from "./pages/produtos/Produtos";
import CadastrarCategoria from "./pages/cadastro/Cadastro";
import ListarCategorias from "./components/categorias/listacategoria/ListaCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/categorias"  element={<ListarCategorias />} />
            <Route path="/categorias/cadastrar" element={<CadastrarCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria/>} />
            <Route path="/editarcategoria/:id" element={<FormCategoria/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;