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
    return (
        <div className={`navbar ${showNav ? "navbar-left" : "navbar-normal"}`}>
            <div className={`nav-links-container ${showNav ? "nav-links-show" : "nav-links-hide"}`}>
                <Link className="nav-link" to="about" spy={true} smooth={true}>ABOUT</Link>
                <Link className="nav-link" to="webdev" spy={true} smooth={true}>WEB DEV</Link>
                <Link className="nav-link" to="game" spy={true} smooth={true}>GAME DEV</Link>
                <Link className="nav-link" to="art" spy={true} smooth={true}>ART</Link>
                <Link className="nav-link" to="photos" spy={true} smooth={true}>PHOTOGRAPHY</Link>
            </div>
            <div onClick={toggleNav}><i className="fas fa-bars nav-button"></i></div>
        </div>
    )
}

export default NavBar


