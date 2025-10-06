import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import hero from '../../assets/Images/hero.png'
import AOS from 'aos'
import { FaAppStoreIos, FaUsers, FaCog, FaLightbulb, FaHandshake, FaCheckCircle, FaCloudDownloadAlt, FaQuoteRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import 'aos/dist/aos.css'
import '../../pages/Allcss/Home.css'
// import Typed from "react-typed"
import { HashLink } from "react-router-hash-link";

import fiverr from '../../assets/Images/fiverr.png';
import premiere from '../../assets/Images/premiere.png';
import gopro from '../../assets/Images/gopro.png';
import dotmac from '../../assets/Images/dotmac.png';
import leon from '../../assets/Images/high3.png';
import About from '../About-page/About';
import whyImg from '../../assets/Images/choose.png'
import approachImg from '../../assets/Images/approach.png'
import contact from '../../assets/Images/contact.jpg'
import zoho from '../../assets/Images/zoho.png'
import saleforce from '../../assets/Images/n8n.png'
import zapier from '../../assets/Images/zap.png'
import monday from '../../assets/Images/monday.png'
import pipedrive from '../../assets/Images/pipedrive.png'
import level from '../../assets/Images/lvl.png'
import make from '../../assets/Images/make.png'
import Footer from '../Footer/Footer';
import TeamSection from '../TeamSection';


const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });
    }, [])

    const reviews = [
        {
            name: 'Vincent Ehindero',
            title: 'CEO, HighFoster',
            quote: "It’s a great pleasure working with Neststacx because they understand my needs. Their team is always dedicated to delivering the best results in every aspect. I am happy I found them after several failed experiences before.",
        },
        {
            name: 'Victor',
            title: 'CEO, Pottv',
            quote: "Outstanding to work with and very knowledgeable. Neststacx saved me a LOT of time. Knew what they were doing and how to make things better. I will be using many more times for all future projects.",
        },
        {
            name: 'Iyanu',
            title: 'CEO, Aila Beauty Hub',
            quote: "Working with Neststacx has been an outstanding experience. They understood my needs right away and delivered beyond expectations. After several setbacks with others, I finally feel confident with their reliable support.",
        },
    ];

    const texts = [
        "AI Automation Experts",
        "Smarter Workflows",
        "Beyond CRM",
        "Scale with AI"
    ];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !deleting) {
            setTimeout(() => setDeleting(true), 1000);
            return;
        }

        if (subIndex === 0 && deleting) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }, deleting ? 50 : 100); // typing vs deleting speed

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);


    return (
        <div>
            <Navbar />
            <section className="hero">
                <div className="hero-txt" data-aos="fade-right">
                    <h1>
                        {texts[index].substring(0, subIndex)}
                        <span className="cursor">|</span>
                    </h1>
                    <p>
                        Transform your business processes with Zoho CRM, Monday.com, Zapier Solutions and AI-Driven Automation
                    </p>
                    <button data-aos="fade-up" data-aos-delay="500">Discover Our Services</button>
                </div>
                <img src={hero} alt="" data-aos="fade-left" />
            </section>

            {/* Trusted By Logos Section */}
            <div className="trusted-box" data-aos="fade-up">
                <p className="trusted-title">Trusted by:</p>
                <div className="trusted-logos">
                    <img src={fiverr} alt="Fiverr" />
                    <img src={premiere} alt="Premiere Group" />
                    <img src={gopro} alt="Gopro" />
                    <img src={dotmac} alt="Dotmac" />
                    <img className='high' src={leon} alt="Leon Cycle" />
                </div>
            </div>
            <About />
            <section className="services-section" id="services">
                <h2 className="section-title">
                    Our<span> Services</span>
                </h2>


                <div className="services-grid">
                    <div className="service-card" data-aos="fade-up" data-aos-delay="0">
                        <FaAppStoreIos className="service-icon" />
                        <h3>Zoho CRM Solutions</h3>
                        <p>Optimize your business with our Zoho CRM service. We audit, advise on best practices, create automations and workflows, provide seamless integration and training for optimal CRM use.</p>
                        <br />
                        <a href="#">Explore Zoho CRM Solutions <span>→</span></a>
                    </div>

                    <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                        <FaUsers className="service-icon" />
                        <h3>Monday.com Solutions</h3>
                        <p>Optimize your operations with our Monday.com solutions. We specialize in workflow building, CRM customization, work process management, and creating integrations with third-party software for a fully automated Monday.com experience.</p>
                        <a href="#">See Monday.com Solutions <span>→</span></a>
                    </div>

                    <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                        <FaCog className="service-icon" />
                        <h3>Automation with Zapier</h3>
                        <p>Streamline your business with our comprehensive automation solutions. Utilize Zapier’s diverse tools to integrate powerful AI features into your operations. Our services help you enhance your sales and operational efficiency, saving you significant time and money annually.</p>
                        <a href="#">Unleash Automation Power <span>→</span></a>
                    </div>

                    <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                        <FaLightbulb className="service-icon" />
                        <h3>Digital Transformation</h3>
                        <p>Drive your business into the future with our digital transformation services. We’re here to help you embrace the digital world, enhancing your operations with cutting-edge technology and insightful strategies.</p>
                        <a href="#">Go digital Now <span>→</span></a>
                    </div>
                </div>
            </section>

            <section className="why-choose-section" id="why-choose">
                <div className="why-choose-container">
                    <div className="why-choose-content" data-aos="fade-right">
                        <h2 className="why-title">
                            Why Choose <span>Neststacx</span>
                        </h2>
                        <p className="why-description">
                            Why choose Neststacx? For our deep expertise in diverse IT domains,
                            customized solutions tailored to your unique needs, and a forward-thinking approach integrating the latest <span className="highlight">Zoho CRM</span> AI technologies.
                        </p>

                        <div className="why-list">
                            <div className="why-item">
                                <span className="why-icon"><FaHandshake /></span>
                                <div>
                                    <h3>We are Tech Partner</h3>
                                    <p>Partnering with Zoho, Monday, and Zapier, Techma ensures top-tier service for optimal business solutions.</p>
                                </div>
                            </div>
                            <div className="why-item">
                                <span className="why-icon"><FaCloudDownloadAlt /></span>
                                <div>
                                    <h3>Cloud Based</h3>
                                    <p>No paper trail. All our data and processes are securely managed in the cloud</p>
                                </div>
                            </div>
                            <div className="why-item">
                                <span className="why-icon"><FaUsers /></span>
                                <div>
                                    <h3>We are Human</h3>
                                    <p>We treat our clients with care and attention, embodying a deep sense of humanity in our services.</p>
                                </div>
                            </div>
                        </div>

                        <button className="why-btn" data-aos="fade-up" data-aos-delay="500">Schedule a Consultation →</button>
                    </div>

                    <div className="why-choose-image" data-aos="fade-left">
                        <img src={whyImg} alt="Why Choose Us" />
                    </div>
                </div>
            </section>

            <section className="approach-section" id="approach">
                <div className="approach-container">
                    <div className="approach-image" data-aos="fade-right">
                        <img src={approachImg} alt="Approach illustration" />
                    </div>

                    <div className="approach-content" data-aos="fade-left">
                        <h2 className="approach-title">
                            Our <span>Approach</span>
                        </h2>
                        <p className="approach-description">
                            It begins with offering tailored IT solutions, combining our in-depth expertise with the latest in CRM and AI technologies. We place a strong emphasis on working closely with our clients, guaranteeing that our strategies are not only efficient and effective but also uniquely tailored to fit the specific processes of each client.
                        </p>

                        <ul className="approach-list">
                            <li>
                                <FaCheckCircle className="approach-icon" />
                                <div className="approach-text">
                                    <strong>System Audit and Review:</strong>
                                    <p>Assessing and identifying areas for improvement.</p>
                                </div>
                            </li>
                            <li>
                                <FaCheckCircle className="approach-icon" />
                                <div className="approach-text">
                                    <strong>Comprehensive Setup:</strong>
                                    <p>Matching tools to your business goals and completing the setup process.</p>
                                </div>
                            </li>
                            <li>
                                <FaCheckCircle className="approach-icon" />
                                <div className="approach-text">
                                    <strong>Smooth Integration:</strong>
                                    <p>Effortlessly combining external solutions with your chosen technology stack.</p>
                                </div>
                            </li>
                            <li>
                                <FaCheckCircle className="approach-icon" />
                                <div className="approach-text">
                                    <strong>Ongoing Support:</strong>
                                    <p>Providing continuous optimization and support.</p>
                                </div>
                            </li>
                        </ul>


                        <button className="approach-button" data-aos="fade-up" data-aos-delay="500">Begin with a System Review →</button>
                    </div>
                </div>
            </section>

            <section className="testimonials-section" data-aos="fade-up">
                <h2 className="testimonials-title" data-aos="fade-up" data-aos-delay="100">
                    Our customers are <span>impressed</span>
                </h2>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div
                            className="testimonial-card"
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={150 + index * 100}
                        >
                            <div className="quote-icon">
                                <FaQuoteRight />
                            </div>
                            <p className="testimonial-text">{review.quote}</p>
                            <p className="testimonial-name"><strong>{review.name}</strong></p>
                            <p className="testimonial-role">{review.title}</p>
                        </div>
                    ))}
                </div>

                <button className="testimonial-button" data-aos="fade-up" data-aos-delay="500">
                    See More Reviews →
                </button>
            </section>

            <TeamSection />


            <section class="contact-section">
                <div class="contact-container">
                    <div class="contact-left" data-aos="fade-right">
                        <h2><span>Get</span> In touch</h2>
                        <p>
                            Are you prepared to revolutionize your business with CRM and AI? Reach out
                            for a consultation or with any questions you have – let’s begin our journey
                            of innovation together.
                        </p>

                        <form class="contact-form" data-aos="fade-up" data-aos-delay="200">
                            <div class="form-row">
                                <div class="form-group" data-aos="fade-up" data-aos-delay="300">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Jane" />
                                </div>
                                <div class="form-group" data-aos="fade-up" data-aos-delay="400">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Smith" />
                                </div>
                            </div>

                            <div class="form-group" data-aos="fade-up" data-aos-delay="500">
                                <label>Email Address <span>*</span></label>
                                <input type="email" placeholder="janesmith@example.com" required />
                            </div>

                            <div class="form-group" data-aos="fade-up" data-aos-delay="600">
                                <label>Message</label>
                                <textarea
                                    rows="6"
                                    placeholder="Hey Friends, I’d love to talk to you about Drone AI Project we are working on ..."
                                ></textarea>
                            </div>

                            <button type="submit" class="contact-btn" data-aos="zoom-in" data-aos-delay="700">
                                Get In Touch
                            </button>
                        </form>
                    </div>

                    <div class="contact-right" data-aos="fade-left">
                        <img src={contact} alt="Contact Support Illustration" />
                    </div>
                </div>

                <div class="contact-info-grid">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h4>Email Us</h4>
                        <p>info@Neststacx.ca</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h4>Call Us</h4>
                        <p>+1 (418) 931-7712</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <h4>Live Chat</h4>
                        <p>Offers real-time communication for instant assistance</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <h4>Our location</h4>
                        <p>3295 Rue Dubé, Québec, QC,<br />G1M 3T3</p>
                    </div>
                </div>
            </section>

            <section className="partners-section" data-aos="fade-up">
                <h2 className="partners-title">
                    Our <span>Partners</span>
                </h2>

                <div className="partners-slider">
                    <div className="partners-track">
                        <img src={zoho} alt="Zoho" />
                        <img src={zapier} alt="Zapier" />
                        <img src={monday} alt="Monday.com" />
                        <img src={pipedrive} alt="Pipedrive" />
                        <img src={saleforce} alt="Salesforce" />
                        <img src={level} alt="Level" />
                        <img src={make} alt="Make" />

                        {/* Duplicate for seamless loop */}
                        <img src={zoho} alt="Zoho" />
                        <img src={zapier} alt="Zapier" />
                        <img src={monday} alt="Monday.com" />
                        <img src={pipedrive} alt="Pipedrive" />
                        <img src={saleforce} alt="Salesforce" />
                        <img src={level} alt="Level" />
                        <img src={make} alt="Make" />
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Home
