import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Card, ListGroup, Image, Button } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from "react-router";

const Cart = () => {
    const { cart, getTotalPrice, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <div className="cart-container d-flex gap-3 justify-content-center flex-wrap">
            <Card className="mb-3 w-75">
                <ListGroup as="ol" numbered>
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <ListGroup.Item as="li" style={{backgroundColor: '#F9A619'}} className="d-flex align-items-center" key={item.id}>
                                <div className="cart-item d-flex align-items-center gap-3 w-100">
                                    <Image className="ml-2" style={{width: '100px'}} src={item.image} thumbnail />
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                         <div className="item-details">
                                            <div className="first-row">
                                                <h5 className="m-0">{item.name}</h5>
                                            </div>
                                            <div className="second-row d-flex gap-2">
                                                <p className="m-0">Quantity: {item.quantity}</p>
                                                <p className="m-0">Unit Price: ${item.unitPrice}</p>
                                            </div>
                                        </div>
                                        <div className="item-total-price">
                                            <p className="m-0">Total: ${item.amount}</p>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <FaTrash />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))
                    ) : (<p>Your cart is empty</p>)}                 
                </ListGroup>
            </Card>
            <Card className="total-price p-3">
                <Card.Body>
                    <h5>Total Price: ${getTotalPrice()}</h5>
                </Card.Body>
                <Card.Footer className="bg-transparent p-0">
                    <Button variant="dark" className="mt-3 w-100 mx-auto" disabled={cart.length === 0} onClick={() => navigate('/checkout')}>Checkout</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Cart;