import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";
import ReviewsEntry from "./ReviewsEntry";
import { IAuthor } from "../shared/Types";
import "./index.css";

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
  reviews: IReview[];
}

class ReviewsList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    return (
      <div
        className="readcuration_reviews_reviewlist_wrapper"
        style={{
          display: "flex",
          paddingLeft: "100px",
          paddingTop: "30px"
        }}
      >
        <span
          className="readcuration_reviews_reviewlist"
          style={{
            display: "block",
            paddingLeft: "70px"
          }}
        >
          {this.props.reviews.map((el, index) => (
            <ReviewsEntry review={el} key={index} />
          ))}
        </span>
      </div>
    );
  }
}

export default ReviewsList;
