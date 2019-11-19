import React from "react";
import Entry from "./bookSimpleEntry";
import Iframe from "./iframe";

interface IBoook {
  id: string;
  authors: string[];
  thumbnail: string;
  title: string;
}
interface IBoookReading extends IBoook {
  start: string;
  goal: string;
}
interface IBoookFinished extends IBoook {
  start: string;
  end: string;
}
interface IUserInfo {
  id: string;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: IBoook[];
  reading: IBoookReading[];
  finished: IBoookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

interface IProps {
  Info: IUserInfo;
}

const Books: React.FC<IProps> = ({ Info }) => {
  var toRead = Info.to_read;
  var reading = Info.reading;
  var finished = Info.finished;
  console.log(Info);
  return (
    <div>
      <h3>To READ</h3>
      {toRead.map(el => (
        <Entry Info={el} />
      ))}{" "}
      <h3>Reading</h3>
      {reading.map(el => (
        <Entry Info={el} />
      ))}{" "}
      <h3>finished</h3>
      {finished.map(el => (
        <Entry Info={el} />
      ))}{" "}
    </div>
  );
};

export default Books;
