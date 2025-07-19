import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemList';
import { getItems, getItemsByCategory } from '../../firebase/db';
import "./styles.css";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();
    
    useEffect(() => {

      categoryName && categoryName !== "all"
        ? getItemsByCategory(categoryName).then(res => setItems(res))
        : getItems().then(res => setItems(res))
    }, [categoryName]);

  return (
    <ItemList items={items} />
  );
};

export default ItemListContainer;
