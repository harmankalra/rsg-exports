import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import RSG from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", delay: "0.1s" },
    { path: "/about", label: "About", delay: "0.2s" },
    { path: "/product", label: "Products", delay: "0.3s" },
    { path: "/private", label: "Private Labelling", delay: "0.4s" },
    { path: "/gallery", label: "Gallery", delay: "0.5s" },
    { path: "/contact", label: "Contact", delay: "0.6s" },
  ];

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mainNavbar">
      <div className="navbar">
        <div className="navbarImg">
          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
          </div>

          <div
            className={`menu-overlay ${isOpen ? "active" : ""}`}
            onClick={closeMenu}
          ></div>

          <div className={`mobileMenu ${isOpen ? "active" : ""}`}>
            <div className="mobileNavItems">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={closeMenu}
                  style={{ animationDelay: item.delay }}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/">
            <img loading="lazy" src={RSG || "/placeholder.svg"} alt="Logo" />
          </Link>
        </div>

        <div className="navbarItems">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="navbarContact"></div>
      </div>
    </div>
  );
}

export default Header;
