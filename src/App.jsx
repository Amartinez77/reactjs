import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContextProvider from "./Context/CartContext";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Col from "react-bootstrap/Col";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

function App() {



  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App ">
          <Navbar />
          <Col>
            <div className="container">
              <h1 className="text-center">Bienvenidos al Bebedero</h1>

            </div>
          </Col>
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/error404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error404" />} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
