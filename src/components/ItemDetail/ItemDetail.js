import Item from "../Item/Item";

const ItemDetail = ({ item }) => {
  return (
    <>
      <Item
        key={item.id}
        nombre={item.nombre}
        descripcion={item.descripcion}
        precio={item.precio}
        imagen={item.imagen}
      />
    </>
  );
};

export default ItemDetail;
