import React, { ReactElement } from "react";
import { IAuthor } from "../shared/Types";

interface IReview {
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IProps {
  review: IReview;
}

class ReviewsEntry extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    const { review } = this.props;
    return (
      <div
        className="readcuration_reviews_reviewentry"
        style={{ marginLeft: "80px" }}
      >
        <span style={{ display: "inline-block" }}>
          <img
            src={
              review.author.image
                ? review.author.image
                : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
            }
            alt={review.title}
            style={{ width: "120px", height: "auto" }}
            className="image"
          />
          <div
            className="reviewentry_author"
            style={{
              width: "120px",
              textAlign: "center",
              marginBottom: "10px"
            }}
          >
            {review.author.name}
          </div>
        </span>
        <span style={{ display: "inline-block" }}>
          <div className="reviewentry_title" style={{ fontSize: "30px" }}>
            <b>{review.title.replace(/<[^>]*>?/gm, "")}</b>
          </div>
          <div className="reviewentry_contents">
            <b>{review.contents.replace(/<[^>]*>?/gm, "")}</b>
          </div>
        </span>
      </div>
    );
  }
}

export default ReviewsEntry;
