import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () => {
  const { productCartList, removeItem, clearCart } = useContext(CartContext);
  return (
    <div>
      <h1>Carrito de compras</h1>
      <div>
        {productCartList.map((item) => (
          <>
            <p>
              Teclado: {item.nombre} - Cantidad: {item.quantity}
            </p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </>
        ))}
        <p><button onClick={clearCart}>Remover todos los artículos</button></p> 
      </div>
    </div>
  );
};
