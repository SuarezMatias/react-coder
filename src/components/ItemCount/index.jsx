import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    
    return (
        <div className="item-count">
            <Button variant="secondary" onClick={decrement}>-</Button>
            <span className="count-display">{count}</span>
            <Button variant="secondary" onClick={increment}>+</Button>
        </div>
    );
}

export default ItemCount;