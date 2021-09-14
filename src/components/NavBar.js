import { Link } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    function toggleNav() {
      if (showNav == true) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    }

    function hideNav() {
        setShowNav(false); 
    }
    return (
        <nav className={`navbar ${showNav ? "navbar-left" : "navbar-normal"}`}>
            <div className={`nav-links-container ${showNav ? "nav-links-show" : "nav-links-hide"}`}>
                <Link onClick={hideNav} className="nav-link" to="about" spy={true} smooth={true}>ABOUT</Link>
                <Link onClick={hideNav} className="nav-link" to="webdev" spy={true} smooth={true}>WEB DEV</Link>
                <Link onClick={hideNav} className="nav-link" to="game" spy={true} smooth={true}>GAME DEV</Link>
                <Link onClick={hideNav} className="nav-link" to="art" spy={true} smooth={true}>ART</Link>
                <Link onClick={hideNav} className="nav-link" to="photos" spy={true} smooth={true}>PHOTOGRAPHY</Link>
                <Link onClick={hideNav} className="nav-link" to="contact" spy={true} smooth={true}>CONTACT</Link>
            </div>
            <div onClick={toggleNav} className={`nav-button ${showNav ? "nav-button-active" : ""}`}><i className="fas fa-bars"></i></div>
        </nav>
    )
}

export default NavBar