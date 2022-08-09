import Cartwidget from "../Cartwidget/Cartwidget";
import { Link, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/NavBar.css";
import { useCartContext } from "../../Context/CartContext";
import CantProd from "../CantProd/CantProd";

function NavScrollExample() {

  const { cantidadTotal } = useCartContext();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">ElBebedero</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <Link className="nav-link" to={"/categoria/vinos"}>
              Vinos
            </Link>
            <NavLink className="nav-link" to="/categoria/cerveza">
              Cervezas
            </NavLink>
            <NavLink className="nav-link" to="/categoria/licores">
              Licores
            </NavLink>
            <NavLink className="nav-link" to="/categoria/varios">
              Stuffs
            </NavLink>
          </Nav>

          <Link className="nav-link d-flex" to="/cart">
            {/* <div className="cantProductos">{cantidadTotal() !== 0 && cantidadTotal()}</div> */}
            <CantProd/>
            <Cartwidget />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
