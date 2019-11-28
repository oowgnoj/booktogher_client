import React, { ReactElement, useEffect, useState, useRef } from "react";
import { fakeReviews } from "./../../fakeData/fake";

import Entry from "./../shared/reviewEntry";
import { IReview, IUserInfo } from "./../shared/Types";
import { fetchReview } from "./../shared/Fetch";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
      <h2 style={{ fontWeight: "bold" }}>
        your reviews
        <button
          className="uk-button uk-button-default"
          style={{ float: "right" }}
        >
          <Link to={"/postreview"} style={{ color: "black" }}>
            서평 쓰러가기
          </Link>
        </button>
      </h2>
      <hr style={{ marginTop: "5px" }} />
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
