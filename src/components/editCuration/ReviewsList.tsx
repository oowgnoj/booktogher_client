import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";
import ReviewsEntry from "./ReviewsEntry";
import { placeholdersReview } from "./placeholders";
import { IAuthor, IReviewSearchWithBooks } from "../shared/Types";
import "./index.css";

interface IProps {
  reviews: IReviewSearchWithBooks[];
  deleteEvent: any;
  handleReviewSelect: any;
}

class ReviewsList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    const reviewList: any =
      this.props.reviews[0] && this.props.reviews[0]._id
        ? this.props.reviews.map((el, index) => (
            <ReviewsEntry
              review={el}
              deleteEvent={this.props.deleteEvent}
              isPlaceHolder={" none"}
              key={index}
            />
          ))
        : placeholdersReview.map((el, index) => (
            <ReviewsEntry
              review={el}
              deleteEvent={this.props.deleteEvent}
              isPlaceHolder={" opacity"}
              key={index}
            />
          ));
    return (
      <div
        className="editcuration_reviews_reviewlist_wrapper"
        style={{
          display: "flex",
          paddingLeft: "100px",
          paddingTop: "30px"
        }}
      >
        <span
          className="editcuration_reviews_btn_wrapper"
          onClick={this.props.handleReviewSelect}
          style={{
            display: "flex",
            paddingTop: "30px"
          }}
        >
          <span className="editcuration_reviews_btn">
            <span uk-icon="plus"></span>
            <p style={{ fontSize: "0.8em" }}>서 평 추 가 하 기</p>
          </span>
        </span>
        <div
          className="editcuration_reviews_reviewlist"
          style={{
            display: "block",
            paddingLeft: "20px"
          }}
        >
          {reviewList}
        </div>
      </div>
    );
  }
}

export default ReviewsList;
