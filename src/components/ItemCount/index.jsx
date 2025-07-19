import { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ item }) => {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(CartContext);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({ id: item.id, name: item.title, unitPrice: item.price, image: item.thumbnail, quantity: count, amount: item.price * count });
            setCount(0);
        }
    };
    
    return (
        <div className="item-count">
            <Button variant="secondary" onClick={decrement}>-</Button>
            <span className="count-display m-2">{count}</span>
            <Button variant="secondary" onClick={increment}>+</Button>
            <div>
                <Button variant="primary" className='m-2' onClick={handleAddToCart} disabled={count === 0}>Add to Cart</Button>
            </div>
        </div>
    );
}

export default ItemCount;