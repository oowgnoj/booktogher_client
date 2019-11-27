import React, { ReactElement } from "react";

import "./cards.css";
import { filter } from "domutils";
import { url } from "inspector";
const Cards: React.FC = (): ReactElement => {
  return (
    <div>
      <div
        className="uk-container"
        style={{
          height: "250px",
          backgroundRepeat: "no-repeat",
          WebkitFilter: "grayscale(100%)",
          opacity: "70%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2053&q=80')"
        }}
      >
        <div
          style={{
            height: "100px",
            justifyContent: "space-evenly",
            bottom: "0",
            position: "absolute"
          }}
        >
          <div
            className="uk-card uk-card-primary uk-card-body jongwoo"
            style={{
              display: "inline-block",
              textAlign: "center",
              width: "80px",
              height: "100px"
            }}
          >
            <p>Finished Book</p>
          </div>
          <div
            className="uk-card uk-card-primary uk-card-body"
            style={{
              display: "inline-block",
              textAlign: "center",
              width: "80px",
              height: "100px"
            }}
          >
            <p>Reading Book</p>
          </div>
          <div
            className="uk-card uk-card-primary uk-card-body"
            style={{
              display: "inline-block",
              textAlign: "center",
              width: "80px",
              height: "100px"
            }}
          >
            {" "}
            <p>TO read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
