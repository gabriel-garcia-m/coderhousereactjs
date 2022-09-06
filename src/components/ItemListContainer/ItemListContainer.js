import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import datos from "./muestra-datos";
import { useState, useEffect } from "react";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <div>
      <h2>Mira los {greeting}</h2>
      <ItemCount stock={10} initial={1} />
       <div>
        {items.length > 0 ? (
        <ItemList itemsList = {items}/>
        ): (
          <div>Obteniendo productos...</div>
        )}
      </div> 
    </div>
  );
}

export default ItemListContainer;
