import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";
import ReviewsEntry from "../re_sharedComponents/reviewEntry";
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
      <div className="readcuration_reviews_reviewlist_wrapper">
        <span className="readcuration_reviews_reviewlist">
          {this.props.reviews.map((el: IReview, index: number) => (
            <ReviewsEntry
              Review={el}
              books={this.props.books[index]}
              from={"readCuration"}
              key={index}
            />
          ))}
        </span>
      </div>
    );
  }
}

export default ReviewsList;
