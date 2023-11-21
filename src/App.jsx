import ItemListContainer from "./components/ItemListContainer/ItemListCOntainer";
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Elije la realidad a explorar'}/>
    </>
  );
}

export default App;
