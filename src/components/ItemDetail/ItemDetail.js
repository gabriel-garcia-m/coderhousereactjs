import Item from "../Item/Item";

const ItemDetail = ({ item }) => {
  return (
    <>
      {item.find(prod => prod.name === 'Mechanical Keyboard 60% K1')}
      {console.log('Test',item)}
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
