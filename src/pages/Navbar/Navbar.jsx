import React, { useState } from 'react'
// import logo from '../../assets/Images/logo.png'
import brand from '../../assets/Images/nest2.png'
import { Link } from "react-router-dom";
import '../Allcss/Nav.css'
import { HashLink } from "react-router-hash-link";




const Navbar = () => {

    // scroll offset function
    const scrollWithOffset = (el) => {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className='navbar'>
            <img src={brand} alt="Logo" />

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger-icon" onClick={toggleMenu}>
                &#9776;
            </div>

            <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><Link to="/about">ABOUT US</Link></li>
                    <HashLink smooth to="/#services" scroll={scrollWithOffset}>
                        SERVICES
                    </HashLink>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to='/career'>CAREERS</Link></li>
                </ul>
                <button className="btn">GET IN TOUCH</button>
            </div>
        </div>
    )
}


export default Navbar
