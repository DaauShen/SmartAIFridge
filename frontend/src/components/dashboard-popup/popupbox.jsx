import React from "react";
import "./popupbox.css"

function PopUpBox({name, close}){
    return (
        <div className="setting-box">
            <div className="popupbox">
                <div className="title">{name} Setting</div>

                <div className="getval">
                    <div className="name">Enter {name.toLowerCase()}</div>
                    <input className="inbox"/>
                </div>

                <div className = "popupbox-buttons">
                    <button className = "black-button" onClick = {close}>Close</button>
                    <button className = "white-button">Agree</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default PopUpBox;