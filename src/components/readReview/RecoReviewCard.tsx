import React, { ReactElement } from "react";
import "./RecoReviewCard.css";
import { Link } from "react-router-dom";

const RecoReviewCard = ({ review }: any): ReactElement => {
  return (
    <div className="recoReview-card">
      <div className="recoReview-header">
        <div className="recoReview-img">
          <img
            className="uk-border-circle"
            width="40"
            height="40"
            src={review.author.image}
            alt={review.title}
          />
        </div>
        <div className="recoReview-body">
          <h5 className="recoReview-title">{review.title}</h5>
        </div>
      </div>
      <div className="recoReview-footer">
        <a href={`/review/${review._id}`} className="uk-button uk-button-text">
          Read more
        </a>
      </div>
    </div>
  );
};

export default RecoReviewCard;
