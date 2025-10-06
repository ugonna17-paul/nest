import React, { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import '../Allcss/Blog.css'
import blogImg from '../../assets/Images/blogHero.png'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";


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

const zapierPosts = [
    {
        id: 1,
        img: "https://techma.ai/wp-content/uploads/2023/12/Stocksy_comp_2006922-400x250.jpg",
        title: "Healthy Habits for Better Living",
        date: "Dec 22, 2023",
        desc: "Discover simple daily habits to boost your energy, improve focus, and maintain a balanced lifestyle.",
        delay: "0"
    },
    {
        id: 2,
        img: "https://techma.ai/wp-content/uploads/2023/12/Stocksy_comp_1139896-400x250.jpg",
        title: "Finding Joy in Everyday Moments",
        date: "Dec 22, 2023",
        desc: "Learn how to slow down, practice gratitude, and embrace the little things that make life beautiful.",
        delay: "200"
    },
    {
        id: 3,
        img: "https://techma.ai/wp-content/uploads/2023/12/Stocksy_comp_1991088-400x250.jpg",
        title: "Stay Fit, Stay Motivated",
        date: "Dec 22, 2023",
        desc: "Explore practical workout tips and motivation strategies to help you stay consistent with your fitness journey.",
        delay: "400"
    }
];

const Blog = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const navigate = useNavigate();



    return (
        <>
            <Navbar />
            <div className="container">
                <div className="illustration" data-aos="fade-right" data-aos-delay="100">
                    <img src={blogImg} alt="About Us" />
                </div>
                <div className="text-section" data-aos="fade-left" data-aos-delay="300">
                    <h1>Blogs</h1>
                    <p>
                        Dive into a world of<br />
                        innovation, lifestyle, and<br />
                        inspiration
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
                    <button
                        className="explore-btn"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        onClick={() => navigate("/category/zoho")}
                    >
                        Explore More <span className="arrow">➝</span>
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

                <div className="monday-cta">
                    <button
                        className="explore-btn"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        onClick={() => navigate("/category/monday")}
                    >
                        Explore More <span className="arrow">➝</span>
                    </button>
                </div>
            </section>


            <section className="monday-section">

                <h2 className="monday-logo">Zapier Blog</h2>
                <div className="monday-cards">
                    {zapierPosts.map((post) => (
                        <div
                            className="monday-card"
                            key={post.id}
                            data-aos="fade-up"
                            data-aos-delay={post.delay}
                        >
                            <img src={post.img} alt={post.title} className="monday-image" />
                            <div className="blog-content">
                                <h3 className="monday-title">{post.title}</h3>
                                <p className="monday-date">{post.date}</p>
                                <p className="monday-desc">{post.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="monday-cta">
                    <button
                        className="explore-btn"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        onClick={() => navigate("/category/monday")}
                    >
                        Explore More <span className="arrow">➝</span>
                    </button>
                </div>
            </section>



            <Footer />

        </>
    );
};

export default Blog;
