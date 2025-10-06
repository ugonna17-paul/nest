import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h3 className="logo">Neststacx</h3>
                    <p>
                        We specialize in elevating business efficiency and innovation through
                        our expert IT consulting services.
                    </p>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">ABOUT US</Link></li>
                            <li><a href="#">SERVICES</a></li>
                            <li><Link to="/blog">BLOG</Link></li>
                            <li><a href="#">CAREERS</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Zoho CRM Solutions</a></li>
                            <li><a href="#">Monday.com Solutions</a></li>
                            <li><a href="#">Automation with Zapier</a></li>
                            <li><a href="#">Digital Transformation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* ✅ New Column */}
                    <div>
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="mailto:info@techma.com">info@Neststacx.com</a></li>
                            <li><a href="tel:+2348012345678">+234 801 234 5678</a></li>
                            <li><a href="#">123 Innovation Street, Lagos, Nigeria</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Copyright © 2024 Neststacx, Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
