import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export const CartContainer = () => {
  const { productCartList, removeItem, clearCart, getPrecioTotal } =
    useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

  const enviarOrden = (event) => {
    event.preventDefault();
    // console.log("Orden enviada", event);
    // console.log("nombre", event.target[0].value);
    const order = {
      buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      items: productCartList,
      total: getPrecioTotal(),
      date: getDate(),
    };
    console.log("order", order);

    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then((response) => {
      console.log("response", response);
      setIdOrder(response.id);
      clearCart()
    });
  };

  const getDate = () => {
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date
 
  };
  const updateOrder = () => {
    const queryRef = doc(db, "orders", "cWlTcp6yk1kf8pBy5UUE");
    updateDoc(queryRef, {
      buyer: {
        name: "panchito",
        phone: "123",
        email: "123@olo.com",
      },
      items: [
        {
          category: "60",

          imagen:
            "https://firebasestorage.googleapis.com/v0/b/tiendita-teclados.appspot.com/o/k1.jpg?alt=media&token=5ef8fcd4-f3f6-4ec3-8e47-e177fca29c9e",

          precio: 100,
          quantity: 1,
          quantityPrice: 100,
          nombre: "Mechanical Keyboard 60% K1",
        },
      ],
      total: 400,
    }).then((response) => console.log(response));
  };
  return (
    <div>
      {/* <button onClick={updateOrder}>Actualizar pedido</button> */}
      <h1>Carrito de compras</h1>
      {idOrder.length > 0 ? 
       <p>Orden creada: {idOrder}</p>:
      productCartList.length > 0 ? (
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
          <p>
            <button onClick={clearCart}>Remover todos los artículos</button>
          </p>
          <p>Precio total del carrito: {getPrecioTotal()}</p>
          <form onSubmit={enviarOrden}>
            <label>Nombre:</label>
            <input type="text"></input>
            <label>Telefono:</label>
            <input type="text"></input>
            <label>Correo:</label>
            <input type="email"></input>
            <button type="submit">Enivar pedido</button>
          </form>
        </div>
      ) : (
        <div>
          <p>Tu carrito está vació, añade artículos.</p>
          <Link to="/">Ir al listado de teclados...</Link>
        </div>
      )}
    </div>
  );
};
