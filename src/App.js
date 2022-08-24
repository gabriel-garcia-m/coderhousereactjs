import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <header>
        <p>
          <h1>Bienvenido a mi tiendita de teclados.</h1>
        </p>
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
