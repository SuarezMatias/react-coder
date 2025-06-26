import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ({item}) => {

  const url = item.images[0] || "https://via.placeholder.com/150";
  return (
    <div className="item-detail-card">
      {item && (
        <Card style={{ width: '400px', margin: '20px auto' }}>
          <Card.Img style={{ width: 'auto' }} variant="top" src={url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Card.Text>Category: {item.category}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
          <Card.Footer>
            <ItemCount />
          </Card.Footer>
        </Card> 
      )}
    </div>
  );
};

export default ItemDetail;
