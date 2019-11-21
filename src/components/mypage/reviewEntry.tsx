import React, { ReactElement } from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
import { IReview } from "./../shared/Types";

interface IProps {
  Review: IReview;
}
const ReviewEntry: React.FC<IProps> = ({ Review }: IProps): ReactElement => {
  return (
    <div
      className="uk-card uk-card-default uk-width-1-2@m"
      style={{ width: 300, display: "inline-block" }}
    >
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid>
          <div className="uk-width-auto"></div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">
              {Review.title}
            </h3>
            <p className="uk-text-meta uk-margin-remove-top">
              {Review.author.name}
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>
          {Review.contents
            .slice(3, Review.contents.length - 4)
            .replace(/<[^>]*>?/gm, "")}
        </p>
      </div>
    </div>
  );
};

export default ReviewEntry;
