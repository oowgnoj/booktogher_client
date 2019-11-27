import React, { useState, useEffect, ReactElement } from "react";
import { IUserInfo } from "./../shared/Types";

interface IProps {
  UserInfo: IUserInfo;
}
const ProgressBar: React.FC<IProps> = ({ UserInfo }): ReactElement => {
  const barStyle: object = { width: "50%", display: "inline-block" };
  const [bookGoal, setBookGoal] = useState<number>(10);
  const [essayGoal, setEssayGoal] = useState<number>(10);

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
    </div>
  );
};

export default ProgressBar;
