import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail";
import "./styles.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const baseUrl = "https://dummyjson.com/products";
    fetch(`${baseUrl}/${productId}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching item details:", err));
  }, [productId]);

  return (
    <div className="item-detail-container">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Loading item details...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
