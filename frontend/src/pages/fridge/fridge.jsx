import React, {useState, useEffect} from "react";
import Popup from 'reactjs-popup';
import "./fridge.css";
import image from "../../../../devices/received_images/mypic.jpg";
import Navbar2 from "../../components/navbar2";
import Footer from "../../components/footer";

export default function Fridge(){
    const [img, setImg] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/images")
        .then((res) => res.json())
        .then((data) => setImg(data.base64));
    }, []);

    const timestamp = "TIMESTAMP";
    const vegetables = [
        { name: "Broccoli", quantity: 1},
        { name: "Bell Pepper", quantity: 3},
        { name: "Watermelon", quantity: 1},
        { name: "Lettuce", quantity: "Yes"}
    ];
    const dishes = [
        { name: "Dish 1"},
        { name: "Dish 2"},
        { name: "Dish 3"}
    ];
    
    return(
        <div>
            <Navbar2/>
            <div className = "fridge-container">
                {/* Realtime image */}
                <div className = "image-container">
                    {img && <img src={`data:image/jpeg;base64,${img}`} alt="IoT Image" className = "fridge-image" />}
                    <p style={{fontStyle: "italic"}}>Updated at {timestamp}</p>
                </div>

                {/* Tables */}
                <div className = "display-table">
                    {/* Vegetable */}
                    <div className = "vegetable-table">
                        <table>
                            <thead>
                                <tr>
                                <th>Vegetable</th>
                                <th>Quantity</th>
                                <th>Recommended Dishes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vegetables.map((veg, index) => (
                                    <tr key = {index}>
                                        <td>{veg.name}</td>
                                        <td>{veg.quantity}</td>
                                        <td>
                                            <Popup modal trigger = {<button className = "see-btn">See</button>}>
                                                {close => 
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                            <th>Recommended Dishes</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {dishes.map((dish, index) => (
                                                                <tr key = {index}>
                                                                    <td>{dish.name}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                }
                                            </Popup>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Dishes */}
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
  

