import React, {useState} from "react";
import "./fridge.css";
import image from "../../../devices/received_images/mypic.jpg";

export default function Fridge(){
    {/* fetch timestamp từ database */}
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
        <div class = "container">
            {/* Realtime image */}
            <div class = "image-container">
                <img src = {image} alt = "Smart Fridge" class = "fridge-image"></img>
                <p style={{fontStyle: "italic"}}>Updated at {timestamp}</p>
            </div>

            {/* Tables */}
            <div class = "display-table">
                {/* Vegetable */}
                <div class = "vegetable-table">
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
                                    <td>{OnOffButton()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Dishes */}
                <div id = "dish-table" class = "dish-table">
                    <table>
                        <thead>
                            <tr>
                            <th>Recommend Dishes</th>
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
                </div>
                
            </div>
        </div>
    )
}

function OnOffButton(){
    const [isOn, setIsOn] = useState(false);
    const changeMode = () => {
        setIsOn(!isOn);
    }
    const display = isOn ? "Hide" : "See";

    return (
        <button class = "see-btn" onClick = {changeMode}>{display}</button>
    )
}
  

