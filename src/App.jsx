import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";


function App() {
  return (

    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer mensaje={'Bienvenidos al Bebedero - Drink Store'} />} />
        
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
