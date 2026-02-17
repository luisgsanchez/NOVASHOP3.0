import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 py-3">
      <Link className="navbar-brand fw-bold fs-3 glow" to="/">
        NOVASHOP
      </Link>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-semibold" to="/">
              NovaShop
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link text-white fw-semibold"
              to="/category/productos"
            >
              Productos
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link text-white fw-semibold"
              to="/contacto"
            >
              Contacto
            </NavLink>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
