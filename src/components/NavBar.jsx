import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 py-3">
      
      {/* LOGO → INICIO */}
      <Link className="navbar-brand fw-bold fs-3 glow" to="/">
        NOVASHOP
      </Link>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

          {/* INICIO */}
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-semibold" to="/">
              Inicio
            </NavLink>
          </li>

          {/* CATALOGO GENERAL */}
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-semibold" to="/productos">
              Productos
            </NavLink>
          </li>

          {/* CATEGORIAS */}
          <li className="nav-item dropdown">
            <span
              className="nav-link text-white fw-semibold dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Categorías
            </span>

            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" to="/category/forros">
                  Forros
                </NavLink>
              </li>

              <li>
                <NavLink className="dropdown-item" to="/category/celulares">
                  Celulares
                </NavLink>
              </li>

              <li>
                <NavLink className="dropdown-item" to="/category/cargadores">
                  Cargadores
                </NavLink>
              </li>
            </ul>
          </li>

          {/* CONTACTO */}
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-semibold" to="/contacto">
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
