import ItemDetail from "../ItemDetail/ItemDetail";
import datos from "../ItemListContainer/muestra-datos";
import { useState, useEffect } from "react";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      
      resolve(datos);
      
    }, 2000);
  });

  useEffect(() => {
    getItem.then((result) => {
      console.log('debug', result)
      setItem(result.find(e => e.id === 1));
    });
  }, []);

  return (
    <div><hr/>
      <h1>Detalle de Artículo</h1><ItemDetail item = { item }/>
    </div>
  );
}

export default ItemDetailContainer;
