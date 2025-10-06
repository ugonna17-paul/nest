import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import { Plug, Handshake, Files } from "lucide-react";
import { FaCheck } from "react-icons/fa";



import '../Allcss/Career.css'
import valueImg from '../../assets/Images/value.png'
import careerImg from "../../assets/Images/career.png";
import teamImg from '../../assets/Images/Work.png'
import coreValue from '../../assets/Images/coreValue.png'
import Footer from "../Footer/Footer";






const Career = () => {




    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);
    return (
        <>
            <Navbar />
            <section className="career-section">
                <div className="image" data-aos="fade-right">
                    <img src={careerImg} alt="career illustration" />
                </div>
                <div className="career-text-section" data-aos="fade-left" data-aos-delay="300">
                    <h1>Career</h1>
                    <p>
                        Work remotely, live freely, <br />
                        and make a meaningful <br />
                        difference
                    </p>
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="700"
                        onClick={() => {
                            window.location.href = "/career";
                        }}
                    >
                        VIEW CAREERS <span className="arrow">➝</span>
                    </button>

                </div>
            </section>


            <section className="work-section">
                <div className="work-container">

                    <div className="text" data-aos="fade-right">
                        <h2>
                            Work <span>With Us</span>
                        </h2>
                        <p>
                            Join Our Team and Shape the Future! At Neststacx, we’re not just
                            creating solutions, we’re building a movement. We seek passionate,
                            innovative thinkers eager to challenge the status quo. Here, your
                            ideas have impact, your growth is valued, and your career path is as
                            unique as you are. Embrace the opportunity to work alongside a
                            diverse team of experts dedicated to making a real difference. Ready
                            to transform your career? Explore our current opportunities and
                            become part of a team that’s redefining the CRM and AI industry.
                            Let’s make a mark together!
                        </p>
                    </div>


                    <div className="image" data-aos="fade-left">
                        <img src={teamImg} alt="Work with us" />
                    </div>
                </div>
            </section>

            <section className="fw-section">
                <div className="fw-container">

                    <div className="fw-header" data-aos="fade-up">
                        <h2>
                            Neststacx is where the <span>future</span> works
                        </h2>
                        <p>
                            At Neststacx, we’re not just building the future; we’re doing it from
                            everywhere. Our commitment to remote work fosters a culture of
                            innovation and flexibility, allowing our team to work where they
                            thrive best.
                        </p>
                    </div>


                    <div className="fw-cards">

                        <div className="fw-card fw-blue" data-aos="fade-up" data-aos-delay="200">
                            <Plug size={36} />
                            <h3>Innovative</h3>
                            <p>
                                Focusing on cutting-edge technology and creative problem-solving
                            </p>
                        </div>


                        <div className="fw-card fw-pink" data-aos="fade-up" data-aos-delay="400">
                            <Handshake size={36} />
                            <h3>Inclusive</h3>
                            <p>
                                Our inclusive culture values every perspective, nurturing
                                creativity in a respectful and welcoming environment
                            </p>
                        </div>


                        <div className="fw-card fw-green" data-aos="fade-up" data-aos-delay="600">
                            <Files size={36} />
                            <h3>Flexible</h3>
                            <p>
                                We adapt to individual needs, offering a work-life balance that
                                empowers our team to excel at their own pace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values-section">
                <div className="core-container">
                    <div
                        className="core-image"
                        data-aos="fade-right"
                    >
                        <img src={coreValue} alt="Core values illustration" />
                    </div>

                    <div
                        className="core-content"
                        data-aos="fade-left"
                    >
                        <h2 className="core-title">
                            Our core <span>values</span>
                        </h2>
                        <p className="core-desc">
                            We believe in fostering a culture of innovation, where creativity
                            and forward-thinking are paramount. Integrity and accountability
                            underpin our operations, ensuring trust and transparency with our
                            clients and team.
                        </p>


                        <div className="core-list">
                            <div className="core-lists">
                                <div className="core-item" data-aos="zoom-in" data-aos-delay="100">
                                    <span className="check-icon"><FaCheck /></span>
                                    <p>Empathy</p>
                                </div>
                                <div className="core-item" data-aos="zoom-in" data-aos-delay="200">
                                    <span className="check-icon"><FaCheck /></span>
                                    <p>Integrity</p>
                                </div>
                                <div className="core-item" data-aos="zoom-in" data-aos-delay="300">
                                    <span className="check-icon"><FaCheck /></span>
                                    <p>Innovation</p>
                                </div>
                            </div>
                            <div className="core-lists">
                                <div className="core-item" data-aos="zoom-in" data-aos-delay="400">
                                    <span className="check-icon"><FaCheck /></span>
                                    <p>Accountability</p>
                                </div>
                                <div className="core-item" data-aos="zoom-in" data-aos-delay="500">
                                    <span className="check-icon"><FaCheck /></span>
                                    <p>Creativity</p>
                                </div>
                                <div className="core-item" data-aos="zoom-in" data-aos-delay="600">
                                    <span className="check-icon"><FaCheck /></span>
                                    <p>Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="values-container">


                    <div className="values-content" data-aos="fade-right">
                        <h2 className="values-title">
                            Working and <span>thriving</span>
                        </h2>
                        <p className="values-desc">
                            At Neststacx, we blend work with well-being, ensuring our team doesn’t
                            just work, they thrive. Our environment is designed to support not
                            only professional success but also personal fulfillment. Neststacx is a
                            place where work-life balance is not just a phrase, it’s a practice.
                        </p>

                        <div className="values-list">
                            <div className="values-item" data-aos="zoom-in" data-aos-delay="100">
                                <span className="check-icon">✔</span>
                                <p>Empowerment</p>
                            </div>
                            <div className="values-item" data-aos="zoom-in" data-aos-delay="200">
                                <span className="check-icon">✔</span>
                                <p>Innovation</p>
                            </div>
                            <div className="values-item" data-aos="zoom-in" data-aos-delay="300">
                                <span className="check-icon">✔</span>
                                <p>Harmony</p>
                            </div>
                            <div className="values-item" data-aos="zoom-in" data-aos-delay="400">
                                <span className="check-icon">✔</span>
                                <p>Growth</p>
                            </div>
                        </div>
                    </div>


                    <div className="values-image" data-aos="fade-left">
                        <img src={valueImg} alt="Working illustration" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Career;
