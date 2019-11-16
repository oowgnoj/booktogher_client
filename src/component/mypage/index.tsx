import React, { ReactElement, useState } from "react";
import { fakeReviews, fakeUser, fakeUser2 } from "../../fakeData/fake";
import "./../../../node_modules/uikit/dist/css/uikit.css";
import UserInfo from "../shared/userInfo";
import NavBar from "./navBar";
import Reviews from "./reviews";
// import Books from "./books";

interface IauthorInfo {
  id: number;
  image: string;
  name: string;
  profile: string;
}

interface IuserReview {
  id: number;
  author: IauthorInfo;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface Ibook {
  id: number;
  authors: string[];
  thumbnail: string;
  title: string;
}

interface IbookReading extends Ibook {
  start: string;
  goal: string;
}
interface IbookFinished extends Ibook {
  start: string;
  end: string;
}

interface IuserInfo {
  id: number;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: Ibook[];
  reading: IbookReading[];
  finished: IbookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

export const Mypage: React.FC = IuserInfo => {
  const [myInfo, setInfo] = useState<IuserInfo>(fakeUser);
  const [myReview, setReview] = useState<IuserReview[]>(fakeReviews);

  return (
    <div>
      <UserInfo {...fakeUser2}></UserInfo>
      <NavBar></NavBar>
      <Reviews {...fakeReviews}></Reviews>
    </div>
  );
};

export default Mypage;
