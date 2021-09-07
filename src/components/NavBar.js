import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link className="nav-link" to="about" spy={true} smooth={true}>ABOUT</Link>
            <Link className="nav-link" to="webdev" spy={true} smooth={true}>WEB DEV</Link>
            <Link className="nav-link" to="game" spy={true} smooth={true}>GAME DEV</Link>
            <Link className="nav-link" to="art" spy={true} smooth={true}>ART</Link>
            <Link className="nav-link" to="photos" spy={true} smooth={true}>PHOTOGRAPHY</Link>
            <Link className="nav-link" to="contact" spy={true} smooth={true}>CONTACT</Link>         
        </div>
    )
}

export default NavBar


