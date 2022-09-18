import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

  const isInCart = (idProducto) => {
    const isInProd = productCartList.some((item) => item.id === idProducto);
    return isInProd;
  };

  const addItem = (item, quantity) => {
    const newProduct = {
      ...item,
      quantity,
    };
    if (isInCart(item.id)) {
      const prod = productCartList.findIndex(
        (producto) => producto.id === item.id
      );
      const newArray = [...productCartList];
      newArray[prod].quantity = newArray[prod].quantity + quantity;
      setProductCartList(newArray);
    } else {
      const newList = [...productCartList];
      newList.push(newProduct);
      setProductCartList(newList);
    }
  };

  const removeItem = (itemId) => {
    const newList = productCartList.filter((prod) => prod.id !== itemId);
    setProductCartList(newList);
  };

  const clearCart = () => {
    setProductCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ productCartList, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
