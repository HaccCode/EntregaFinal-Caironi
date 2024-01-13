import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Continua tu misión"} />}
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting={"Productos por Categoría"} />
              }
            />

            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
