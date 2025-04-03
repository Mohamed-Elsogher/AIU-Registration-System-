import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        setActiveLink(location.pathname === "/" ? "home" : location.pathname.slice(1));

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-brand">
                <Link to="/" onClick={() => setActiveLink("home")}>
                    <h1>AIU.</h1>
                </Link>
            </div>

            <div 
                className={`menu-toggle ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`navbar-nav ${isOpen ? "active" : ""}`}>
                <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "home" ? "active" : ""}`} to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "courses" ? "active" : ""}`} to="/courses" onClick={() => setIsOpen(false)}>
                        Courses
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "faculty" ? "active" : ""}`} to="/faculty" onClick={() => setIsOpen(false)}>
                        Faculty
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "research" ? "active" : ""}`} to="/research" onClick={() => setIsOpen(false)}>
                        Research
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${activeLink === "contact" ? "active" : ""}`} to="/contact" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
