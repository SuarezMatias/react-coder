import { useEffect, useState } from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import CartWidget from "../CartWidget"
import { getCategories } from "../../firebase/db";
import "./styles.css"

const NavBar = () => {
  const [categories, setCategories] = useState([])
  getCategories().then(res => setCategories(res))

  useEffect(() => {
    
  }, [])

  return (
    <Navbar bg="light" expand="lg" className="general-nav mb-5">
      <Container>        
        <Navbar.Brand as={NavLink} to={`/`}>
            <img src="../src/assets/logo.jpg" alt="Logo" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="categories-nav-dropdown" >
              <NavDropdown.Item as={NavLink} to={`/category/all`}>
                  {"All categories"}
                </NavDropdown.Item>
              {categories.map((cat) => (
                <NavDropdown.Item as={NavLink} key={cat.slug} to={`/category/${cat.slug}`}>
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
