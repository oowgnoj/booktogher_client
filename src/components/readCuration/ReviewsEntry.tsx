import React, { ReactElement } from "react";
import { IAuthor, IReview, IBookReview } from "../shared/Types";
import { Link } from "react-router-dom";

interface IProps {
  review: IReview;

  book: IBookReview[];
}

class ReviewsEntry extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    const { review, book } = this.props;
    return (
      <div
        className="readcuration_reviews_reviewentry"
        style={{ marginLeft: "80px" }}
      >
        <Link to={`/review/${review._id}`}>
          <span
            style={{
              display: "inline-block",
              marginLeft: "40px",
              marginRight: "30px",
              marginTop: "30px"
            }}
          >
            <img
              src={
                review.author.image
                  ? review.author.image
                  : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
              }
              alt={review.title}
              className="reviewentry_cropped"
            />

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
                {book.length > 1 ? book[0].title + " 외" : book[0].title}
              </p>
              <p style={{ display: "inline", fontSize: "20px" }}>
                {review.title}
              </p>
            </div>
            <div className="reviewentry_contents" style={{ fontSize: "0.9em" }}>
              <p>
                {review.contents.length > 120
                  ? review.contents
                      .replace(/<[^>]*>?/gm, "")
                      .replace(/&nbsp;/g, " ")
                      .slice(0, 120) + "..."
                  : review.contents
                      .replace(/<[^>]*>?/gm, "")
                      .replace(/&nbsp;/g, " ")}
              </p>
            </div>
          </span>
        </Link>
      </div>
    );
  }
}

export default ReviewsEntry;
