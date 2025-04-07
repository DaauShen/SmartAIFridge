import React from "react";
// import { LogoSmf } from "./LogoSmf";
import "./navbar.css";

function NavigationBar(){
  return (
    <div className="navigation-bar">
      <div className="sign-in-button">
        <button className="button">Sign in</button>
      </div>

      <button className="register-button">
        <button className="text-wrapper">Register</button>
      </button>

      <div className="div">HOME</div>

      <div className="text-wrapper-2">ABOUT US</div>

      <div className="text-wrapper-3">CONTACT</div>

      {/* <LogoSmf className="logo-smf-instance" property1="frame-13" /> */}
    </div>
  );

};

export default NavigationBar
