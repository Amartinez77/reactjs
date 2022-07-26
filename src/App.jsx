import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route index path="/" element={<ItemListContainer mensaje={'Bienvenidos al Bebedero - Drink Store'} />} />
          <Route index path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>  
      </div>
      
    </BrowserRouter>
  );
}

export default App;
