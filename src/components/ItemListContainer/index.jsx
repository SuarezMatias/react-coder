import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemList';
import "./styles.css";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();
    const baseUrl = 'https://dummyjson.com/products';
    
    useEffect(() => {
        const url = `${baseUrl}`;
        const urlCategory = `${baseUrl}/category/${categoryName}`;

        fetch(categoryName ? urlCategory : url)
        .then(res => res.json())
        .then(res => setItems(res.products))
        }
    , [categoryName]);

  return (
    <ItemList items={items} />
  );
};

export default ItemListContainer;
