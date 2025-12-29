import React, { useState, useEffect } from "react";
import digital from "./digital.mp4";
import Footer from "../../components/footer/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Trigger popup after 5 seconds as fallback
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Trigger popup when user scrolls near bottom
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 100) {
        setShowPopup(true);
        clearTimeout(timer); // cancel fallback if scroll triggers first
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="services-page">

      {/* Hero Video Section */}
      <section className="about-hero-video">
        <video className="hero-video" src={digital} autoPlay loop muted playsInline />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us: <span>Let's Collaborate</span></h1>
          <p>We're eager to hear from you. Let's explore how our expertise can contribute to your success.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro">
        <div className="intro-container">
          <h2>Altus Global Consulting Pvt Ltd</h2>
          <p>New Delhi, India</p>
          <p>Thank you for considering Altus Global as your strategic partner in operational excellence. Contact us through the following channels and let's embark on a journey of transformative collaboration.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="contact-card">
          <h3>General Inquiries</h3>
          <p>For information about our services or potential collaborations, contact: <a href="mailto:info@altusglobalconsulting.com">info@altusglobalconsulting.com</a></p>
        </div>

        <div className="contact-card">
          <h3>Career Opportunities</h3>
          <p>If you are interested in joining our team, visit our Careers Page or contact HR: <a href="mailto:career@altusglobalconsulting.com">career@altusglobalconsulting.com</a></p>
        </div>

        <div className="contact-card">
          <h3>Media & Press Inquiries</h3>
          <p>For interviews or media information, contact: <a href="mailto:media@altusglobalconsulting.com">media@altusglobalconsulting.com</a></p>
        </div>

        <div className="contact-card">
          <h3>Connect With Us</h3>
          <p>Stay updated on the latest news, industry insights, and company updates by following us on <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>.</p>
        </div>
      </section>

      <Footer />

      {/* Scroll/Timeout Popup Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
            <h2>Let's Discuss!</h2>
            <p>Embrace a future of efficiency, innovation, and growth with Altus Global. Our expert consultants bring diverse skills and hands-on experience to deliver personalized solutions. Committed to operational excellence, they craft strategies tailored to your goals, fostering innovation and sustainable growth. Discover how our team can drive change and unlock opportunities for your business.</p>

            <form>
              <label>
                Full Name *
                <input type="text" name="name" required />
              </label>

              <label>
                Email address *
                <input type="email" name="email" required />
              </label>

              <label>
                Phone Number *
                <input type="tel" name="phone" required />
              </label>

              <label>
                Enquiry Details *
                <textarea name="enquiry" rows="4" required></textarea>
              </label>

              <button type="submit" className="popup-submit">Submit</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ContactUs;
