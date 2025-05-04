import React from "react";
import "./popupbox.css"
function PopUpBox({name}){

    return (
        <body>
            <div className="popupbox">
                <div className="title">{name} Adjustment</div>

                <div className="getval">
                    <div className="name">Input {name}</div>

                    <input className="inbox"/>
                </div>

                <button className="butt">Agree</button>
            </div>
        </body>
    )
}

export default PopUpBox;