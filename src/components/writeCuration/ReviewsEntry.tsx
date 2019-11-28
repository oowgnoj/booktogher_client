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
        <span style={{ display: "inline-block" }}>
          <img
            src={
              review.author.image
                ? review.author.image
                : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
            }
            alt={review.title}
            onClick={this.handleDelete}
            style={{ width: "120px", height: "auto" }}
            className="reviewentry_cropped"
          />
          <div className="middle_review">
            <span uk-icon="icon: close; ratio: 1.7" className="text"></span>
          </div>

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
            <p>
              {review.books.length > 1
                ? review.books[0].title + " 외"
                : review.books[0].title}
            </p>
            <p>{review.title.replace(/<[^>]*>?/gm, "")}</p>
          </div>
          <div className="reviewentry_contents">
            <p>{review.contents.replace(/<[^>]*>?/gm, "")}</p>
          </div>
        </span>
      </div>
    );
  }
}

export default ReviewsEntry;
