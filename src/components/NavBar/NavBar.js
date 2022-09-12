import logo from "../../logo.svg";
import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link to="/">
          <img width={100} src={logo} alt="logo"></img>
        </Link>
      </div>

      <div>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "claseActive" : "claseInactive"
              }
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "claseActive" : "claseInactive"
              }
              to="/category/60"
            >
              Teclados 60%
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "claseActive" : "claseInactive"
              }
              to="/category/70"
            >
              Teclados 70%+
            </NavLink>
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
