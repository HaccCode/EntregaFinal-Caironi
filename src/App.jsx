import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Continua tu misión..."} />
    </>
  );
}

export default App;
