import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./fridge.css";
import Navbar2 from "../../components/navbar/navbar2";
import Footer from "../../components/footer/footer";

export default function Fridge() {
  const [img, setImg] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [light, setLight] = useState(false);
  const [fruits, setFruits] = useState([]);
  const [seeButton, setSeeButton] = useState(null);
  const [dishes, setDishes] = useState([]);

  // Fetch image and timestamp every second
  useEffect(() => {
    const fetchImage = () => {
      fetch("http://localhost:5001/api/images")
        .then((res) => res.json())
        .then((data) => {
          setImg(data.base64);
          setTimestamp(new Date(data.timestamp).toLocaleString());
        });
    };

    fetchImage();
    const interval = setInterval(fetchImage, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle light on/off
  const toggleLight = async () => {
    const newState = !light;

    try {
      const response = await fetch("http://localhost:5001/api/light", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: newState }),
      });

      const result = await response.json();
      alert(result.message || result.error);
      setLight(newState);
    } catch (err) {
      alert("Lỗi gửi yêu cầu bật/tắt đèn: " + err.message);
    }
  };

  // Fetch fruit count data once
  useEffect(() => {
    fetch("http://localhost:5001/api/counts")
      .then((res) => res.json())
      .then((data) => {
        const values = data?.values || {};
        const fruitArray = Object.entries(values).map(([name, quantity]) => ({
          name,
          quantity,
        }));
        setFruits(fruitArray);
      });
  }, []);

  // Handle dish suggestion display
  const handleSeeClick = (index, fruitName) => {
    const recommendedDishes = {
      banana: [{ name: "Banana Smoothie" }, { name: "Fried Banana" }],
      apple: [{ name: "Apple Pie" }, { name: "Baked Apple" }],
    };

    setDishes(recommendedDishes[fruitName] || [{ name: "No recommendation" }]);
    setSeeButton(seeButton === index ? null : index);
  };

  return (
    <div>
      <Navbar2 />
      <div className="fridge-container">
        {/* Image section */}
        <div className="image-container">
          {img && (
            <img
              src={`data:image/jpeg;base64,${img}`}
              alt="IoT Image"
              className="fridge-image"
            />
          )}
          <p style={{ fontStyle: "italic" }}>
            Updated at {timestamp || "Loading..."}
          </p>
          <button
            onClick={toggleLight}
            className={light ? "light-on-btn" : "light-off-btn"}
          >
            {light ? "Light: On" : "Light: Off"}
          </button>
        </div>

        {/* Fruit Table */}
        <div className="display-table">
          <div className="vegetable-table">
            <table>
              <thead>
                <tr>
                  <th>Fruit</th>
                  <th>Quantity</th>
                  <th>Recommended Dishes</th>
                </tr>
              </thead>
              <tbody>
                {fruits.map((fruit, index) => (
                  <tr key={index}>
                    <td>{fruit.name}</td>
                    <td>{fruit.quantity}</td>
                    <td>
                      <button
                        className="see-btn"
                        onClick={() => handleSeeClick(index, fruit.name)}
                      >
                        {seeButton === index ? "Hide" : "See"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dishes Table */}
          {seeButton !== null && (
            <div className="dish-table">
              <table>
                <thead>
                  <tr>
                    <th>Dish</th>
                  </tr>
                </thead>
                <tbody>
                  {dishes.map((dish, index) => (
                    <tr key={index}>
                      <td>{dish.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
