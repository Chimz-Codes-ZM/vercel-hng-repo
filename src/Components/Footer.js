import React from "react";
import ZuriInternship from "../Images/Zuri internship logo.png";
import Ingressive from "../Images/Ingressive.png";

function Footer() {
  return (
    <div>
      <hr></hr>
      <div className="footer-content">
        <img src={ZuriInternship} id="zuri-internship" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={Ingressive} id="ingressive" />
      </div>
    </div>
  );
}

export default Footer;
