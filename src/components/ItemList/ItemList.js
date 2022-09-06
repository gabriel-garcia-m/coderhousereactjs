import Item from "../Item/Item";

const ItemList = ({ itemsList }) => {
  return (
    <>
      {itemsList.map((prod) => {
        return (
          <Item
            key={prod.id}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            precio={prod.precio}
            imagen={prod.imagen}
          />
        );
      })}
    </>
  );
};

export default ItemList;
