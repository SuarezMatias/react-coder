import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail";
import Loader from "../Loader";
import { getItemById } from "../../firebase/db";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { productId } = useParams();

  useEffect(() => {
   getItemById(productId)
    .then(res => setItem(res))
    .catch(err => console.error("Error charging product:", err));
  }, [productId]);

  return (
    <div className="item-detail-container">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ItemDetailContainer;
