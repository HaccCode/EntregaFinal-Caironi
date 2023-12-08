import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Continua tu misión..."} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
