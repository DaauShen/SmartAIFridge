import React from "react";
import logo from "../assets/images/logo.png"
import "./footer.css";

function HomeFooter() {
  return (
    <div className="footer" style={{top: "1690px"}}>
      {/* <img src={logo} alt='logo' class='logo' /> */}
      <p className="copyright">
        © 2025 Smart AI Fridge Camera Project. All rights reserved.
      </p>
      <div className="devteam">
        <p className="title">Development Team</p>
        <ul>
          <li>Nguyen Huy Tai</li>
          <li>Nguyen Hao Hong Du</li>
          <li>Dinh Ba Khanh</li>
          <li>Tran Nguyen Anh Khoa</li>
          <li>Nong Thuc Khue</li>
        </ul>
      </div>
      <div className="info">
        <p className="title">Project Information</p>
        <ul>
          <li>HCMC University of Technology</li>
          <li>Multidisciplinary Project</li>
          <li>Supervised by Prof. Nguyen Phuong Duy</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeFooter;
