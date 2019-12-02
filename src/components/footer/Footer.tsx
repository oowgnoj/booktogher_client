import React, { ReactElement } from "react";
import logo from "../../Asset/images/logo.png";
import "./Footer.css"

const Footer = (): ReactElement => {
  return (
    <div className ="footer-area">
      <img
        src={logo}
        alt="로고"
        style={{
          width: "100px",
          marginTop: "35px",
          marginLeft: "20%"
        }}
      />
      <span>
        © 2019, BookTogether
      </span>
    </div>
  );
};

export default Footer;
