import React, { useState, useEffect } from "react";
import "./../../../node_modules/uikit/dist/css/uikit.css";

interface IBook {
  id: string;
  authors: string[];
  thumbnail: string;
  title: string;
}

interface IBookReading extends IBook {
  start: string;
  goal: string;
}
interface IBookFinished extends IBook {
  start: string;
  end: string;
}

interface IUserInfo {
  id: string;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: IBook[];
  reading: IBookReading[];
  finished: IBookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

interface IProps {
  UserInfo: IUserInfo;
}
const ProgressBar: React.FC<IProps> = ({ UserInfo }) => {
  console.log(UserInfo);
  const barStyle: object = { width: "30%", display: "inline-blodk" };
  const [userGoal, setGoal] = useState<number>(0);
  useEffect(() => setGoal(30));
  return (
    <div>
      <h3>독서 목표</h3>
      <progress
        id="js-progressbar"
        className="uk-progress"
        value={userGoal}
        max="100"
        style={barStyle}
      ></progress>
      <h3>서평 목표</h3>
      <progress
        id="js-progressbar"
        className="uk-progress"
        value="37"
        max="50"
        style={barStyle}
      ></progress>
    </div>
  );
};

export default ProgressBar;
