import React, { useState, useEffect, ReactElement } from "react";
import { IUserInfo } from "./../shared/Types";

interface IProps {
  UserInfo: IUserInfo;
}
const ProgressBar: React.FC<IProps> = ({ UserInfo }): ReactElement => {
  const barStyle: object = { width: "30%", display: "inline-blodk" };
  const [bookGoal, setBookGoal] = useState<number>(10);
  const [essayGoal, setEssayGoal] = useState<number>(10);

  const handleBookGoal = (reading: number) => {
    setBookGoal(reading);
  };

  const handleEssayGoal = (reading: number) => {
    setBookGoal(reading);
  };

  return (
    <div>
      <h3>독서 목표</h3>
      <progress
        id="js-progressbar"
        className="uk-progress"
        value={bookGoal}
        max="100"
        style={barStyle}
      ></progress>
      <button onClick={() => handleBookGoal}>changeGoal</button>
      <h3>서평 목표</h3>
      <progress
        id="js-progressbar"
        className="uk-progress"
        value={essayGoal}
        max="50"
        style={barStyle}
      ></progress>
      <button onClick={() => handleEssayGoal}>changeGoal</button>
    </div>
  );
};

export default ProgressBar;
