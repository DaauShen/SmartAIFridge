import React from "react";
import "./AboutUs.css";
import { FaUserAlt } from "react-icons/fa";

const AboutUs = () => {
  const teamMembers = [
    { name: "Nguyen Huu Tai", description: "Hyper Carry of team, literally the GOAT" },
    { name: "Nguyen Hao Hong Du", description: "Backend guy, Gigachad brings MongoDB into work" },
    { name: "Nong Thuc Khue", description: "Ey chat, W Khue in the chat, literally the next goat, Nguyen Android, big sis of Nguyen IOS and is a daughter of Nguyen An Khuong" },
    { name: "Dinh Ba Khanh", description: "Component designer, W Khanh" },
    { name: "Tran Nguyen Anh Khoa", description: "Only L guy in here, design 2 pages" },
  ];

  const instructor = { name: "Nguyen Phuong Duy" }; // Instructor's name

  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">About Us</h1>

      <div className="info-grid">
        {teamMembers.map((member, index) => (
          <div className="info-box" key={index}>
            <h2>{member.name}</h2>
            <FaUserAlt className="user-icon" />
            <p>{member.description}</p>
          </div>
        ))}
      </div>

      <div className="instructor-section">
        <h3>Instructor</h3>
        <div className="instructor-box">
          <FaUserAlt className="user-icon" />
          <p>{instructor.name}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;