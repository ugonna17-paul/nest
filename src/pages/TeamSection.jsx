import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TeamSection.css";
import img from '../assets/Images/MeetImg.png'


const TeamSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="meet-section">
            <div className="meet-container">
                <div className="meet-text-content" data-aos="fade-up">
                    <h2 className="meet-section-title">Meet the Team</h2>
                    <p className="meet-section-subtitle">
                        We're a diverse group of AI automation experts, strategists, and innovators
                        committed to transforming how businesses operate through intelligent systems.
                    </p>
                </div>

                <div className="team-image-wrapper" data-aos="zoom-in" data-aos-delay="200">
                    <img
                        src={img} // Replace with your actual image path
                        alt="AI Automation Team"
                        className="team-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
