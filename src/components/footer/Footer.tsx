import React, { ReactElement } from "react";
import logo from "../../Asset/images/logo.png";

const Footer = (): ReactElement => {
  const style: any = {
    width: "100%",
    height: "150px",
    backgroundColor: "#eee",
    marginTop: "160px"
  };
  return (
    <div style={style}>
      <img
        src={logo}
        alt="로고"
        style={{
          width: "100px",
          marginTop: "35px",
          marginLeft: "20%"
        }}
      />
      <span style={{ marginLeft: "40%", paddingTop: "80px" }}>
        © 2019, BookTogether
      </span>
    </div>
  );
};

export default Footer;
