import React, { ReactElement, useState } from "react";
import { fakeReviews, fakeUser } from "../../fakeData/fake";
import "./../../../node_modules/uikit/dist/css/uikit.css";
import UserInfo from "../shared/userInfo";
import NavBar from "./navBar";
import Reviews from "./reviews";
import Books from "./books";
import ProgressBar from "./progressBar";

// Books
interface IAuthorInfo {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface IUserReview {
  id: string;
  author: IAuthorInfo;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

// Users
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

export const Mypage: React.FC = (): ReactElement => {
  const [myInfo, setInfo] = useState<IUserInfo>(fakeUser);
  const [myReview, setReview] = useState<IUserReview[]>(fakeReviews);
  const [active, setActive] = useState<string>("나의 서평");

  const handleActive = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
    setActive(e.currentTarget.id);

  if (active === "reviews") {
    return (
      <div>
        <UserInfo userInfo={myInfo}></UserInfo>
        <NavBar handleActive={handleActive} />
        <Reviews userReviews={fakeReviews}></Reviews>
      </div>
    );
  } else if (active === "books") {
    return (
      <div>
        <UserInfo userInfo={myInfo}></UserInfo>
        <NavBar handleActive={handleActive} />
        <Books Info={myInfo}></Books>
      </div>
    );
  } else if (active === "stats") {
    return (
      <div>
        <UserInfo userInfo={myInfo}></UserInfo>
        <NavBar handleActive={handleActive} />
        <ProgressBar UserInfo={myInfo}></ProgressBar>
      </div>
    );
  }

  return (
    <div>
      <UserInfo userInfo={myInfo}></UserInfo>
      <NavBar handleActive={handleActive} />
      <Reviews userReviews={fakeReviews}></Reviews>
    </div>
  );
};

export default Mypage;
