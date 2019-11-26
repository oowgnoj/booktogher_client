import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IReview, IReviews } from "./Types";

const UserHistoryReview = ({ reviews }: IReviews): ReactElement => {
  const list: any = reviews.map((review: IReview) => {
    if (review.published) {
      return (
        <div className="history_reviews_review">
          <Link
            to={`/review/${review._id}`}
            style={{ textDecoration: "none", color: "#919191" }}
          >
            <div style={{ fontWeight: "bold", color: "gray" }}>
              {review.title}
            </div>
            <div style={{ fontSize: "13px" }}>
              {review.contents.replace(/<[^>]*>?/gm, "").slice(0, 300) + "..."}
            </div>
          </Link>
          <hr />
        </div>
      );
    }
  });
  return (
    <div>
      <div className="history_reviews">{list}</div>
    </div>
  );
};

export default UserHistoryReview;
