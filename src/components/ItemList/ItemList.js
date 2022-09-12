import Item from "../Item/Item";
import './itemListStyles.css'

const ItemList = ({ itemsList }) => {
  return (

    <div className="contenedorItem">
      
      {itemsList.map((prod) => {
        return (
            <div >
            <Item
              id={prod.id}
              nombre={prod.nombre}
              descripcion={prod.descripcion}
              precio={prod.precio}
              imagen={prod.imagen}
            />
            </div>
          
        );
      })}
      
    </div>
  );
};

export default ItemList;
