import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar1.css";
import logo from "../assets/images/logo.png"
function NavBar2(){
  return (
    <div class='navbar'>
      <div class="dropdown">
        <button class="dropdownbutton"><i class="material-icons">menu</i></button>
        <div class="dropcontent">
          <Link to="/dashboard">DASHBOARD</Link>
          <Link to="/aboutus">FRIDGE</Link>
          <Link to="/contactus">CONTACT</Link>
        </div>
      </div>
      <img src={logo} alt='Logo' class='logo'></img>
      <ul>
        <li><Link to="/dashboard">DASHBOARD</Link></li>
        <li><Link to="/fridge">FRIDGE</Link></li>
        <li><Link to="/contactus">CONTACT</Link></li>
      </ul>
      <div className="noti">
        <button class="notibutton">
            <i class="material-icons">notifications</i>
            <div class="notiboard"> 
                <p><b>Notifications</b></p>
            </div>
        </button>

      </div>
      <button className="account"><i class="material-icons">person</i></button>
    </div>
    
  );

};

export default NavBar2
