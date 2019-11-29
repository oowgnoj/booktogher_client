import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";
import ReviewsEntry from "./ReviewsEntry";
import { IAuthor, IReview, IBookReview } from "../shared/Types";
import "./index.css";
import { timingSafeEqual } from "crypto";

interface IProps {
  reviews: IReview[];
  books: IBookReview[][];
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
          paddingTop: "30px",
          paddingLeft: "9%"
        }}
      >
        <span
          className="readcuration_reviews_reviewlist"
          style={{
            display: "block",
            paddingLeft: "40px"
          }}
        >
          {this.props.reviews.map((el: IReview, index: number) => (
            <ReviewsEntry
              review={el}
              key={index}
              book={this.props.books[index]}
            />
          ))}
        </span>
      </div>
    );
  }
}

export default ReviewsList;
