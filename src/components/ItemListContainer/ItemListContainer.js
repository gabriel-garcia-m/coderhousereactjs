import './itemListContainerStyles.css'
import ItemList from "../ItemList/ItemList";
import datos from "./muestra-datos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 2000);
  });

  useEffect(() => {
    getData.then((result) => {
      if (categoryId) {
        const filteredProd = result.filter(
          (item) => item.category === categoryId
        );
        setItems(filteredProd);
      } else {
        setItems(result);
      }
    });
  }, [categoryId]);

  return (
    <div >
      <h2>Mira los {greeting}</h2>
      
      <div className='contenedorItemList'>
        {items.length > 0 ? (
          <ItemList itemsList={items} />
        ) : (
          <div>Obteniendo productos...</div>
        )}

      </div>
    </div>
  );
}

export default ItemListContainer;
