import React from 'react';
import NavBar1 from '../components/navbar';
import Footer from '../components/footer';
import '../assets/styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">

      {/* Navigation Bar */}
      <NavBar1 />

      {/* Image Section */}
      <section className="image-section">
        <h1 className="hero-title">Smart Fridge System</h1>
      </section>

      {/* Green Section */}
      <section className="green-section">

        <div className="our-system">
          <div className="system-img">
            <img src="/assets/images/fridge-vision.png" alt="Fridge View" />
          </div>
          <div className="system-text">
            <h3>Our system</h3>
            <p>
              Skibidi bop dop dop yes yes skibidi w nim nim
            </p>
            <Link to="/AboutUs">  {/*  Wrapped the button with a Link */}
              <button className="aboutus-btn">About us</button>
            </Link>
          </div>
        </div>

        <div className="tracking">
          <h4>Tracking your fridge remotely</h4>
          <div className="tracking-grid">
            <div className="tracking-item">
              <strong>Fridge moisture</strong>
              <p>easily</p>
            </div>
            <div className="tracking-item">
              <strong>Vegetables</strong>
              <p>faster</p>
            </div>
            <div className="tracking-item">
              <strong>Fridge temperature</strong>
              <p>efficiently</p>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;