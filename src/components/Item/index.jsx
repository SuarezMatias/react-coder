import "./styles.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router";


const Item = ({item}) => {
  const url = item.thumbnail || "https://via.placeholder.com/150";
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver más</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
