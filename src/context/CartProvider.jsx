import { CartContext } from './CartContext';
import { useState } from 'react';

function CartProvider({ children }) {
const [cart, setCart] = useState([]);

const addToCart = (item) => {
  setCart((previousStateCart) => {
    const existingItem = previousStateCart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      return previousStateCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity, amount: cartItem.amount + item.amount }
          : cartItem
      );
    }
    return [...previousStateCart, { ...item, quantity: item.quantity }];
  });
};

const getQuantity = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

const getTotalPrice = () => {
  return cart.reduce((total, item) => total + item.amount, 0);
};

return (
  <CartContext.Provider value={{cart, addToCart, getQuantity, getTotalPrice}}>
    {children}
  </CartContext.Provider>
);
}

export default CartProvider;