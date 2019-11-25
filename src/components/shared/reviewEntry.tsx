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
      style={{ width: "100%", boxShadow: "none" }}
    >
      <div className="uk-card-header" style={{ borderBottom: "none" }}>
        <div className="uk-grid-small uk-flex-middle" uk-grid>
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src="https://st2.depositphotos.com/5255311/9643/v/950/depositphotos_96436808-stock-illustration-human-icon-support-vectors-design.jpg"
              style={{ display: "inline-block" }}
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">
              {" "}
              {Review.title}
            </h3>
            <p className="uk-text-meta uk-margin-remove-top"></p>
          </div>
        </div>
      </div>
      <div className="uk-card-body" style={{ paddingTop: "0" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      {/* <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">
          Read more
        </a>
      </div> */}
    </div>
  );
};

export default ReviewEntry;
