import React, { ReactElement } from "react";

import "./cards.css";
<<<<<<< HEAD

=======
import { filter } from "domutils";
import { url } from "inspector";
>>>>>>> 20ac62183e96df3de22c135462373260a6c5a733
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
<<<<<<< HEAD
              height: "100px"
=======
              height: "100px",
              backgroundColor: "white"
>>>>>>> 20ac62183e96df3de22c135462373260a6c5a733
            }}
          >
            <p>Finished Book</p>
          </div>
<<<<<<< HEAD
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
=======
>>>>>>> 20ac62183e96df3de22c135462373260a6c5a733
        </div>
      </div>
    </div>
  );
};

export default Cards;
