import { useEffect, useState } from "react"
import { Navbar, Nav, NavDropdown, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router";
import CartWidget from "../CartWidget"
import "./styles.css"

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const baseUrl = "https://dummyjson.com"

  useEffect(() => {
    fetch(`${baseUrl}/products/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error cargando categorías:", err))

    debugger;  
  }, [])

  return (
    <Navbar bg="light" expand="lg" className="general-nav">
      <Container>        
        <Navbar.Brand>
          <img src="../src/assets/logo.jpg" alt="Logo" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="categories-nav-dropdown">
              {categories.map((cat) => (
                <NavDropdown.Item as={Link} key={cat.slug} to={`/category/${cat.slug}`}>
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>            
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
