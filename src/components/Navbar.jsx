import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        // Set initial active link based on current path
        const path = window.location.pathname;
        setActiveLink(path === "/" ? "home" : 
                      path === "/courses" ? "courses" :
                      path === "/faculty" ? "faculty" :
                      path === "/research" ? "research" :
                      path === "/contact" ? "contact" : "");

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll and set active link
    const handleNavClick = (section) => {
        setActiveLink(section);
        setIsOpen(false);
        
        // Scroll to top if it's the same page
        if (window.location.pathname === `/${section === 'home' ? '' : section}`) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-brand">
                <a href="/" onClick={() => handleNavClick("home")}>
                    <h1>AIU.</h1>
                </a>
            </div>

            {/* Animated Hamburger Menu */}
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
                    <a 
                        className={`nav-link ${activeLink === "home" ? "active" : ""}`} 
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("home");
                            window.history.pushState({}, "", "/");
                        }}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === "courses" ? "active" : ""}`} 
                        href="/courses"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("courses");
                            window.history.pushState({}, "", "/courses");
                        }}
                    >
                        Courses
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === "faculty" ? "active" : ""}`} 
                        href="/faculty"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("faculty");
                            window.history.pushState({}, "", "/faculty");
                        }}
                    >
                        Faculty
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === "research" ? "active" : ""}`} 
                        href="/research"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("research");
                            window.history.pushState({}, "", "/research");
                        }}
                    >
                        Research
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link ${activeLink === "contact" ? "active" : ""}`} 
                        href="/contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("contact");
                            window.history.pushState({}, "", "/contact");
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;