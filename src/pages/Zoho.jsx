import React, { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import blogImg from '../assets/Images/blogHero.png'
import Navbar from './Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer/Footer';
const Zoho = () => {

    const blogs = [
        {
            title: "GoHighLevel Extension for Zoho Analytics",
            date: "Dec 6, 2024",
            description: "Overview Tired of manual data entry to create sheets slowing down your business? Say goodbye to...",
            image: "https://techma.ai/wp-content/uploads/2023/12/Stocksy_comp_3031746-400x250.jpg",
        },
        {
            title: "Best Practices and Challenges involved in Zoho CRM Implementation",
            date: "Jan 27, 2024",
            description: "Overview With evolving technologies in workflow management, sales pipeline and HR & Administration, companies are gearing up accordingly...",
            image: "https://techma.ai/wp-content/uploads/2024/01/customer-relationship-management-concept-2-400x250.jpg",
        },
        {
            title: "What are the 10 Most Popular Zoho CRM Integrations for 2024 and beyond?",
            date: "Jan 27, 2024",
            description: "Overview The wrapping up of 2023, and setting foot into this New Year, brings with itself an abundance of new technologies in the arena of sales...",
            image: "https://techma.ai/wp-content/uploads/2024/01/crm-business-company-strategy-marketing-concept-1-400x250.jpg",
        }
    ];


    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="illustration" data-aos="fade-right" data-aos-delay="100">
                    <img src={blogImg} alt="About Us" />
                </div>
                <div className="text-section" data-aos="fade-left" data-aos-delay="300">
                    <h1>Zoho</h1>
                    <p>
                        Work remotely, live freely,<br />
                        and make a meaningful<br />
                        difference
                    </p>
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="700"
                        onClick={() => {
                            const section = document.getElementById("zoho-section");
                            if (section) {
                                const yOffset = -80;
                                const y =
                                    section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: "smooth" });
                            }
                        }}
                    >
                        Learn More <span className="arrow">➝</span>
                    </button>

                </div>
            </div>

            <div className="zoho-blogs-section" id="zoho-section">
                <h1 className="zoho-logo">Zoho</h1>
                <div className="zoho-blogs-container">
                    {blogs.map((blog, index) => (
                        <div className="blog-card" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                            <div className="blog-content">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-date">{blog.date}</p>
                                <p className="blog-description">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="explore-btn-container">
                    {/* <button
                        className="explore-btn"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        onClick={() => navigate("/category/zoho")}
                    >
                        Explore More <span className="arrow">➝</span>
                    </button> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Zoho