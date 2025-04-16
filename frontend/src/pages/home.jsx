import NavBar1 from "../components/navbar";
import Footer from "../components/footer";
import img from "../assets/images/homepageimage.png"
import React from "react";
import "./home.css"


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
                <Footer/>
            </div>
        )
}

export default HomePage;