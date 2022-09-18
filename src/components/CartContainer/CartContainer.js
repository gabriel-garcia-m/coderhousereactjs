import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'

export const CartContainer = () => {
  const { productCartList, removeItem, clearCart , getPrecioTotal } = useContext(CartContext);
  return (
    <div>
<h1>Carrito de compras</h1>
  {productCartList.length > 0 ? 


      
      <div>
        {productCartList.map((item) => (
          <>
           
              <p>Teclado: {item.nombre}</p> 
              <p> Cantidad: {item.quantity}</p>
              <p>Precio unitario: {item.precio} USD</p>
              <p>Precio productos: {item.quantityPrice}</p>
            
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
            
          </>
        ))}
        <p><button onClick={clearCart}>Remover todos los artículos</button></p> 
        <p>Precio total del carrito: {getPrecioTotal()}</p>
      </div>
      : 
      <div>
      <p>Tu carrito está vació, añade artículos.</p>
      <Link to='/'>
      Ir al listado de teclados...
      </Link>
      </div>
      }
    </div>
  );
};
