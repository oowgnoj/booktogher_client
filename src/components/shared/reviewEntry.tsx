import React, { ReactElement } from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
import { IReview } from "./Types";
import { Link } from "react-router-dom";

interface IProps {
  Review: IReview;
}
const ReviewEntry: React.FC<IProps> = ({ Review }: IProps): ReactElement => {
  const path: string = `/review/${Review._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div
        className="uk-card uk-card-default uk-width-1-2@m"
        style={{ width: "70%" }}
      >
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-auto"></div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">
                <img
                  className="uk-border-circle"
                  width="50"
                  height="50"
                  src={Review.author.image}
                />
                {Review.title}
              </h3>
              <p className="uk-text-meta uk-margin-remove-top">
                {Review.author.name}
              </p>
            </div>

            <p>
              {Review.contents.length > 120
                ? Review.contents.replace(/<[^>]*>?/gm, "").slice(0, 100) +
                  "..."
                : Review.contents.replace(/<[^>]*>?/gm, "")}{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReviewEntry;
