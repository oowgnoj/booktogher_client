import React, { ReactElement } from "react";
import { IAuthor, IReviewSearchWithBooks } from "../shared/Types";

interface IProps {
  review: IReviewSearchWithBooks;
  deleteEvent: any;
  isPlaceHolder: string;
}

class ReviewsEntry extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  public handleDelete(): void {
    this.props.deleteEvent(this.props.review._id);
  }

  public render(): ReactElement {
    const { review } = this.props;
    return (
      <div
        className={
          "editcuration_reviews_reviewentry" + this.props.isPlaceHolder
        }
        style={{ marginLeft: "80px" }}
      >
        <span
          style={{
            display: "inline-block",
            marginRight: "30px"
          }}
        >
          <img
            src={
              review.author.image
                ? review.author.image
                : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
            }
            alt={review.title}
            onClick={this.handleDelete}
            className="editcuration_reviewentry_cropped"
          />
          <div className="middle_review">
            <span uk-icon="icon: close; ratio: 1.7" className="text"></span>
          </div>
          <div
            className="reviewentry_author"
            style={{
              textAlign: "center",
              marginTop: "5px",
              marginBottom: "10px",
              fontFamily: "Nanum Myeongjo, serif",
              fontSize: "0.8em",
              textDecoration: "none",
              color: "gray"
            }}
          >
            {review.author.name}
          </div>
        </span>
        <span
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "gray",
            position: "absolute",
            marginLeft: "2%",
            marginTop: "20px",
            width: "60%"
          }}
        >
          <div
            className="reviewentry_title"
            style={{
              fontSize: "30px",
              width: "100%"
            }}
          >
            <p
              style={{
                display: "inline",
                marginRight: "3%",
                color: "skyblue",
                fontSize: "20px"
              }}
            >
              {review.books.length > 1
                ? review.books[0].title + " 외"
                : review.books[0].title}
            </p>
            <p style={{ display: "inline", fontSize: "20px" }}>
              {review.title.replace(/<[^>]*>?/gm, "")}
            </p>
          </div>
          <div className="reviewentry_contents" style={{ fontSize: "0.9em" }}>
            <p>
              {review.contents.length > 120
                ? review.contents.replace(/<[^>]*>?/gm, "").slice(0, 120) +
                  "..."
                : review.contents.replace(/<[^>]*>?/gm, "")}
            </p>
            <hr />
          </div>
        </span>
      </div>
    );
  }
}

export default ReviewsEntry;
