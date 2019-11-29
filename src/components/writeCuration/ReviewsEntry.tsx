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
    console.log("entry 에서 아이디 찍어보기 : ", this.props.review._id);
    this.props.deleteEvent(this.props.review._id);
  }

  public render(): ReactElement {
    const { review } = this.props;
    return (
      <div
        className={
          "writecuration_reviews_reviewentry" + this.props.isPlaceHolder
        }
      >
        <div
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
            className="writecuration_reviewentry_cropped"
          />
          <div className="middle_review">
            <span uk-icon="icon: close; ratio: 1.7" className="text"></span>
          </div>
          <div
            className="reviewentry_author"
            style={{
              textAlign: "center",
              marginTop: "-30px",
              marginBottom: "10px",
              fontFamily: "Nanum Myeongjo, serif",
              fontSize: "0.8em",
              textDecoration: "none",
              color: "gray"
            }}
          >
            {review.author.name}
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "gray",
            position: "absolute",
            marginLeft: "2%",
            marginTop: "20px"
          }}
        >
          <div className="reviewentry_title">
            <p
              style={{
                display: "inline",
                marginRight: "3%",
                color: "skyblue",
                fontSize: "1.2em"
              }}
            >
              {review.books.length > 1
                ? review.books[0].title + " 외"
                : review.books[0].title}
            </p>
            <p style={{ display: "inline", fontSize: "1.2em" }}>
              {review.title.replace(/<[^>]*>?/gm, "")}
            </p>
          </div>
          <div className="reviewentry_contents" style={{ fontSize: "0.9em" }}>
            <p>{review.contents.replace(/<[^>]*>?/gm, "")}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsEntry;
