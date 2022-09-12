import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="teclados:" />}
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting="teclados de esta categoría:" />
              }
            />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
