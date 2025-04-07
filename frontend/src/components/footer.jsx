import React from "react";
// import { Github } from "./Github";
// import { LogoSmf } from "./LogoSmf";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="copyright">
        © 2025 Smart AI Fridge Camera Project. All rights reserved.
      </p>

      <div className="div">
        <div className="text-wrapper">Github</div>

        {/* <Github className="github-instance" /> */}
      </div>

      <div className="box">
        <div className="header-links">
          <div className="subtitle">Project Information</div>
        </div>

        <div className="body-links">
          <div className="link">HCMC University of Technology</div>

          <div className="link-2">Multidisciplinary Project</div>

          <p className="link-3">Supervised by Prof. Nguyen Phuong Duy</p>
        </div>
      </div>

      <div className="box-2">
        <div className="header-links">
          <div className="subtitle">Development Team</div>
        </div>

        <div className="body-links-2">
          <div className="link">Nguyen Huy Tai</div>

          <div className="link-2">Nguyen Hao Hong Du</div>

          <div className="link-3">Dinh Ba Khanh</div>

          <div className="link-3">Tran Nguyen Anh Khoa</div>

          <div className="link-3">Nong Thuc Khue</div>
        </div>
      </div>

      {/* <LogoSmf className="logo-smf-instance" property1="frame-13" /> */}
    </div>
  );
};

export default Footer;
