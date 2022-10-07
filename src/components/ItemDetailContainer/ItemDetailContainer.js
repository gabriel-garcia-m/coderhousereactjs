import "./itemDetailContainerStyles.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import datos from "../ItemListContainer/muestra-datos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import { async } from "@firebase/util";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = doc(db, "items", productId);
      const response = await getDoc(query);

      const newProduct = {
        ...response.data(),
        id: response.id,
      };
      setItem(newProduct);
    };
    getData();
  }, [productId]);

  return (
    <div>
      <h2>Mira los detalles del teclado:</h2>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
