import { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Context = createContext()

const App = () => {

const [cart, setCart] = useState([])

const addItem = (productToAdd) => {
  if(!isInCart(productToAdd.id)){
    setCart(prev => [...prev, productToAdd])
  } else {
    console.error('Producto ya agregado')
  }
}

const isInCart = (productId) => {
  return cart.some(prod => prod.id === productId)
}



  return (
    <>
      <BrowserRouter>
      <Context.Provider value={{ cart, isInCart, addItem }}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Continua tu misión"} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting={"Productos por Categoría"} />}
          />

          <Route path="/detail/:productId" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
