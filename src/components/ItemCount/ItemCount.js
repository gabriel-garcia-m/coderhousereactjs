import { useState } from "react";
import "./ItemCountStyle.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const suma = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const resta = () => {
    if (contador >= 1) setContador(contador - 1);
  };

  return (
    <>
      <div className="counter">
        <button className="btn" onClick={resta}>
          -
        </button>
        <div className="count">{contador}</div>
        <button className="btn" onClick={suma}>
          +
        </button>
      </div>
      <button
        className="btnAdd"
        onClick={
          (onAdd = () => {
            if (contador <= stock && contador > 0) {
              console.log("Anadido");
            }
          })
        }
      >
        Añadir a carrito
      </button>
    </>
  );
};

export default ItemCount;
