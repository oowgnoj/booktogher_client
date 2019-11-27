import React, { ReactElement, useEffect, useState, useRef } from "react";
import { fakeReviews } from "./../../fakeData/fake";

import Entry from "./../shared/reviewEntry";
import { IReview, IUserInfo } from "./../shared/Types";
import { fetchReview } from "./../shared/Fetch";
import { connect } from "react-redux";
import "./index.css";

interface IProps {
  userReviews: IReview[];
  User: IUserInfo;
}

const Reviews: React.FC = (props: any): ReactElement => {
  const [myReview, setReview] = useState<IReview[]>(fakeReviews);
  useEffect(() => {
    fetchReview(setReview, props.user._id);
  }, [props.user._id]);

  return (
    <div className="wrapper">
      <h2>your reviews</h2>
      {myReview.length ? (
        myReview.map((el: IReview) => <Entry Review={el} />)
      ) : (
        <div></div>
      )}
    </div>
  );
};
function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps)(Reviews);
