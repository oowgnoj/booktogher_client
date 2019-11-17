import React from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
interface IAuthorInfo {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface IUserReview {
  id: string;
  author: IAuthorInfo;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}
interface IProps {
  reviewEntry: IUserReview;
}

const ReviewEntry: React.FC<IProps> = ({ reviewEntry }) => {
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
              {reviewEntry.title}
            </h3>
            <p className="uk-text-meta uk-margin-remove-top">
              {reviewEntry.author.name}
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>{reviewEntry.contents.slice(3, reviewEntry.contents.length - 4)}</p>
      </div>
    </div>
  );
};

export default ReviewEntry;
