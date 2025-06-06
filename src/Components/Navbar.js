import { Link,useLocation } from "react-router-dom";
import logo from './Images/logo2.png';

export default function Navbar() {
  const location = useLocation(); // to highlight the active link

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black" style={{ height: "100px" }}>
        <div className="container-fluid">
          {/* Add logo */}
          <img src={logo} alt="logo" style={{ height: "92px", zIndex: "2", width: "270px" }} />

          {/* Offcanvas Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-end text-bg-dark w-75"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Categories</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-5">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Business", path: "/business" },
                  { name: "Entertainment", path: "/entertainment" },
                  { name: "Health", path: "/health" },
                  { name: "Science", path: "/science" },
                  { name: "Sports", path: "/sports" },
                  { name: "Technology", path: "/technology" }
                ].map((item) => (
                  <li className="nav-item me-3" key={item.name} style={{ fontSize: "18px" }}>
                    <Link
                      className={`nav-link ${location.pathname === item.path ? "active fs-5" : ""}`}
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
