import React, { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import blogImg from '../assets/Images/blogHero.png'
import Navbar from './Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer/Footer';


const posts = [
    {
        title: "Unlocking the Power of AI in Everyday Productivity",
        date: "Dec 22, 2023",
        description: "Discover how artificial intelligence is transforming the way we manage daily tasks and workflows, boosting efficiency across industries.",
        image: "https://techma.ai/wp-content/uploads/2023/12/Stocksy_comp_2006922-400x250.jpg",
    },
    {
        title: "Top 5 Emerging Technologies Shaping 2024",
        date: "Dec 22, 2023",
        description: "Explore the most promising tech trends and innovations expected to revolutionize business and personal tech in the coming year.",
        image: "https://techma.ai/wp-content/uploads/2023/12/Stocksy_comp_1139896-400x250.jpg",
    },
    {
        title: "How Smart Automation Is Changing the Workplace",
        date: "Dec 22, 2023",
        description: "Learn how automation tools are streamlining operations, reducing manual work, and creating smarter workflows across various sectors.",
        image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    }
];
const Monday = () => {
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
                    <h1>Monday.com</h1>
                    <p>
                        Work remotely, live freely,<br />
                        and make a meaningful<br />
                        difference
                    </p>
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="700"
                        onClick={() => {
                            const section = document.getElementById("monday-section");
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

            <section id='monday-section' className="monday-section">
                <h1 className="monday-logo">Monday.com</h1>

                <div className="monday-cards">
                    {posts.map((post, idx) => (
                        <div className="monday-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
                            <img src={post.image} alt={post.title} className="monday-image" />
                            <div className="monday-content">
                                <h3 className="monday-title">{post.title}</h3>
                                <p className="monday-date">{post.date}</p>
                                <p className="monday-desc">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Monday