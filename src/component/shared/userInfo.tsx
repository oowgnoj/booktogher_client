import React, { ReactElement } from "react";

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
  userInfo: IUserInfo;
}

const Info: React.FC<Props> = ({ userInfo }): ReactElement => {
  return (
    <div className="uk-panel" style={{ width: 300 }}>
      <img
        className="uk-align-left uk-margin-remove-adjacent"
        src="https://image.shutterstock.com/image-vector/people-icon-260nw-522300817.jpg"
        width="100"
        height="100"
        alt="Example image"
      />
      <p>{userInfo.name}</p>
      <p>{userInfo.profile}</p>
    </div>
  );
};

export default Info;
