import React from "react";
import "./navbar1.css";
import logo from "../assets/images/logo.png"
function NavBar2(){
  return (

    <div class='navbar'>
      <div class="dropdown">
        <button class="dropdownbutton"><i class="material-icons">menu</i></button>
        <div class="dropcontent">
          <a href="#">HOME</a>
          <a href="#">FRIDGE</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
      <img src={logo} alt='Logo' class='logo'></img>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">FRIDGE</a></li>
        <li><a href="#">CONTACT</a></li>
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
