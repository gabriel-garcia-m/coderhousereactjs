import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer/CartContainer";
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <CartProvider>
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
              <Route
                path="/item/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cartcontainer" element={<CartContainer />} />
              <Route path="/contacto" element={<Contact/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
