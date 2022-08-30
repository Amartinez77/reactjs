import Cartwidget from "../Cartwidget/Cartwidget";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/NavBar.css";
import CantProd from "../CantProd/CantProd";
import logoNav from "../../images/elbebedero3.png";


function NavBar () {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to={"/"}>
          <img src={logoNav} alt="" className="imgLogo" />
        </Link>

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
            <NavLink className="nav-link" to="/categoria/strongDrinks">
              Licores
            </NavLink>
            <NavLink className="nav-link" to="/categoria/packs">
              Stuffs
            </NavLink>
          </Nav>

          <Link className="nav-link d-flex" to="/cart">
            <CantProd />
            <Cartwidget />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar

