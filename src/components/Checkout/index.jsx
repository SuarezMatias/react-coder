import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NotificationContext } from "../../context/NotificationContext/NotificationContext";
import {
  Card,
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Modal,
} from "react-bootstrap";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../firebase/db";
import { useNavigate } from "react-router";

const Checkout = () => {
  const [validated, setValidated] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clearCart } = useContext(CartContext);
  const { showToast } = useContext(NotificationContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.target;

    setValidated(true);
    if (form.checkValidity()) {
      setIsLoading(true);

      const name = form.name.value;
      const lastName = form.lastName.value;
      const username = form.username.value;
      const address = form.address.value;
      const city = form.city.value;
      const state = form.state.value;
      const zip = form.zipcode.value;
      const email = form.email.value;
      const phone = form.phone.value;

      const orderDetails = {
        user: {
          name,
          lastName,
          username,
          email,
          phone,
          addressline: { address, city, state, zip },
        },
        items: cart,
        time: serverTimestamp(),
      };

      createOrder(orderDetails)
        .then((orderId) => {
          setOrderId(orderId);
          setIsLoading(false);
          setShow(true);
          clearCart();
        })
        .catch((error) => {
          setIsLoading(false);
          showToast(
            "There was an error creating your order. Please try again later.",
            "danger"
          );
          console.error("Error: ", error);
        });
    }
  };

  return (
    <>
      <Card className="w-50 mx-auto my-5 p-4">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              className="text-start"
              as={Col}
              md="4"
              controlId="name"
              onSubmit={handleSubmit}
            >
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="text-start"
              as={Col}
              md="4"
              controlId="lastName"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="text-start"
              as={Col}
              md="4"
              controlId="username"
            >
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="text-start"
              as={Col}
              md="4"
              controlId="address"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pellegrini 4985"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-start" as={Col} md="3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="text-start"
              as={Col}
              md="3"
              controlId="state"
            >
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="text-start"
              as={Col}
              md="2"
              controlId="zipcode"
            >
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="text-start"
              as={Col}
              md="6"
              controlId="email"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="text-start"
              as={Col}
              md="6"
              controlId="phone"
            >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="+5492236833609" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" variant="dark" disabled={isLoading}>
            {isLoading ? 'Sending pay…' : 'Buy Now 💳'}
          </Button>
        </Form>
      </Card>
      {orderId && (
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="text-center">
            <p className="m-0">{"Thanks for your purchase! 🎉"}</p>
            <p>{`We're processing your order now.`}</p>
            <p className="mt-2 fw-bold">{`Your Order ID is: #${orderId}`}</p>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <Button onClick={() => navigate("/")}>Return to home</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Checkout;
