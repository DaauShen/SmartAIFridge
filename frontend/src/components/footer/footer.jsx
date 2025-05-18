import React from "react";
import logo from "../../assets/images/logo.png"
import "./footer.css";

function Footer() {
  return (
    <footer class="footer">
        <div class="footer-container">
        
            <div class="footer-column">
                <h1>SmartFridge</h1>
                <p>© 2025 SmartFridge. All rights reserved.</p>
            </div>

            <div class="footer-column">
                <h4>Development Team</h4>
                <ul>
                    <li>Nguyen Huy Tai</li>
                    <li>Nguyen Hao Hong Du</li>
                    <li>Dinh Ba Khanh</li>
                    <li>Tran Nguyen Anh Khoa</li>
                    <li>Nong Thuc Khue</li>
                </ul>
            </div>

            <div class="footer-column">
                <h4>Project Information</h4>
                <ul>
                    <li>HCMC University of Technology</li>
                    <li>Multidisciplinary Project</li>
                    <li>Supervised by Prof. Nguyen Phuong Duy</li>
                </ul>
            </div>

        </div>
    </footer>
  );
};

export default Footer;
