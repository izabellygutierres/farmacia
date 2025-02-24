import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Produtos from "./pages/produtos/Produtos";
import Categorias from "./pages/categorias/Categoria";
import CadastrarProdutos from "./pages/cadastro/Cadastro";
//import ListarCategorias from "./components/ListarCategorias";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/cadastrar-produtos" element={<CadastrarProdutos />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;