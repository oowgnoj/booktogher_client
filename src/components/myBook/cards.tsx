import React, { ReactElement } from "react";

import "./cards.css";
import { textAlign } from "@material-ui/system";
const Cards: React.FC = (): ReactElement => {
  return (
    <div>
      <div
        className="uk-container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "250px",
          backgroundRepeat: "no-repeat",
          WebkitFilter: "grayscale(80%)",
          opacity: "70%",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1445540393741-e3153d003d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80')"
        }}
      >
        <div
          style={{
            height: "70px",
            textAlign: "center",
            marginTop: "auto",
            padding: "10px"
          }}
        >
          <div className="cardEntry">
            <p className="card-Content">
              <img
                src={"https://image.flaticon.com/icons/svg/88/88179.svg"}
                width="20px"
                height="20px"
              />{" "}
              읽은 책
            </p>
          </div>
          <div className="cardEntry">
            <p className="card-Content">
              {" "}
              <img
                src={"https://image.flaticon.com/icons/svg/14/14815.svg"}
                width="17px"
                height="17px"
              />{" "}
              읽고 싶은 책
            </p>
          </div>
          <div
            className="cardEntry"
            style={{
              borderRight: "none"
            }}
          >
            <p className="card-Content">
              {" "}
              <img
                src={"https://image.flaticon.com/icons/svg/1885/1885613.svg"}
                width="20px"
                height="20px"
              />{" "}
              올해 목표
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
