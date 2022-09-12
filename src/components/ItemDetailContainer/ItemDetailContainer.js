import './itemDetailContainerStyles.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import datos from "../ItemListContainer/muestra-datos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [item, setItem] = useState([]);

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
      const producto = datos.find((item) => item.id === parseInt(id));
      resolve(producto);
    });
  };
  useEffect(() => {
    const getProducto = async () => {
      const detalle = await getItem(productId);

      setItem(detalle);
    };
    getProducto();
  }, [productId]);

  return (
    <div>
      
      <h1>Detalle de Artículo</h1>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
