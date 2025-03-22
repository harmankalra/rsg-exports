import { useState, useEffect } from "react"
import "./Header.css"
import RSG from "../assets/logo.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="mainNavbar">
      <div className="navbar">
        <div className="navbarImg">

          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
            <span className={`bar ${isOpen ? "active" : ""}`}></span>
          </div>

          <div className={`menu-overlay ${isOpen ? "active" : ""}`} onClick={closeMenu}></div>
          <div className={`mobileMenu ${isOpen ? "active" : ""}`}>
            <div className="mobileNavItems">
              <a href="/" style={{ animationDelay: "0.1s" }}>
                <span>Home</span>
              </a>
              <a href="/about" style={{ animationDelay: "0.2s" }}>
                <span>About</span>
              </a>
              <a href="/contact" style={{ animationDelay: "0.3s" }}>
                <span>Contact</span>
              </a>
              <a href="/products" style={{ animationDelay: "0.4s" }}>
                <span>Products</span>
              </a>
              <a href="/gallery" style={{ animationDelay: "0.5s" }}>
                <span>Gallery</span>
              </a>
              {/* <a href="/blog" style={{ animationDelay: "0.6s" }}>
                <span>Blog</span>
              </a> */}
            </div>
          </div>
          <a href="/">
            <img loading="lazy"  src={RSG || "/placeholder.svg"} alt="" />
          </a>
        </div>

        <div className="navbarItems">
          <a href="/"><span>Home</span></a>
          <a href="/about"><span>About</span></a>
          <a href="/contact"><span>Products</span></a>
          <a href="/gallery"><span>Gallery</span></a>
          {/* <a href="/blog"><span>Blog</span></a> */}
          <a href="/contact"><span>Contact</span></a>
        </div>
        <div className="navbarContact">
       
        </div>
      </div>
    </div>
  )
}

export default Header
