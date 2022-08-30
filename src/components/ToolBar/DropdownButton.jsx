import { Link, NavLink } from "react-router-dom";
import "../ToolBar/DropdownButton.css";

function DropdownButton() {
  return (
    <div className="ddownB">
      <div className="list-group list-group-flush">
        <li className="list-group-item">Filtros</li>
        <li className="list-group-item">
          <Link className="nav-link" to={"/categoria/vinos"}>
            Vinos
          </Link>
        </li>
        <li className="list-group-item">
          <NavLink className="nav-link" to="/categoria/cerveza">
            Cervezas
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className="nav-link" to="/categoria/strongDrinks">
            Licores
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className="nav-link" to="/categoria/packs">
            Stuffs
          </NavLink>
        </li>
        <hr />
      </div>
    </div>
  );
}

export default DropdownButton;
