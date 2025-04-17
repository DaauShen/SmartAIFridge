import React from "react";
import "./navbar1.css";
import logo from "../assets/images/logo.png"
function NavBar1(){
  return (

    <div class='navbar'>
      {/* <button class="dropdown"><i class="material-icons">menu</i></button>
      <div class="dropblock"></div> */}
      <div class="dropdown">
        <button class="dropdownbutton"><i class="material-icons">menu</i></button>
        {/* <div class="dropblock"/> */}
        <div class="dropcontent">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
      <img src={logo} alt='Logo' class='logo'></img>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <button class="signin">Sign in</button>
      <button class="register">Register</button>
    </div>
    
  );

};

export default NavBar1
