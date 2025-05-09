import React from "react";
import Popup from 'reactjs-popup';
import "./dashboard.css";
import Navbar2 from "../../components/navbar2";
import Footer from "../../components/footer";
import PopUpBox from "../../components/dashboard-popup/popupbox";
import LineChartComponent from "../../components/dashboard-popup/line-chart"
import image from "../../../../devices/received_images/mypic.jpg";
import big_logo from "../../assets/images/big_logo.png"

function Dashboard(){
    // Popup setting box
    

    // Fetch data from database 
    const timestamp = "TIMESTAMP";
    return(
        <div>
            <Navbar2/>
            <div className = "dashboard-container">
                {/* Image: Realtime image */}
                <div className = "image-container">
                    <img src = {image} alt = "Smart Fridge" className = "fridge-image"></img>
                    <p style={{fontStyle: "italic"}}>Updated at {timestamp}</p>
                    <button className = "go-to-fridge">Go to “Fridge”</button>
                </div>

                {/* Status: Temperature and humidity */}
                <div className = "status">
                    <div className = "temperature">
                        <div className = "top">
                            <div className = "label">Temperature</div>
                            <div className = "value">20°C</div>
                        </div>
                        <div className = "bottom">
                            <Popup modal trigger = {<button> Setting </button>}>
                                {close => <PopUpBox name = "Temperature" close = {close} />}
                            </Popup>
                        </div>
                    </div>
                    <div className = "humidity">
                        <div className = "top">
                            <div className = "label">Humidity</div>
                            <div className = "value">50%</div>
                        </div>
                        <div className = "bottom">
                            <Popup modal trigger = {<button> Setting </button>}>
                                {close => <PopUpBox name = "Humidity" close = {close} />}
                            </Popup>
                        </div>
                    </div>
                    <div>
                        <Popup modal trigger = {<button> View Graphs </button>}>
                            {close => <LineChartComponent close = {close} />}
                        </Popup>
                    </div>
                </div>

                {/* Logo: Big logo */}
                <div className = "big-logo">
                    <img src = {big_logo} alt = "Smart Fridge"></img>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Dashboard;