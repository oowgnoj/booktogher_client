import React from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";

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

interface Props {
  Info: IBook;
}

const ReviewEntry: React.FC<Props> = ({ Info }) => {
  return (
    <div>
      <img src={Info.thumbnail} style={{ width: 150, height: 200 }} />
    </div>
  );
};

export default ReviewEntry;
