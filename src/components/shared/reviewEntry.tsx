import React, { ReactElement } from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
import { IReview } from "./Types";
import { border } from "@material-ui/system";

interface IProps {
  Review: IReview;
}
const ReviewEntry: React.FC<IProps> = ({ Review }: IProps): ReactElement => {
  return (
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
                src="https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170456794/76519872-little-boy-bare-chest-smiling.jpg"
              />
              {Review.title}
            </h3>
            <p className="uk-text-meta uk-margin-remove-top">
              {Review.author.name}
            </p>
          </div>
          <p>{Review.contents.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewEntry;
