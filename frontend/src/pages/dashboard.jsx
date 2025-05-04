import React from "react";
import "./dashboard.css";
import image from "../../../devices/received_images/mypic.jpg";
import big_logo from "../assets/images/big_logo.png"

function Dashboard(){
    {/* Fetch data từ database */}
    const timestamp = "TIMESTAMP";
    return(
        <div class = "container">
            {/* Image: Realtime image */}
            <div class = "image-container">
                <img src = {image} alt = "Smart Fridge" class = "fridge-image"></img>
                <p style={{fontStyle: "italic"}}>Updated at {timestamp}</p>
                <button class = "go-to-fridge">Go to "Fridge"</button>
            </div>

            {/* Status: Temperature and humidity */}
            <div class = "status">
                <div class = "temperature">
                    <span class = "label">Temperature</span>
                    <span class = "value">20°C</span>
                </div>
                <div class = "humidity">
                    <span class = "label">Humidity</span>
                    <span class = "value">50%</span>
                </div>
            </div>
            
            {/* Logo: Big logo */}
            <div class = "big-logo">
                <img src = {big_logo} alt = "Smart Fridge"></img>
            </div>

        </div>
    )
}

export default Dashboard;