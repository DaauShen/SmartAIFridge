import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"
import NavBar1 from "../../components/navbar";
import img from "../../assets/images/homepageimage.png";
import HomeFooter from "../../components/homefooter";

function HomePage(){
    const navigate = useNavigate();
    const infoboxRef = useRef(null); 
    const handleDiscoverClick = () => {
        if (infoboxRef.current) {
            const offsetTop = infoboxRef.current.offsetTop; // Get the position of the element
            window.scrollTo({ top: offsetTop - 100, behavior: "smooth" }); // Scroll with an offset
        }
    };

    return (
        <div className="after">
            <NavBar1/>
            <div className="background">
                <div className="title">Smart Fridge System</div>
                <div className="manage">Manage your fridge efficiently</div>
                <div className="whitetext">System for supporting smart camera integrates with your fridge.</div>
                <button className="discoverbutton" onClick={handleDiscoverClick}>Discover</button>
                {/* <span className="word-rotate"></span> */}
            </div>
            <div className="infobox" ref = {infoboxRef}>
                <div className="whitebox">
                    <img src={img} alt="image"/>
                    <div className="title">Our system</div>
                    <div className="description">
                        <p>10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án 10 điểm đồ án.</p>
                    </div>
                    <button className="butt" onClick = {() => navigate("/aboutus")}>About us</button>
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