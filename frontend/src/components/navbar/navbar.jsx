import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar1.css";
import logo from "../../assets/images/logo.png"

function NavBar1(){
  const navigate = useNavigate();
  
  return (
    <div class='navbar'>
      {/* <button class="dropdown"><i class="material-icons">menu</i></button>
      <div class="dropblock"></div> */}
      <div class="dropdown">
        <button class="dropdownbutton"><i class="material-icons">menu</i></button>
        {/* <div class="dropblock"/> */}
        <div class="dropcontent">
          <Link to="/">HOME</Link>
          <Link to="/aboutus">ABOUT US</Link>
          <Link to="/contactus">CONTACT</Link>
        </div>
      </div>
      <img src={logo} alt='Logo' class='logo'></img>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/contactus">CONTACT</Link></li>
      </ul>
      <button class = "signin" onClick = {() => navigate("/signin")}>Sign in</button>
      <button class = "register" onClick = {() => navigate("/signup")}>Register</button>
    </div>
    
  );

};

export default NavBar1
