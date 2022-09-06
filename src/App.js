import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <div>
    <NavBar/>
    <header>
      <p>
        <h1>Bienvenido a mi tiendita de teclados.</h1>
        
      </p>
    </header>
    <ItemListContainer greeting = 'teclados:'/>
    <ItemDetailContainer />
  </div>
    // <BrowserRouter>
    //   <div>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" element={<ItemListContainer />} />
    //       <Route path="/d" element={<ItemDetailContainer />} />
    //     </Routes>
      
    //   </div>
    // </BrowserRouter>

  );
}

export default App;
