import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        setActiveLink(location.pathname === "/" ? "home" : location.pathname.slice(1));
        
        const checkLoginStatus = () => {
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            setIsLoggedIn(loggedIn);
        };
        
        checkLoginStatus();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setDropdownOpen(false);
        navigate('/');
    };

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
                {isLoggedIn ? (
                    <li className="nav-item dropdown">
                        <div 
                            className={`nav-link dropdown-toggle ${dropdownOpen ? "active" : ""}`}
                            onClick={toggleDropdown}
                        >
                            Student Portal
                        </div>
                        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                            <li>
                                <Link to="/dashboard" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/academic" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    Academic Records
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage-classes" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    Manage Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/view-classes" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    View My Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/drop-classes" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    Drop Classes
                                </Link>
                            </li>
                            <li>
                                <Link to="/enrollment-appointment" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    Enrollment Appointment
                                </Link>
                            </li>
                            <li>
                                <Link to="/payments" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    Payments
                                </Link>
                            </li>
                            <li>
                                <Link to="/settings" onClick={() => {setIsOpen(false); setDropdownOpen(false);}}>
                                    Settings
                                </Link>
                            </li>
                            <li className="dropdown-divider"></li>
                            <li>
                                <a href="#" onClick={(e) => {e.preventDefault(); handleLogout();}}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === "login" ? "active" : ""}`} to="/login" onClick={() => setIsOpen(false)}>
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
