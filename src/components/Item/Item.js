const Item = ({ id, nombre, descripcion, precio, imagen }) => {
  return (
    <div>
      <img src={imagen} alt={nombre} width={200} height={200}/>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>{precio}</p>
    </div>
  );
};

export default Item;
