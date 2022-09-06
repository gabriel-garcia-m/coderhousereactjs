import logo from "../../logo.svg";
import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
//import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img width={100} src={logo} alt="logo"></img>
      </div>

      <div>
        <ul>
          <li>
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "claseActive" : "claseInactive"
              }
              to="/"
            >
              Home
            </NavLink> */}
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="https://twitter.com/gabrielgarciam" target="blank">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
      <div>
        <button>Acceso</button>
      </div>
    </div>
  );
};

export default NavBar;
