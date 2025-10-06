import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from '../../assets/Images/about.png'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image" data-aos="fade-right">
                    <img src={about} alt="Teamwork illustration" />
                </div>

                <div className="about-content" data-aos="fade-left">
                    <h2>
                        About <span>Us</span>
                    </h2>
                    <p>
                        At Neststacx, we specialize in elevating business efficiency and innovation through our expert IT consulting services.
                        Our partnership with Zoho CRM, Zapier, Monday.com, and the latest AI technologies positions us to offer top-notch
                        solutions in system setup, implementation, automation, and integration.
                    </p>

                    <div className="about-stats">
                        <div>
                            <h3>05+</h3>
                            <p>Years<br />experience</p>
                        </div>
                        <div>
                            <h3>24/7</h3>
                            <p>Active<br />online</p>
                        </div>
                        <div>
                            <h3>800+</h3>
                            <p>Completed<br />projects</p>
                        </div>
                    </div>

                    <button className="about-btn" data-aos="fade-up" data-aos-delay="500">
                        Learn More About Us <span>&#10132;</span>
                    </button>
                </div>
            </div>
        </section>

    )
}
export default About