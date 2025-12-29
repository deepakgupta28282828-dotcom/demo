import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import heroVideo from "./media.mp4";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>

      <section className="hero">
        {/* Background Video */}
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay (optional, improves readability) */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Driving Business Growth Through
            <span> Strategic Consulting</span>
          </h1>



          <Link to="/contact">
            <button className="hero-btn">Request Consultation</button>
          </Link>
        </div>
      </section>


      {/* SERVICES */}
      <section className="services">
        <div className="services-top-slant"></div>
        <h2>Altus Global provides</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Strategy & Advisory</h3>
            <p>
              Market entry, growth strategy, and executive-level advisory
              services.
            </p>
          </div>

          <div className="service-card">
            <h3>Business Transformation</h3>
            <p>
              Process optimization, digital transformation, and change
              management.
            </p>
          </div>

          <div className="service-card">
            <h3>Financial Consulting</h3>
            <p>
              Financial planning, performance improvement, and risk management.
            </p>
          </div>
        </div>

        {/* Slanted bottom */}
        <div className="services-bot-slant" />
      </section>

      {/* WHY ALTUS */}
      {/* <section className="why-altus">
        <h2>Why Altus Global</h2>
        <p>
          We combine deep industry expertise with practical execution to deliver
          measurable outcomes for our clients.
        </p>
      </section> */}

      <section className="why-altus">
        <h2>Why Altus Global</h2>
        <p>Unlock Success with Altus Global - Your Gateway to Global Excellence</p>
        <p>
          Welcome to Altus Global, where business operations consulting isn't just a service; it's a dynamic journey towards unparalleled success! Born in 2010 and fueled by a decade of innovation, we are the architects of operational brilliance on a global scale.
        </p>
        <p>
          Step into a realm where challenges are opportunities, and success is not just a goal – it's a guarantee. At Altus Global, we don't follow trends; we set them. Whether you're a trailblazing startup or an industry giant, our consultancy isn't just a choice; it's a strategic advantage.
        </p>
        <p>
          Why settle for the ordinary when you can embrace extraordinary success? Come meet us at Altus Global, where every business operation becomes a masterpiece, and your triumph is our mission. Welcome to a future where excellence isn't just a destination; it's a way of business!
        </p>
      </section>


      <Footer />
    </>
  );
};

export default Home;
