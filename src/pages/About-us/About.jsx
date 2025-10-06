import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaAppStoreIos, FaUsers, FaCog, FaLightbulb, FaHandshake, FaCheckCircle, FaCloudDownloadAlt, FaQuoteRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import '../Allcss/About.css'
import aboutImg from '../../assets/Images/aboutHero.png';
import storyImg from '../../assets/Images/storyImg.png';
import mission from '../../assets/Images/mission.png';
import Footer from '../Footer/Footer';

const statsData = [
  { label: 'Creation Date', count: 2022 },
  { label: 'Entrepreneurs Impacted', count: 1000 },
  { label: 'Jobs Created', count: 25 },
  { label: 'Partnership Created', count: 10 },
];

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRefs = useRef([]);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const eventRefs = useRef([]);
  const [activeDots, setActiveDots] = useState([]);

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // --- Stats Section ---
      const statsSection = document.querySelector(".stats-container");
      if (statsSection && !hasAnimated) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          animateCountUp();
          setHasAnimated(true);
        }
      }

      // --- Timeline Section ---
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let newHeight = 0;
        const newActiveDots = [];

        eventRefs.current.forEach((el, i) => {
          if (!el) return;
          const eventRect = el.getBoundingClientRect();
          const eventCenter = eventRect.top + eventRect.height / 2;

          if (eventCenter < windowHeight) {
            const relativeY = eventCenter - rect.top;
            newHeight = Math.max(newHeight, relativeY);
            newActiveDots.push(i);
          }
        });

        setLineHeight(newHeight);
        setActiveDots(newActiveDots);
      }
    };

    const animateCountUp = () => {
      const duration = 2000;
      const fps = 60;
      const totalFrames = Math.round((duration / 1000) * fps);

      statRefs.current.forEach((ref, i) => {
        const target = statsData[i].count;
        let frame = 0;

        const counter = () => {
          frame++;
          const progress = frame / totalFrames;
          const currentCount = Math.floor(progress * target);

          const prefix = i === 0 ? "" : "+";

          if (ref) ref.textContent = `${prefix}${currentCount.toLocaleString()}`;

          if (frame < totalFrames) {
            requestAnimationFrame(counter);
          } else {
            if (ref) ref.textContent = `${prefix}${target.toLocaleString()}`;
          }
        };

        counter();
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);


  return (
    <>
      <Navbar />

      <section className="about-section2">
        <div className="about-container2">
          {/* Left - Image */}
          <div className="about-image2" data-aos="fade-right" data-aos-delay="100">
            <img src={aboutImg} alt="About Us" />
          </div>

          {/* Right - Text */}
          <div className="about-text2" data-aos="fade-left" data-aos-delay="300">
            <h2>About Us</h2>
            <p data-aos="fade-up" data-aos-delay="500">
              From our early days to becoming pioneers in the industry, our story has always been about people — the clients we serve,
              the challenges we solve, and the future we’re building. With innovation at our core, we continue to redefine what’s possible.
            </p>
            <button
              className="about2-btn"
              data-aos="zoom-in"
              data-aos-delay="700"
              onClick={() => {
                const section = document.querySelector(".story");
                if (section) {
                  const yOffset = -80; // adjust for fixed navbar height
                  const y =
                    section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Learn More →
            </button>

          </div>
        </div>
      </section>

      <section id='story' className="story">
        <div className="story-container">
          <div className="story-text" data-aos="fade-right" data-aos-delay="100">
            <h2 className="story-title">
              <span>Our</span> <span>Story</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="300">
              Embarking on a journey that originated at Deloitte, where I served as a Senior Associate in valuation and modeling, our story
              is a testament to the power of humble beginnings and strategic partnerships. What started as a single engagement on Fiverr
              evolved into 25 diverse projects in just two years. This remarkable growth paved the way for expanding our dedicated team,
              which now includes two full-time, talented professionals and several part-time experts. Our pursuit of excellence led to
              collaborations with prestigious companies like Zoho, and today, we are proud partners of industry giants such as Salesforce,
              Monday CRM, Pipedrive, Notion, and more. Each alliance has been a stepping stone towards innovation and success.
            </p>
          </div>

          <div className="story-img" data-aos="fade-left" data-aos-delay="200">
            <img src={storyImg} alt="Our Story" />
          </div>
        </div>
      </section>

      <section className="misson">
        <div className="misson-container">
          <div className="misson-text" data-aos="fade-right" data-aos-delay="100">
            <h2 className="misson-title">
              <span>Our</span> <span>misson</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="300">
              Our mission is to empower entrepreneurs, freelancers, companies, and small businesses by enhancing their operations through technology.
              We are dedicated to making technology work for them, streamlining their processes for greater efficiency and productivity. In the community sphere,
              we are committed to significantly reducing unemployment world wide. We achieve this by hiring and training talented individuals, contributing
              to both their personal growth and the broader economic development of the region.
            </p>
          </div>

          <div className="misson-img" data-aos="fade-right" data-aos-delay="200">
            <img src={mission} alt="Our Story" />
          </div>
        </div>
      </section>

      <div className="impact-section">
        <h1 data-aos="fade-down">
          We aren’t just a <span className="highlight">Tech</span> company
        </h1>
        <p data-aos="fade-up">
          Founded in 2022, our company has been steadfast in its mission to create job opportunities,
          support entrepreneurs, and serve as a source of inspiration. In just a short time,
          we’ve already left a significant impact and have influenced many lives positively.
        </p>

        <div className="stats-container">
          {statsData.map((item, idx) => (
            <div
              className="stat-box"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div
                className="stat-number"
                ref={(el) => (statRefs.current[idx] = el)}
              >
                0
              </div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <button className="join-btn" data-aos="fade-up">
          Join Us
        </button>
      </div>
      <div className="timeline-container">
        <h2 className="timeline-title" data-aos="fade-up">Our History</h2>
        <p className="timeline-subtitle" data-aos="fade-up">
          Established in 2022, our story is one of innovation, expertise, and
          transformation in the realm of technology consulting. Beginning as a small
          team with big ambitions, we have emerged as a pivotal player in the tech
          consulting industry.
        </p>

        <div className="timeline-wrapper" ref={timelineRef}>
          {/* Gray background line */}
          <div className="timeline-line-bg"></div>

          {/* Green progress line */}
          <div
            className="timeline-line-active"
            style={{ height: `${lineHeight}px` }}
          ></div>

          {/* Timeline Events */}
          {[
            { date: "Dec 2023", text: "Completed over 750 projects successfully." },
            { date: "Jul 2022", text: "We've successfully completed over 350 projects and recently welcomed our first contractor to the team." },
            {
              date: "Jan 2023",
              text: "Already completed 10 projects successfully.",
            },
            { date: "Dec 2023", text: "Neststacx opens its doors." },
          ].map((event, i) => (
            <div
              key={i}
              className="timeline-event"
              ref={(el) => (eventRefs.current[i] = el)}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Date on one side */}
              {i % 2 === 0 ? (
                <span className="event-date">{event.date}</span>
              ) : (
                <span className="event-content" data-date={event.date}>{event.text}</span>
              )}

              {/* Dot */}
              <div
                className={`event-dot ${activeDots.includes(i) ? "active" : ""}`}
              ></div>

              {/* Box on opposite side */}
              {i % 2 === 0 ? (
                <span className="event-content" data-date={event.date}>{event.text}</span>
              ) : (
                <span className="event-date">{event.date}</span>
              )}
            </div>
          ))}
        </div>
      </div>

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

      <Footer />

    </>
  );
};

export default About;
