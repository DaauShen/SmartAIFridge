// <<<<<<< KhoaTraan
// import React from 'react';
// import NavBar1 from '../components/navbar';
// import Footer from '../components/footer';
// import '../assets/styles/home.css';
// import { Link } from 'react-router-dom';

// function HomePage(){
//   return (
//     <div className="home-page">

//       {/* Navigation Bar */}
//       <NavBar1 />

//       {/* Image Section */}
//       <section className="image-section">
//         <h1 className="hero-title">Smart Fridge System</h1>
//       </section>

//       {/* Green Section */}
//       <section className="green-section">

//         <div className="our-system">
//           <div className="system-img">
//             <img src="/assets/images/fridge-vision.png" alt="Fridge View" />
//           </div>
//           <div className="system-text">
//             <h3>Our system</h3>
//             <p>
//               Skibidi bop dop dop yes yes skibidi w nim nim
//             </p>
//             <Link to="/AboutUs">  {/*  Wrapped the button with a Link */}
//               <button className="aboutus-btn">About us</button>
//             </Link>
//           </div>
//         </div>

//         <div className="tracking">
//           <h4>Tracking your fridge remotely</h4>
//           <div className="tracking-grid">
//             <div className="tracking-item">
//               <strong>Fridge moisture</strong>
//               <p>easily</p>
//             </div>
//             <div className="tracking-item">
//               <strong>Vegetables</strong>
//               <p>faster</p>
//             </div>
//             <div className="tracking-item">
//               <strong>Fridge temperature</strong>
//               <p>efficiently</p>
//             </div>
//           </div>
//         </div>

//       </section>

//       {/* Footer */}
//       <Footer />

//     </div>
//   );
// };
// =======
import NavBar1 from "../components/navbar";
// import Footer from "../components/footer";
import img from "../assets/images/homepageimage.png"
import React from "react";
import "./home.css"
import HomeFooter from "../components/homefooter";

function HomePage(){
    return (
            <div className="after">
                <NavBar1/>
                <div className="background">
                    <div className="title">Smart Fridge System</div>
                    <div className="manage">Manage your fridge efficiently</div>
                    <div className="whitetext">System for supporting smart camera integrates with your fridge.</div>
                    <button className="discoverbutton">Discover</button>
                    {/* <span className="word-rotate"></span> */}
                </div>
                <div className="infobox">
                    <div className="whitebox">
                        <img src={img} alt="image"/>
                        <div className="title">Our system</div>
                        <div className="description">
                            <p>10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án.</p>
                        </div>
                        <button className="butt">About us</button>
                    </div>

                    <div className="transparentbox">
                        <div className="tracking">Tracking your fridge remotely.</div>
                        <div className="item">fridge moisture               |               vegetables              |               fridge temperature</div>
                        <div className="attr">  efficiently                                    faster                                   efficiently   </div>
                    </div>
                </div>
                <HomeFooter />
            </div>
        )
}

export default HomePage;