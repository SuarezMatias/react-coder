import { ShoppingCart } from "lucide-react";
import "./styles.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCart />
      <span className="cart-badge">3</span>
    </div>
  );
};

export default CartWidget;
