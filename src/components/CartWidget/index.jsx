import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import {  Button } from "react-bootstrap";
import { Link } from "react-router";
import { useContext } from "react";
import "./styles.css";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <Button variant="ligth" className="cart-button" as={Link} to={'/cart'}>
        <ShoppingCart color="orange" />
      </Button>
      <span className="cart-badge">{getQuantity()}</span>
    </div>
  );
};

export default CartWidget;
