import Cartwidget from "../Cartwidget/Cartwidget";

const Navbar = () => {
    return (
    
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#bodyy">
                    ElBebedero
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#bodyy">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="bodyy">
                            Vinos
                    </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="bodyy">
                            Cervezas
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="bodyy">
                        Licores
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="bodyy">
                        Stuffs
                        </a>
                    </li>
            
                    <li className="nav-item">
                        <a className="nav-link" href="bodyy">
                            <Cartwidget/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
