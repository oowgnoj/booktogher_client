import React, { ReactElement, useState, useEffect } from "react";

import { fakeReviews, fakeUser } from "../../fakeData/fake";
import "./../../../node_modules/uikit/dist/css/uikit.css";
import UserInfo from "../shared/userInfo";
import NavBar from "./navBar";
import Reviews from "./reviews";
import Books from "./books";
import ProgressBar from "./progressBar";
import { connect } from "react-redux";
import { fetchReview } from "./Fetch";
// Users
import { IUserInfo, IReview } from "./../shared/Types";

type activeCompt = ReactElement;

interface IProps {
  Info: IUserInfo;
}

export const Mypage: React.FC = (props: any): ReactElement => {
  const [myInfo, setInfo] = useState<IUserInfo>(fakeUser);
  const [myReview, setReview] = useState<IReview[]>(fakeReviews);
  const [active, setActive] = useState<string>("review");

  // get user information from REDUX STORE
  useEffect(() => {
    fetchReview(setReview);
    setInfo(props.user.User);
  }, []);

  // get review infromation from DB * FETCH *

  // Conditional Rendering nav Bar
  const handleActive = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void =>
    setActive(e.currentTarget.id);

  let activeComp: ReactElement = <Reviews userReviews={myReview}></Reviews>;

  if (active === "review") {
    activeComp = <Reviews userReviews={myReview}></Reviews>;
  } else if (active === "books") {
    activeComp = <Books User={myInfo}></Books>;
  } else if (active === "stats") {
    return (
      <div>
        <UserInfo userInfo={myInfo}></UserInfo>
        <NavBar handleActive={handleActive} />
        <ProgressBar UserInfo={myInfo}></ProgressBar>)
      </div>
    );
  }
  return (
    <div>
      <UserInfo userInfo={myInfo}></UserInfo>
      <NavBar handleActive={handleActive} />
      {activeComp}{" "}
    </div>
  );
};

function mapStateToProps(state: any): any {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Mypage);
