import React, { useState, useEffect, ReactElement } from "react";
import { IUserInfo } from "./../shared/Types";

interface IProps {
  UserInfo: IUserInfo;
}
const ProgressBar: React.FC<IProps> = ({ UserInfo }): ReactElement => {
  const barStyle: object = { width: "50%", display: "inline-block" };
  const [bookGoal, setBookGoal] = useState<number>(10);
  const [essayGoal, setEssayGoal] = useState<number>(10);

  const handleBookGoal = (reading: number) => {
    setBookGoal(reading);
  };

  const handleEssayGoal = (reading: number) => {
    setBookGoal(reading);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ width: "50%", display: "inline-block" }}>독서 목표</p>
      <p style={{ width: "50%", display: "inline-block" }}>서평 목표</p>
      <progress
        id="js-progressbar"
        className="uk-progress"
        value={bookGoal}
        max="100"
        style={barStyle}
      ></progress>
      <progress
        id="js-progressbar"
        className="uk-progress"
        value={essayGoal}
        max="50"
        style={barStyle}
      ></progress>
      <div
        className="Wrapper_button"
        style={{ width: "50%", display: "inline-block" }}
      >
        <button
          className="uk-button uk-button-text"
          onClick={() => handleBookGoal}
        >
          change Goal
        </button>
      </div>

      <div
        className="Wrapper_button"
        style={{ width: "50%", display: "inline-block" }}
      >
        <button
          className="uk-button uk-button-text"
          onClick={() => handleBookGoal}
        >
          change Goal
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;