import './itemDetailStyles.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom'

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
      <p className='price_container'>Precio: $US {item.precio}</p>
     
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>

      {
          contador > 0 &&
          <Link to='/cartcontainer'>
          <button className='btnTerminar'>Terminar mi compra</button>
          </Link>
      }
    </div>
  );
};

export default ItemDetail;
