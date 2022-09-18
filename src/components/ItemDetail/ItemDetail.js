import './itemDetailStyles.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext)
  const [contador, setContador]=useState(0)

  const onAdd = (dato)=>{
    setContador(dato)
    addItem(item, dato)
  }

  return (
    <div className = 'card_container'>
      <img src={item.imagen} alt={item.nombre} width={300} height={200} />
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <p className='price_container'>{item.precio}</p>
      <h6>Contador: {contador}</h6>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetail;
