import Item from "../Item";
import { Container, Row, Col } from "react-bootstrap"
import "./styles.css";

const ItemList = ({ items }) => {
  return (
    <Container className="item-list-container my-4">
      {items.length > 0 ? (
        <Row className="g-4">
          {items.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>No items available</p>
      )}
    </Container>
  );
};

export default ItemList;
