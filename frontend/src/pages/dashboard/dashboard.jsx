import React, {useState, useEffect} from "react";
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
    const [img, setImg] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);

    useEffect(() => {
        fetchFridgeData(); // first load
        const interval = setInterval(fetchFridgeData, 5000); // every 5s
        return () => clearInterval(interval); // cleanup
      }, []);

    useEffect(() => {
        fetch("http://localhost:5000/api/images")
        .then((res) => res.json())
        .then((data) => setImg(data.base64));
    }, []);

    const fetchFridgeData = () => {
        fetch("http://localhost:5000/api/fridge")
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setTemperature(data.temperature);
              setHumidity(data.humidity);
            }
          });
      };
      

    useEffect(() => {
        fetchFridgeData();
    }, []);
      


    // Fetch data from database 
    const timestamp = "TIMESTAMP";
    return(
        <div>
            <Navbar2/>
            <div className = "dashboard-container">
                {/* Image: Realtime image */}
                <div className = "image-container">
                    <img src = {`data:image/jpeg;base64,${img}`} alt = "Smart Fridge" className = "fridge-image"></img>
                    <p style={{fontStyle: "italic"}}>Updated at {timestamp}</p>
                    <button className = "go-to-fridge">Go to “Fridge”</button>
                </div>

                {/* Status: Temperature and humidity */}
                <div className = "status">
                    <div className = "temperature">
                        <div className = "top">
                            <div className = "label">Temperature</div>
                            <div className = "value">{temperature != null ? `${temperature}°C` : "Loading..."}</div>
                        </div>
                        <div className = "bottom">
                            <Popup modal trigger = {<button> Setting </button>}>
                                {close => <PopUpBox name = "Temperature" close = {close} refresh={fetchFridgeData} />}
                            </Popup>
                        </div>
                    </div>
                    <div className = "humidity">
                        <div className = "top">
                            <div className = "label">Humidity</div>
                            <div className = "value">{humidity != null ? `${humidity}%` : "Loading..."}</div>
                        </div>
                        <div className = "bottom">
                            <Popup modal trigger = {<button> Setting </button>}>
                                {close => <PopUpBox name = "Humidity" close = {close} refresh={fetchFridgeData}/>}
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