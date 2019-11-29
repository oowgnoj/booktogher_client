import React, { ReactElement, useEffect, useState, useRef } from "react";

import { reviews } from "./../shared/InitialStates";
import Entry from "./../shared/reviewEntry";
import { IReview, IUserInfo, IReviewBook } from "./../shared/Types";
import { reviewsBooks } from "./../shared/InitialStates";
import { fetchGetReviews } from "./../shared/Fetch";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

interface IProps {
  userReviews: IReview[];
  User: IUserInfo;
}

const Reviews: React.FC = (props: any): ReactElement => {
  const [userID, setUserID] = useState<string>("");
  const [myReview, setReview] = useState<IReview[]>(reviews);
  const [reviewBooks, setReviewBooks] = useState<IReviewBook[][]>(reviewsBooks);

  const setBoth = (reviews: IReview[], books: IReviewBook[][]): void => {
    return setReview(reviews), setReviewBooks(books);
  };

  useEffect(() => {
    setUserID(props.user._id);
  });

  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fetchGetReviews(setBoth, userID);
    } else {
      didMountRef.current = true;
    }
  }, [userID]);

  return (
    <div className="wrapper">
      <h2 style={{ fontFamily: "Nanum Myeongjo, serif", fontWeight: "bold" }}>
        나의 서평
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
        myReview.map((el: IReview, index: number) => (
          <Entry
            Review={el}
            from={"my"}
            key={index}
            books={reviewBooks[index]}
          />
        ))
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
