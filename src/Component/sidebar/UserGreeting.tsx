import React, { ReactElement } from "react";
import UserInfo from "./UserInfo";

interface IBook {
  id: number;
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
  id: number;
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
  userinfo: IUserInfo;
}

const UserGreeting: React.SFC<IProps> = ({
  userinfo
}: IProps): React.ReactElement => {
  return (
    <div className="sidebar_user">
      <UserInfo info={userinfo} />
      <button>내 서재 가기</button>
      <button>서평쓰기</button>
      <button>홈</button>
      <button>로그아웃</button>
    </div>
  );
};

export default UserGreeting;
