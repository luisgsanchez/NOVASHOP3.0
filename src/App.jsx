import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import Contacto from "./Pages/Contacto";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        {/* PAGINA DE INICIO */}
        <Route path="/" element={<Home />} />

        {/* CATALOGO */}
        <Route path="/productos" element={<ItemListContainer />} />

        {/* CATEGORIAS */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* DETALLE */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* CONTACTO */}
        <Route path="/contacto" element={<Contacto />} />

        {/* CHECKOUT */}
        <Route path="/Checkout" element={<Checkout />} />

        {/* CARRITO */}
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
