import React, { useState } from "react";
import "./popupbox.css";

function PopUpBox({ name, close }) {
    const [value, setValue] = useState("");

    const handleAgree = async () => {
        if (!value) {
          alert("Vui lòng nhập giá trị.");
          return;
        }
      
        const payload = {
          [name.toLowerCase() + "_Threshold"]: parseFloat(value),
          //timestamp: new Date().toISOString().replace("T", " ").split(".")[0]
        };
      
        try {
          const response = await fetch("http://localhost:5001/api/send-data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
      
          const result = await response.json();
          alert(result.message || result.error);
          console.log(payload);
      
          if (typeof refresh === "function") refresh(); // <== Call this!
          close();
        } catch (error) {
          alert("Gửi dữ liệu thất bại: " + error.message);
        }
      };
      

    return (
        <div className="setting-box">
            <div className="popupbox">
                <div className="title">{name} Setting</div>

                <div className="getval">
                    <div className="name">Enter {name.toLowerCase()}</div>
                    <input
                        className="inbox"
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={`Enter ${name.toLowerCase()}...`}
                    />
                </div>

                <div className="popupbox-buttons">
                    <button className="black-button" onClick={close}>Close</button>
                    <button className="white-button" onClick={handleAgree}>Agree</button>
                </div>
            </div>
        </div>
    );
}

export default PopUpBox;
