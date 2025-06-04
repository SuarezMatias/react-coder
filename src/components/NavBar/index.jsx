import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src="../src/assets/logo.jpg" alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li>Productos</li>
        <li>Accesorios</li>
        <li>Salud y Bienestar</li>
        <li>Juguetes</li>
        <li>Cuidado Personal</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
