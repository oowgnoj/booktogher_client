import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";
import ReviewsEntry from "./ReviewsEntry";
import { placeholdersReview } from "./placeholders";
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
        className="writecuration_reviews_reviewlist_wrapper"
        style={{
          display: "flex",
          paddingLeft: "100px",
          paddingTop: "30px"
        }}
      >
        <span
          className="writecuration_reviews_btn_wrapper"
          onClick={this.props.handleReviewSelect}
        >
          <span className="writecuration_reviews_btn">
            <span uk-icon="plus"></span>
            <p>서 평 추 가 하 기</p>
          </span>
        </span>
        <span
          className="writecuration_reviews_reviewlist"
          style={{
            display: "block",
            paddingLeft: "70px"
          }}
        >
          {reviewList}
        </span>
      </div>
    );
  }
}

export default ReviewsList;
